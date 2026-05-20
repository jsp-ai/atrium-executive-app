import Link from "next/link";
import { ACCOUNT } from "@/lib/mock/mendoza";
import { getAllPages } from "@/lib/mendoza-wiki";

const ENTITIES: { name: string; folder: string; required: string; conditional?: boolean }[] = [
  { name: "Family Member", folder: "family-members", required: "Generation · council seat status" },
  { name: "Holding Entity", folder: "holdings", required: "Jurisdiction · parent (where applicable) · status" },
  { name: "Trust", folder: "trusts", required: "Settlor · trustees · governing law · beneficiary classes" },
  { name: "Decision", folder: "decisions", required: "Decision-maker · date · status" },
  { name: "Distribution", folder: "distributions", required: "Scheduled execution · amount · authorizing decision" },
  { name: "Council Resolution", folder: "council", required: "Date · members present · motions resolved" },
  { name: "Counsel Engagement", folder: "counsel", required: "Lead counsel firm · status · family lead" },
  { name: "Succession Marker", folder: "council", required: "Type · outgoing · incoming · effective date" },
  { name: "Philanthropic Commitment", folder: "philanthropy", required: "Established · lead · annual cadence" },
  { name: "Founder Reasoning", folder: "reasoning", required: "Captured from · session dates · concierge present" },
];

const CONDITIONAL: { name: string; scope: string }[] = [
  { name: "Product", scope: "Casa Mendoza Consumer only" },
  { name: "Supplier", scope: "Casa Mendoza Consumer only" },
  { name: "Distributor", scope: "Casa Mendoza Consumer only" },
];

export default function SchemaViewer() {
  const allPages = getAllPages().filter((p) => p.name !== "_schema");

  // Count pages per entity type
  const countByEntity = new Map<string, number>();
  for (const p of allPages) {
    const e = String(p.frontmatter.entity ?? "");
    if (!e) continue;
    countByEntity.set(e, (countByEntity.get(e) ?? 0) + 1);
  }

  const totalPages = allPages.length;
  const totalEntityTypes = ENTITIES.length;
  const totalConditional = CONDITIONAL.length;

  return (
    <div className="px-5 sm:px-10 lg:px-12 py-10 sm:py-12 max-w-[920px]">
      <Link
        href={`/portal/${ACCOUNT.slug}/memory`}
        className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-ink transition-colors duration-150"
      >
        &larr; Memory
      </Link>

      <div className="mt-10 label">Schema</div>
      <h1 className="mt-3 font-display text-[30px] sm:text-[36px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
        The Mendoza family schema.
      </h1>
      <p className="mt-4 font-display italic text-[16px] leading-[1.55] text-ink-soft max-w-[680px]">
        Written collaboratively with Don Tomás during the Install weeks. Ratified by the council on 2026-05-15. The schema is allowed to evolve; changes are themselves council resolutions and live in the same git history.
      </p>

      <div className="mt-12 grid grid-cols-3 gap-x-10 max-w-[640px] text-[12px] font-mono">
        <Stat label="Entity types" value={String(totalEntityTypes)} />
        <Stat label="Conditional types" value={String(totalConditional)} />
        <Stat label="Pages governed" value={String(totalPages)} />
      </div>

      {/* Entity types */}
      <section className="mt-16">
        <div className="label-mute">Canonical entity types</div>
        <p className="mt-3 text-[13px] text-mute font-display italic max-w-[640px]">
          Applied across the entire family wiki.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
          {ENTITIES.map((e, i) => {
            const count = countByEntity.get(e.name) ?? 0;
            return (
              <div
                key={e.name}
                className="border-t border-rule py-5 flex items-baseline gap-5"
              >
                <span className="font-mono text-[10px] text-mute-soft w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-display text-[17px] tracking-[-0.005em] text-ink">
                      {e.name}
                    </div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-copper">
                      {count} {count === 1 ? "page" : "pages"}
                    </div>
                  </div>
                  <div className="mt-1.5 text-[11.5px] text-mute font-mono">
                    /{e.folder}/
                  </div>
                  <div className="mt-2 text-[12.5px] text-ink-soft leading-[1.5]">
                    Required: <span className="font-display italic text-mute">{e.required}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Conditional entities */}
      <section className="mt-20">
        <div className="label-mute">Conditional extensions</div>
        <p className="mt-3 text-[13px] text-mute font-display italic max-w-[640px]">
          Scoped to a single operating unit. Do not propagate to the rest of the family wiki.
        </p>

        <div className="mt-7 space-y-2 max-w-[640px]">
          {CONDITIONAL.map((c) => (
            <div
              key={c.name}
              className="border border-dashed border-rule px-6 py-4 flex items-baseline justify-between"
            >
              <div className="font-display text-[16px] tracking-[-0.005em] text-ink">{c.name}</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-mute">{c.scope}</div>
            </div>
          ))}
        </div>

        <p className="mt-7 text-[13px] text-mute font-display italic max-w-[680px]">
          Ratified at{" "}
          <Link
            href={`/portal/${ACCOUNT.slug}/memory/2026-05-15-council-resolution`}
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 transition-colors duration-150"
          >
            2026-05-15-council-resolution
          </Link>
          .
        </p>
      </section>

      {/* Co-evolution policy */}
      <section className="mt-20 border-t border-rule pt-12">
        <div className="label-mute">Schema co-evolution</div>
        <h2 className="mt-3 font-display text-[22px] tracking-[-0.005em] font-normal text-ink">
          The schema evolves with the family.
        </h2>
        <p className="mt-5 text-[15px] leading-[1.7] text-ink-soft max-w-[680px]">
          New entity types are proposed by an Atrium concierge, reviewed by Don Tomás, and ratified at the next council. Schema changes are themselves recorded as council resolutions and live in the same git history as every other change to the wiki. The principal can read the schema&rsquo;s own history the same way they read any other page&rsquo;s.
        </p>
      </section>

      <div className="mt-20 border-t border-rule-soft pt-6 flex items-center justify-between text-[11px] font-mono text-mute tracking-[0.02em]">
        <span>signed &middot; plain text &middot; <span className="text-copper">atrium-bot</span></span>
        <Link
          href={`/portal/${ACCOUNT.slug}/concierge`}
          className="text-[10px] uppercase tracking-[0.22em] text-mute border border-rule px-3 py-1.5 hover:text-paper hover:bg-ink hover:border-ink transition-all duration-150"
        >
          Propose a schema change
        </Link>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.18em] uppercase text-mute-soft">{label}</div>
      <div className="text-[16px] text-ink mt-1 font-display">{value}</div>
    </div>
  );
}
