import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "The concierge model · Atrium",
  description: "What Atrium does. What you see. The technical complexity is invisible by design.",
};

const ATRIUM_HANDLES: { heading: string; items: string[] }[] = [
  {
    heading: "Installation",
    items: [
      "Provision the macOS workstation tooling — Homebrew, Marp CLI, Google Chrome",
      "Stand up a private GitHub repository in an organization your family controls",
      "Configure two-factor authentication on every operator account",
      "Generate signed-commit GPG keys for the atrium-bot service account",
      "Scaffold the project folder structure — strategy, deliverables, meetings, research, brand, raw",
      "Author the CLAUDE.md schema document calibrated to your family",
      "Configure the .gitignore for sensitive material (counsel-flagged, financial)",
      "Open the project folder as an Obsidian vault and trust its plugins",
      "Install Marp Slides and Excalidraw community plugins",
      "Commit the .obsidian configuration so settings travel with the repository",
    ],
  },
  {
    heading: "Ingest",
    items: [
      "Read custodian statements monthly and reconcile to the wiki rollup",
      "Parse trustee letters into versioned amendment pages",
      "OCR counsel memoranda and link to the decisions they shape",
      "Capture council resolutions verbatim with vote records",
      "Convert household-staff weekly notes into structured calendar entries",
      "Ingest the rolling 13-week cash forecast each Sunday evening",
    ],
  },
  {
    heading: "Composition",
    items: [
      "Draft the weekly briefing the principal reads on the dashboard",
      "Compose answers to plain-language questions, citing every claim",
      "Maintain backlinks between decisions, resolutions, and entities",
      "Lint the wiki for stale citations and contradictions",
      "Surface decisions the council has revisited more than once",
      "Capture the founder&rsquo;s reasoning in structured working sessions",
    ],
  },
  {
    heading: "Stewardship",
    items: [
      "Run schema reviews when new entity types arrive",
      "Operate the daily git workflow loop across Claude Code, Obsidian, VSCode, GitHub Desktop, Marp",
      "Push every change as a signed commit with a clear summary",
      "Render decks and briefing packs through Marp when council requires",
      "Triage the troubleshooting table when tools misbehave",
      "Coordinate counsel, custodians, and trustees on the family&rsquo;s behalf",
    ],
  },
];

const FAMILY_SEES: string[] = [
  "Reads the weekly briefing on the dashboard",
  "Asks questions in plain language",
  "Decides what to decide",
];

