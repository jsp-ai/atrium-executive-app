import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/MarkdownBody";
import Container from "@/components/Container";
import { getPublicPages } from "@/lib/wiki";

export async function generateStaticParams() {
  return getPublicPages().map((p) => ({ slug: p.name }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPublicPages().find((p) => p.name === slug);
  if (!page) return {};
  return {
    title: `${page.title} · Atrium`,
    description: page.frontmatter.title ?? page.title,
  };
}

export default async function PublicWikiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPublicPages().find((p) => p.name === slug);

  if (!page) {
    notFound();
  }

  const { title, frontmatter, category, body } = page;
  const tags = (frontmatter.tags as string[] | undefined) ?? [];
  const links = (frontmatter.links as string[] | undefined) ?? [];

  // For the public reader, rewrite wikilinks of the form [[slug]] to point at
  // /architecture/<leaf> rather than the default /wiki/<slug>. Wikilinks in
  // the body use leaf names already.
  return (
    <div className="py-14 sm:py-20">
      <Container width="text">
        <Link
          href="/architecture"
          className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-ink transition-colors duration-150"
        >
          &larr; The architecture
        </Link>

        <div className="mt-10 label">{category}</div>
        <h1 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[42px] leading-[1.1] tracking-[-0.01em] font-normal text-ink">
          {title}
        </h1>

        <div className="mt-10 border-y border-rule-soft bg-paper-card px-6 sm:px-7 py-5 grid grid-cols-2 gap-6 text-[12px] font-mono">
          {frontmatter.created && (
            <div>
              <div className="label-mute mb-1.5">Created</div>
              <div className="text-ink-soft">{formatDate(frontmatter.created)}</div>
            </div>
          )}
          {frontmatter.updated && (
            <div>
              <div className="label-mute mb-1.5">Updated</div>
              <div className="text-ink-soft">{formatDate(frontmatter.updated)}</div>
            </div>
          )}
          {tags.length > 0 && (
            <div className="col-span-2">
              <div className="label-mute mb-1.5">Tags</div>
              <div className="text-ink-soft">{tags.join(" · ")}</div>
            </div>
          )}
          {links.length > 0 && (
            <div className="col-span-2">
              <div className="label-mute mb-1.5">Links</div>
              <div className="text-ink-soft break-words">{links.join(" · ")}</div>
            </div>
          )}
        </div>

        <article className="mt-12">
          <MarkdownBody body={body} linkBase="/architecture/" />
        </article>

        <div className="mt-16 sm:mt-20 border-t border-rule-soft pt-6 text-[11px] font-mono text-mute tracking-[0.02em]">
          signed &middot; plain text &middot; <span className="text-copper">atrium-bot</span>
        </div>
      </Container>
    </div>
  );
}

function formatDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return String(value);
}
