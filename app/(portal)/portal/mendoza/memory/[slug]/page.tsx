import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/MarkdownBody";
import { getAllPages, findByName } from "@/lib/mendoza-wiki";
import { ACCOUNT } from "@/lib/mock/mendoza";

const CATEGORY_LABELS: Record<string, string> = {
  "family-members": "Family",
  holdings: "Holdings",
  trusts: "Trusts",
  decisions: "Decisions",
  distributions: "Distributions",
  council: "Council",
  counsel: "Counsel",
  reasoning: "Founder reasoning",
  philanthropy: "Philanthropy",
};

export async function generateStaticParams() {
  return getAllPages()
    .filter((p) => p.name !== "_schema")
    .map((p) => ({ slug: p.name }));
}

export default async function MendozaWikiPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "_schema") notFound();
  const page = findByName(slug);

  if (!page) notFound();

  const { title, frontmatter, category, body } = page;
  const tags = (frontmatter.tags as string[] | undefined) ?? [];
  const links = (frontmatter.links as string[] | undefined) ?? [];
  const members = (frontmatter.members as string[] | undefined) ?? [];

  // Compute backlinks: pages that link to this one
  const allPages = getAllPages();
  const backlinks = allPages.filter((p) => {
    const ls = (p.frontmatter.links as string[] | undefined) ?? [];
    return ls.some((l) => l.replace(/^\[\[|\]\]$/g, "") === page.name);
  });

  const catLabel = CATEGORY_LABELS[category] ?? category;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] min-h-full">
      <div className="px-5 sm:px-10 lg:px-12 py-10 sm:py-12 max-w-[760px]">
        <Link
          href={`/portal/${ACCOUNT.slug}/memory`}
          className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-ink transition-colors duration-150"
        >
          &larr; Memory
        </Link>

        <div className="mt-10 label">{catLabel}</div>
        <h1 className="mt-3 font-display text-[30px] sm:text-[36px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
          {title}
        </h1>

        {frontmatter.entity && (
          <div className="mt-3 text-[11px] tracking-[0.18em] uppercase text-copper">
            {frontmatter.entity}
            {frontmatter.status && (
              <span className="ml-3 text-mute">&middot; {frontmatter.status}</span>
            )}
          </div>
        )}

        <article className="mt-12">
          <MarkdownBody body={body} linkBase={`/portal/${ACCOUNT.slug}/memory/`} />
        </article>

        {backlinks.length > 0 && (
          <section className="mt-16 pt-8 border-t border-rule-soft">
            <div className="label-mute mb-4">
              Cited by &middot; {backlinks.length} {backlinks.length === 1 ? "page" : "pages"}
            </div>
            <ul className="space-y-2">
              {backlinks.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/portal/${ACCOUNT.slug}/memory/${b.name}`}
                    className="text-[14px] text-ink-soft hover:text-copper border-b border-dotted border-mute-soft hover:border-copper transition-colors duration-150"
                  >
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-20 border-t border-rule-soft pt-6 flex items-center justify-between text-[11px] font-mono text-mute tracking-[0.02em]">
          <span>
            signed &middot; plain text &middot;{" "}
            <span className="text-copper">atrium-bot</span>
          </span>
          <Link
            href={`/portal/${ACCOUNT.slug}/concierge`}
            className="text-[10px] uppercase tracking-[0.22em] text-mute border border-rule px-3 py-1.5 hover:text-paper hover:bg-ink hover:border-ink transition-all duration-150"
          >
            Suggest an edit
          </Link>
        </div>
      </div>

      <aside className="border-t lg:border-t-0 lg:border-l border-rule-soft bg-paper-soft px-5 sm:px-7 py-10 lg:py-12 text-[12px]">
        <div className="label-mute">Frontmatter</div>
        <dl className="mt-4 space-y-3 font-mono">
          {frontmatter.created && (
            <Row label="Created" value={formatDate(frontmatter.created)} />
          )}
          {frontmatter.updated && (
            <Row label="Updated" value={formatDate(frontmatter.updated)} />
          )}
          {frontmatter.entity && (
            <Row label="Entity" value={String(frontmatter.entity)} />
          )}
          {frontmatter.status && (
            <Row label="Status" value={String(frontmatter.status)} />
          )}
          {tags.length > 0 && <Row label="Tags" value={tags.join(" · ")} />}
          {typeof frontmatter.cited_by === "number" && (
            <Row label="Cited by" value={String(frontmatter.cited_by)} />
          )}
        </dl>

        {members.length > 0 && (
          <>
            <div className="label-mute mt-9 mb-3">Members present</div>
            <ul className="space-y-1.5">
              {members.map((m) => (
                <li
                  key={m}
                  className="text-[12px] text-ink-soft leading-[1.4]"
                >
                  {m}
                </li>
              ))}
            </ul>
          </>
        )}

        {links.length > 0 && (
          <>
            <div className="label-mute mt-9 mb-3">Links</div>
            <ul className="space-y-1.5">
              {links.map((l) => {
                const slugVal = String(l).replace(/^\[\[|\]\]$/g, "");
                return (
                  <li key={l}>
                    <Link
                      href={`/portal/${ACCOUNT.slug}/memory/${slugVal}`}
                      className="text-[12px] text-ink-soft hover:text-copper border-b border-dotted border-mute-soft hover:border-copper transition-colors duration-150"
                    >
                      {slugVal}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        <div className="mt-9 pt-6 border-t border-rule-soft text-[10.5px] leading-[1.6] text-mute font-mono">
          Last commit
          <br />
          atrium-bot &middot; just now
        </div>
      </aside>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <dt className="text-[10px] tracking-[0.18em] uppercase text-mute-soft">
        {label}
      </dt>
      <dd className="text-[12px] text-ink-soft mt-0.5">{value}</dd>
    </div>
  );
}

function formatDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}
