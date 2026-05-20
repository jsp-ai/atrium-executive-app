import Link from "next/link";
import { ACCOUNT } from "@/lib/mock/mendoza";
import { getCategories, getAllPages } from "@/lib/mendoza-wiki";

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

export default function MemoryIndex() {
  const cats = getCategories().filter((c) => c.name !== "uncategorized");
  const allPages = getAllPages().filter((p) => p.name !== "_schema");

  // Recently tended — sort by updated date desc, top 5
  const recent = [...allPages]
    .filter((p) => p.frontmatter.updated)
    .sort((a, b) => {
      const ua = String(a.frontmatter.updated ?? "");
      const ub = String(b.frontmatter.updated ?? "");
      return ub.localeCompare(ua);
    })
    .slice(0, 5);

  const totalPages = allPages.length;
  const decisions = allPages.filter((p) => p.frontmatter.entity === "Decision").length;
  const resolutions = allPages.filter((p) => p.frontmatter.entity === "Council Resolution").length;

  return (
    <div className="grid grid-cols-[260px_1fr] gap-0 min-h-full">
      {/* Tree column */}
      <aside className="border-r border-rule-soft bg-paper-soft px-7 py-10">
        <div className="label">Memory</div>
        <p className="mt-3 text-[12px] leading-[1.55] text-mute font-display italic">
          Your family&rsquo;s plain-text wiki. Read freely. Suggest edits to your concierge.
        </p>

        <div className="mt-9 space-y-6">
          {cats.map((cat) => (
            <div key={cat.name}>
              <div className="label-mute mb-2.5">
                {CATEGORY_LABELS[cat.name] ?? cat.name}
              </div>
              <ul className="space-y-1.5">
                {cat.pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/portal/${ACCOUNT.slug}/memory/${p.name}`}
                      className="block text-[12.5px] text-ink-soft hover:text-copper transition-colors duration-150 leading-[1.4]"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          href={`/portal/${ACCOUNT.slug}/memory/schema`}
          className="mt-9 inline-block text-[10px] tracking-[0.22em] uppercase text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
        >
          View the schema &rarr;
        </Link>

        <Link
          href={`/portal/${ACCOUNT.slug}/activity`}
          className="mt-9 pt-6 border-t border-rule-soft text-[10px] tracking-[0.18em] uppercase text-mute-soft font-mono hover:text-ink transition-colors duration-150 block"
        >
          Last sync &middot; 2 min ago &rarr;
        </Link>
      </aside>

      {/* Body */}
      <div className="px-12 py-12 max-w-[760px]">
        <div className="label">Memory</div>
        <h1 className="mt-3 font-display text-[34px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
          The Mendoza family wiki.
        </h1>
        <p className="mt-4 font-display italic text-[16px] leading-[1.55] text-ink-soft max-w-[640px]">
          Composed and tended by your concierges. Every page is plain markdown in a private repository your family owns.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-3 max-w-[640px] text-[12px] font-mono">
          <Stat label="Pages" value={String(totalPages)} />
          <Stat label="Decisions captured" value={String(decisions)} />
          <Stat label="Council resolutions" value={String(resolutions)} />
          <Stat label="Signed commits this week" value="23" />
          <Stat label="Atrium-bot syncs" value="hourly" />
          <Stat label="Repository" value="atrium-wiki-mendoza · private" />
        </div>

        <section className="mt-16">
          <div className="label-mute">Recently tended</div>
          <ul className="mt-5 space-y-4">
            {recent.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/portal/${ACCOUNT.slug}/memory/${p.name}`}
                  className="group flex items-baseline gap-5"
                >
                  <span className="font-mono text-[11px] text-mute-soft w-[90px] shrink-0">
                    {formatDate(p.frontmatter.updated)}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-mute w-[120px] shrink-0">
                    {CATEGORY_LABELS[p.category] ?? p.category}
                  </span>
                  <span className="font-display text-[16px] tracking-[-0.005em] text-ink group-hover:text-copper transition-colors duration-150">
                    {p.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-rule-soft pt-8">
          <div className="label-mute">Schema</div>
          <p className="mt-4 text-[14px] leading-[1.7] text-ink-soft max-w-[600px]">
            Your wiki is governed by a schema your family wrote with us — ten entity types calibrated to how the Mendoza enterprise actually operates. Three additional conditional types are scoped to Casa Mendoza Consumer only.
          </p>
          <Link
            href={`/portal/${ACCOUNT.slug}/memory/schema`}
            className="mt-4 inline-block text-[11px] uppercase tracking-[0.18em] text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150 px-1 py-0.5"
          >
            Read the schema
          </Link>
        </section>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.18em] uppercase text-mute-soft">{label}</div>
      <div className="text-[13px] text-ink mt-1">{value}</div>
    </div>
  );
}

function formatDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}
