import Link from "next/link";
import { getPublicPages } from "@/lib/wiki";

export const metadata = {
  title: "The architecture · Atrium",
  description: "An executive-layer architecture, engineered for expansion — composed with your existing operations, not deployed against them.",
};

const STACK = [
  "Family office system",
  "Custodian",
  "Trust administrator",
  "Household ops",
  "Counsel",
];

const SCHEMA_ENTITIES = [
  { name: "Family Member", note: "Generation · role · council seat · trust standing" },
  { name: "Holding Entity", note: "Operating company · vehicle · holding · foundation" },
  { name: "Trust", note: "Settlor · trustees · beneficiaries · governing law" },
  { name: "Decision", note: "The question · options · reasoning · the choice made" },
  { name: "Distribution", note: "Capital movement · recipient · authorizing decision" },
  { name: "Council Resolution", note: "Motion · vote · resulting decisions" },
  { name: "Counsel Engagement", note: "Firm · lead · scope · matters · memoranda" },
  { name: "Advisor Relationship", note: "Investment · tax · philanthropic · governance" },
  { name: "Philanthropic Commitment", note: "Grant · pledge · recipient · cadence" },
  { name: "Succession Marker", note: "Planned or recorded handover · reasoning · timing" },
];

export default function ArchitecturePage() {
  const pages = getPublicPages();
  const byCategory = new Map<string, typeof pages>();
  for (const p of pages) {
    const list = byCategory.get(p.category) ?? [];
    list.push(p);
    byCategory.set(p.category, list);
  }
  const sortedCats = [...byCategory.entries()].sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="px-12 py-28 max-w-[1000px]">
      <div className="label">Part two</div>
      <h1 className="mt-6 font-display text-[56px] leading-[1.04] tracking-[-0.015em] font-normal text-ink">
        The architecture
      </h1>
      <p className="mt-8 font-display italic text-[19px] leading-[1.55] text-ink-soft max-w-[720px]">
        An executive-layer architecture, engineered for expansion — composed with your existing operations, not deployed against them.
      </p>

      {/* Definition */}
      <section className="mt-24">
        <h2 className="font-display text-[34px] leading-[1.08] tracking-[-0.005em] font-normal text-ink">
          Atrium is the executive-layer operating system.
        </h2>
        <p className="mt-8 text-[16px] leading-[1.75] text-ink-soft max-w-[720px]">
          A structured wiki of your company&rsquo;s reasoning, relationships, decisions, and institutional memory — kept current by an AI agent, governed by a schema your company writes itself, queryable in plain language.
        </p>
        <blockquote className="pull mt-10 max-w-[640px]">
          It sits above your stack. It composes. It does not replace.
        </blockquote>
      </section>

      {/* Composition not replacement — VISUAL */}
      <section className="mt-24 border-t border-rule pt-14">
        <div className="label-mute">The architectural posture</div>
        <h2 className="mt-3 font-display text-[32px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
          Composition, not replacement.
        </h2>
        <p className="mt-5 text-[15px] leading-[1.7] text-ink-soft max-w-[680px]">
          Atrium does not rip out your stack. It composes from it. The systems below stay exactly where they are; Atrium reads from them and composes the executive narrative above.
        </p>

        <div className="mt-12 max-w-[820px]">
          {/* Top: Atrium */}
          <div className="border border-ink bg-ink text-paper px-7 py-5 text-center">
            <div className="label" style={{ color: "#C98859" }}>Atrium &middot; Executive layer</div>
            <div className="mt-1.5 font-display italic text-[17px] text-paper">
              Executive narrative, composed.
            </div>
          </div>

          {/* Arrows */}
          <div className="mt-7 flex justify-center text-copper text-[16px] tracking-[0.4em]">
            ↑ &nbsp; ↑ &nbsp; ↑ &nbsp; ↑ &nbsp; ↑
          </div>

          {/* Bottom: existing stack */}
          <div className="mt-7 grid grid-cols-2 md:grid-cols-5 gap-3">
            {STACK.map((s) => (
              <div
                key={s}
                className="border border-rule bg-paper-card px-3 py-5 text-center text-[12.5px] leading-[1.3] text-ink-soft"
              >
                {s}
              </div>
            ))}
          </div>

          <div className="mt-7 label-mute text-center">
            Your existing operations · unchanged
          </div>
        </div>

        <p className="mt-10 text-[14px] leading-[1.7] text-ink-soft max-w-[680px]">
          No rip-and-replace. No parallel run. No cutover risk. The buy decision is additive, not substitutive.
        </p>
      </section>

      {/* Four-layer architecture compact */}
      <section className="mt-24 border-t border-rule pt-14">
        <div className="label-mute">The architecture</div>
        <h2 className="mt-3 font-display text-[32px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
          Four layers. Plain text. Agent-tended.
        </h2>

        <div className="mt-10 space-y-2 max-w-[820px]">
          {[
            { num: "04", role: "Interface", name: "Conversational", note: "Plain-language queries · citations on every claim" },
            { num: "03", role: "Agent", name: "Composition engine", note: "Reads structured outputs · expands with context · drafts narrative" },
            { num: "02", role: "Memory", name: "Wiki + Schema", note: "Markdown · wikilinks · git-versioned in a repo you own" },
            { num: "01", role: "Operational · your existing stack", name: "Family office · Custodian · Trust · Household · Counsel", note: "", muted: true },
          ].map((l) => (
            <div
              key={l.num}
              className={`border px-7 py-5 ${l.muted ? "border-dashed border-rule bg-paper-soft" : "border-rule bg-paper-card"}`}
            >
              <div className={`text-[10px] tracking-[0.22em] uppercase ${l.muted ? "text-mute" : "text-copper"}`}>
                {l.num} &middot; {l.role}
              </div>
              <div className={`mt-1.5 font-display text-[19px] tracking-[-0.005em] ${l.muted ? "text-ink-soft" : "text-ink"}`}>
                {l.name}
              </div>
              {l.note && <div className="mt-1 text-[12.5px] text-mute">{l.note}</div>}
            </div>
          ))}
        </div>

        <p className="mt-10 font-mono text-[11px] text-mute tracking-[0.04em] max-w-[760px]">
          Every change a signed git commit &middot; every claim cites its source &middot; plain text, end-to-end
        </p>
      </section>

      {/* Schema entity types */}
      <section className="mt-24 border-t border-rule pt-14">
        <div className="label-mute">The schema</div>
        <h2 className="mt-3 font-display text-[32px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
          What your family is, written down.
        </h2>
        <p className="mt-5 text-[15px] leading-[1.7] text-ink-soft max-w-[680px]">
          Your wiki is governed by a schema your family writes with us. For a family enterprise it typically covers ten entity types. Each is a page type with conventions, required fields, and wikilinks that bind it to the rest of the memory.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 max-w-[920px]">
          {SCHEMA_ENTITIES.map((e, i) => (
            <div key={e.name} className="border-t border-rule-soft py-4 flex items-baseline gap-5">
              <span className="font-mono text-[10px] text-mute-soft w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1 min-w-0">
                <div className="font-display text-[16px] tracking-[-0.005em] text-ink">{e.name}</div>
                <div className="text-[12px] text-mute mt-0.5">{e.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 text-[12px] tracking-[0.02em]">
          <Link
            href="/architecture/the-family-schema"
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
          >
            Read the schema page &rarr;
          </Link>
        </div>
      </section>

      {/* Repository ownership — load-bearing feature box */}
      <section className="mt-24 border-t border-rule pt-14">
        <div className="label-mute">No vendor lock-in</div>
        <h2 className="mt-3 font-display text-[32px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
          Your family owns the repository.
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 max-w-[1000px]">
          <div className="space-y-5 text-[15px] leading-[1.75] text-ink-soft max-w-[640px]">
            <p>
              The wiki is plain markdown in a private GitHub repository registered to an organization your family controls. Not Atrium&rsquo;s repository. Not a hosted product you log into. A folder of text files your family owns.
            </p>
            <p>
              If Atrium ever stops working for you, the archive remains yours unchanged the day after. The schema, decisions, council resolutions, founder&rsquo;s reasoning — all readable by any text editor, ready to be tended by a successor practice or by your own internal operator.
            </p>
            <p className="text-ink">
              The reversal cost is the cost of archiving one folder.
            </p>
          </div>

          <aside className="border border-rule bg-paper-card px-7 py-6 text-[12.5px] leading-[1.65] text-ink-soft font-mono">
            <div className="label-mute mb-3 font-sans">What this means in practice</div>
            <ul className="space-y-3">
              <li className="flex gap-3"><span className="text-copper">·</span> Every commit signed by name</li>
              <li className="flex gap-3"><span className="text-copper">·</span> Full history visible to you forever</li>
              <li className="flex gap-3"><span className="text-copper">·</span> <span className="font-sans">git clone</span> downloads everything</li>
              <li className="flex gap-3"><span className="text-copper">·</span> Counsel and CPAs can audit the chain</li>
              <li className="flex gap-3"><span className="text-copper">·</span> No subscription holds your memory hostage</li>
            </ul>
          </aside>
        </div>

        <div className="mt-9 text-[12px] tracking-[0.02em]">
          <Link
            href="/architecture/why-the-family-owns-the-repository"
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
          >
            The full argument &rarr;
          </Link>
        </div>
      </section>

      {/* Canon */}
      <section className="mt-24 border-t border-rule pt-14">
        <div className="label-mute">The canon</div>
        <h2 className="mt-3 font-display text-[28px] leading-[1.15] tracking-[-0.005em] font-normal text-ink">
          Pages in this dossier.
        </h2>
        <p className="mt-4 text-[14px] text-mute italic font-display max-w-[640px]">
          Each is a plain-text page in the same wiki the practice runs itself. Linked liberally; readable in any order.
        </p>

        <div className="mt-12 space-y-12">
          {sortedCats.map(([cat, items]) => (
            <div key={cat}>
              <div className="label">{cat}</div>
              <ul className="mt-5 space-y-3">
                {items.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/architecture/${p.name}`}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="text-mute-soft text-[10px] uppercase tracking-[0.22em] w-10">·</span>
                      <span className="flex-1">
                        <span className="font-display text-[20px] tracking-[-0.005em] text-ink group-hover:text-copper transition-colors duration-150">
                          {p.title}
                        </span>
                        {p.frontmatter.tags && (
                          <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-mute-soft">
                            {(p.frontmatter.tags as string[]).slice(0, 2).join(" · ")}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-24 border-t border-rule pt-10">
        <p className="font-display italic text-[18px] text-ink-soft">
          For how a typical engagement unfolds —{" "}
          <Link
            href="/practice"
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150"
          >
            continue to the practice
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
