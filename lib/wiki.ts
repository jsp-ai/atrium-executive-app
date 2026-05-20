import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DEFAULT_ROOT = path.join("content", "wiki");

export type WikiFrontmatter = {
  title?: string;
  created?: string;
  updated?: string;
  tags?: string[];
  links?: string[];
  cited_by?: number;
  public?: boolean;
  // family-wiki fields
  entity?: string;
  status?: string;
  members?: string[];
};

export type WikiPage = {
  slug: string;
  category: string;
  name: string;
  title: string;
  frontmatter: WikiFrontmatter;
  body: string;
};

export type WikiCategory = {
  name: string;
  pages: { slug: string; name: string; title: string }[];
};

function resolveRoot(root: string): string {
  return path.isAbsolute(root) ? root : path.join(process.cwd(), root);
}

function walk(dir: string, base = ""): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      files.push(...walk(full, rel));
    } else if (e.name.endsWith(".md")) {
      files.push(rel);
    }
  }
  return files;
}

export function getAllPages(root: string = DEFAULT_ROOT): WikiPage[] {
  const absRoot = resolveRoot(root);
  const files = walk(absRoot);
  return files
    .map((relPath) => readPage(relPath.replace(/\.md$/, ""), root))
    .filter((p): p is WikiPage => p !== null);
}

export function getPublicPages(root: string = DEFAULT_ROOT): WikiPage[] {
  return getAllPages(root).filter((p) => p.frontmatter.public === true);
}

export function readPage(slug: string, root: string = DEFAULT_ROOT): WikiPage | null {
  const filePath = path.join(resolveRoot(root), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const segments = slug.split("/");
  const category = segments.slice(0, -1).join("/") || "uncategorized";
  const name = segments[segments.length - 1];
  const title = (data.title as string) || titleize(name);
  return {
    slug,
    category,
    name,
    title,
    frontmatter: data as WikiFrontmatter,
    body: content,
  };
}

export function getCategories(root: string = DEFAULT_ROOT): WikiCategory[] {
  const pages = getAllPages(root);
  const byCat = new Map<string, WikiCategory>();
  for (const p of pages) {
    if (!byCat.has(p.category)) {
      byCat.set(p.category, { name: p.category, pages: [] });
    }
    byCat.get(p.category)!.pages.push({ slug: p.slug, name: p.name, title: p.title });
  }
  const sorted = Array.from(byCat.values()).sort((a, b) => a.name.localeCompare(b.name));
  for (const c of sorted) c.pages.sort((a, b) => a.name.localeCompare(b.name));
  return sorted;
}

function titleize(s: string): string {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function findByName(name: string, root: string = DEFAULT_ROOT): WikiPage | undefined {
  return getAllPages(root).find((p) => p.name === name);
}

/**
 * Pre-process `[[slug]]` wikilinks into markdown links.
 * `linkBase` defaults to "/wiki/"; pass "/architecture/" or "/portal/[slug]/memory/" for other contexts.
 */
export function expandWikilinks(body: string, linkBase = "/wiki/"): string {
  const base = linkBase.endsWith("/") ? linkBase : `${linkBase}/`;
  return body.replace(/\[\[([^\]]+)\]\]/g, (_, slug) => {
    const clean = String(slug).trim();
    return `[${clean}](${base}${clean})`;
  });
}