export default function ConciergeModel() {
  return (
    <div className="py-16 sm:py-24">
      <Container width="wide">
        <div className="label">The practice &middot; The concierge model</div>
        <h1 className="mt-6 font-display text-[38px] sm:text-[50px] lg:text-[56px] leading-[1.06] tracking-[-0.015em] font-normal text-ink max-w-[860px]">
          The family does not edit. The family reads and asks.
        </h1>
        <p className="mt-7 font-display italic text-[18px] sm:text-[19px] leading-[1.55] text-ink-soft max-w-[720px]">
          Every other tool in the executive-AI category is built for the technical operator. Atrium is built for the people the technical operators serve.
        </p>

        <p className="mt-9 text-[16px] leading-[1.7] text-ink-soft max-w-[760px]">
          The Atrium Implementation Manual is 100 pages long. It documents the macOS setup, the GitHub workflow, the Obsidian vault, the schema templates, the workflow loop across five applications, the troubleshooting table. Your family will not read it. Your family will not need to.
        </p>

        <blockquote className="pull mt-10 max-w-[760px]">
          The white-glove is not an option. It is the product.
        </blockquote>
      </Container>

      {/* The split */}
      <Container width="wide" className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-14">
          {/* What we handle */}
          <div>
            <div className="label">What Atrium handles</div>
            <h2 className="mt-3 font-display text-[24px] sm:text-[28px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
              Forty-some operations a week. None of them yours.
            </h2>

            <div className="mt-9 space-y-9">
              {ATRIUM_HANDLES.map((group) => (
                <div key={group.heading}>
                  <div className="label-mute">{group.heading}</div>
                  <ul className="mt-4 space-y-2.5 text-[14px] leading-[1.6] text-ink-soft">
                    {group.items.map((it) => (
                      <li key={it} className="flex gap-3.5">
                        <span className="text-mute-soft pt-0.5 select-none">&mdash;</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* What the family sees */}
          <div>
            <div className="label">What you do</div>
            <h2 className="mt-3 font-display text-[24px] sm:text-[28px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
              Three things. None of them technical.
            </h2>

            <div className="mt-9 lg:sticky lg:top-12">
              <ol className="space-y-8">
                {FAMILY_SEES.map((item, i) => (
                  <li key={item} className="border-l-2 border-copper pl-6 sm:pl-7 py-1">
                    <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 font-display text-[19px] sm:text-[20px] leading-[1.3] tracking-[-0.005em] text-ink">
                      {item}.
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 border border-rule bg-paper-card px-6 sm:px-7 py-6">
                <div className="label-mute mb-3">No terminal. No GitHub. No markdown.</div>
                <p className="text-[13.5px] leading-[1.7] text-ink-soft">
                  You will not run a command. You will not configure a plugin. You will not open a folder. The portal is the only surface you touch — and the portal is a conversation.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/portal/welcome"
                  className="inline-block text-[11px] uppercase tracking-[0.22em] text-paper bg-ink border border-ink px-6 py-3 hover:bg-copper hover:border-copper transition-all duration-150"
                >
                  Walk through the principal&rsquo;s view &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* The journey */}
      <Container width="wide" className="mt-16 sm:mt-28">
        <div className="border-t border-rule pt-12 sm:pt-16">
          <div className="label">The arc</div>
          <h2 className="mt-3 font-display text-[28px] sm:text-[34px] leading-[1.1] tracking-[-0.005em] font-normal text-ink max-w-[760px]">
            From first conversation to first answer in your house.
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-9 sm:gap-x-10">
            <Phase num="01" tag="Week 0" title="The conversation" body="A 60-minute call with the principal, an heir, or the family-office director. We listen. We tell you in writing whether there is fit." />
            <Phase num="02" tag="Week 1" title="The diagnostic" body="Five business days. We map your operational stack, sketch your schema, surface three highest-leverage interventions. Fixed fee. Convertible." />
            <Phase num="03" tag="Weeks 2 — 7" title="The install" body="Six weeks. We provision the repository, write the schema, capture the founder&rsquo;s reasoning, onboard the first three areas of the house. You read drafts. You approve framings. You sign off." />
            <Phase num="04" tag="Ongoing" title="The partnership" body="Monthly retainer. Schema maintenance, lint reviews, ingest service, monthly synthesis pass, the weekly briefing, executive coaching when you want it. The compounding case begins here." />
          </div>
        </div>
      </Container>

      {/* The operator's working day */}
      <Container width="wide" className="mt-16 sm:mt-28">
        <div className="border-t border-rule pt-12 sm:pt-16">
          <div className="label">A working day at Atrium</div>
          <h2 className="mt-3 font-display text-[24px] sm:text-[28px] leading-[1.12] tracking-[-0.005em] font-normal text-ink max-w-[760px]">
            What we are doing while you read.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.7] text-ink-soft max-w-[700px]">
            Each working day a concierge cycles through the same five-app loop on your behalf. The same loop the Implementation Manual documents. We mention it here so you know what we are not asking you to do.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-8">
            {[
              { tool: "Obsidian", role: "Edit", body: "Write and revise wiki pages, frontmatter, and wikilinks." },
              { tool: "Claude Code", role: "Compose", body: "Ask the agent to draft briefings, render decks, capture interviews." },
              { tool: "VSCode", role: "Direct edit", body: "When a markdown file needs precision the GUI hides." },
              { tool: "GitHub Desktop", role: "Commit & push", body: "Stage one logical change. Write the summary. Push." },
              { tool: "Marp CLI", role: "Render", body: "Turn briefing markdown into a council-grade PDF." },
            ].map((t) => (
              <div key={t.tool} className="border-t border-ink pt-4">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper">{t.role}</div>
                <div className="mt-2 font-display text-[16px] tracking-[-0.005em] text-ink">{t.tool}</div>
                <p className="mt-2 text-[12.5px] leading-[1.55] text-ink-soft">{t.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-x-8 text-[14px] leading-[1.7] text-ink-soft">
            <Stat label="Operator workstation setup" value="45 – 90 minutes" hint="One time, per concierge, per Mac. The Implementation Manual covers this end to end. You will not see it." />
            <Stat label="Install at a new family" value="About six weeks" hint="From signed engagement to first weekly briefing in your hand." />
            <Stat label="Ongoing partnership" value="Monthly retainer" hint="The wiki kept current, the briefings written, the council prepped." />
          </div>
        </div>
      </Container>

      <Container width="text" className="mt-16 sm:mt-28">
        <div className="border-t border-rule pt-12 sm:pt-14">
          <h2 className="font-display text-[24px] sm:text-[28px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
            The technical complexity is invisible by design.
          </h2>
          <p className="mt-6 text-[16px] leading-[1.7] text-ink-soft">
            If your family ever wants to take the keys, the keys are already yours. The repository is in your account. The markdown is plain text. The schema is documented. A successor practice or your own internal operator can continue from where we left off.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-ink-soft">
            Until then, the operators are ours. The reading is yours.
          </p>

          <div className="mt-10 flex flex-wrap gap-5 items-center">
            <Link
              href="/inquiry?source=concierge"
              className="inline-block text-[11px] uppercase tracking-[0.22em] text-paper bg-ink border border-ink px-6 py-3 hover:bg-copper hover:border-copper transition-all duration-150"
            >
              Request a conversation
            </Link>
            <Link
              href="/architecture/the-concierge-model"
              className="text-[11px] uppercase tracking-[0.18em] text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
            >
              Read the wiki page
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Phase({
  num,
  tag,
  title,
  body,
}: {
  num: string;
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border-t border-ink pt-5">
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper">{num}</div>
      <div className="text-[10px] tracking-[0.22em] uppercase text-mute mt-1">{tag}</div>
      <h3 className="mt-5 font-display text-[20px] tracking-[-0.005em] text-ink">{title}</h3>
      <p className="mt-3 text-[13.5px] leading-[1.65] text-ink-soft">{body}</p>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="border-t border-rule pt-4">
      <div className="label-mute">{label}</div>
      <div className="mt-2 font-display text-[22px] tracking-[-0.005em] text-ink leading-[1.2]">{value}</div>
      <p className="mt-2 text-[12.5px] leading-[1.55] text-mute font-display italic">{hint}</p>
    </div>
  );
}
