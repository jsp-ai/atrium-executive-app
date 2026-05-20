import Link from "next/link";
import InquiryForm from "@/components/marketing/InquiryForm";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Diagnosis />
      <Cost />
      <Answer />
      <Interface />
      <Generations />
      <Concierge />
      <Practice />
      <WhyNow />
      <Inquiry />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Layout primitive — a centered, responsively-padded column.
   Everything anchors on the viewport centerline: text columns get
   symmetric margins, wider blocks break out but stay centered.

   width: "text" 720 · "mid" 880 · "wide" 1040
   ────────────────────────────────────────────────────────────── */
function Block({
  children,
  width = "text",
  className = "",
}: {
  children: React.ReactNode;
  width?: "text" | "mid" | "wide";
  className?: string;
}) {
  const w =
    width === "wide"
      ? "max-w-[1040px]"
      : width === "mid"
        ? "max-w-[880px]"
        : "max-w-[720px]";
  return (
    <div className={`mx-auto w-full ${w} px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   01 — HERO
   ────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-paper pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Block width="text">
        <h1 className="font-display text-[68px] sm:text-[96px] lg:text-[112px] leading-[0.95] tracking-[-0.015em] font-normal text-ink">
          Atrium
        </h1>
        <div className="mt-6 sm:mt-7 h-px w-20 bg-copper" />
        <p className="mt-7 sm:mt-8 font-display italic text-[22px] sm:text-[25px] lg:text-[26px] leading-[1.35] text-ink-soft">
          Where your company remembers.
        </p>

        <p className="mt-7 sm:mt-9 text-[16px] sm:text-[17px] leading-[1.65] text-ink-soft">
          A private team that builds and keeps a living record of your family&rsquo;s business — answering your questions in your own words, with sources on every claim. You read and ask. We do the rest.
        </p>

        <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] tracking-[0.22em] uppercase">
          <span className="text-copper">AI for the executive layer</span>
          <span className="text-mute-soft">·</span>
          <span className="text-mute">A private practice · Manila</span>
        </div>
      </Block>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   02 — DIAGNOSIS
   ────────────────────────────────────────────────────────────── */
function Diagnosis() {
  return (
    <section className="bg-paper py-16 sm:py-20 border-t border-rule">
      <Block width="text">
        <div className="label">The diagnosis</div>
        <h2 className="mt-4 font-display text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.08] tracking-[-0.01em] font-normal text-ink">
          ChatGPT works for your team. It doesn&rsquo;t work for you.
        </h2>

        <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-ink-soft">
          <p>
            Your team uses AI to do less typing. Calls get summarized. Invoices get read. Tickets get sorted. That side of AI is measurably better than it was last year.
          </p>
          <p>
            At your desk, the same AI feels generic. It doesn&rsquo;t know your family. It doesn&rsquo;t remember last week. The dashboards look pretty and tell you nothing you didn&rsquo;t already know.
          </p>
          <p className="text-ink">
            That isn&rsquo;t a bad prompt. The problem is the tool is pointed in the wrong direction.
          </p>
        </div>
      </Block>

      <Block width="mid" className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <div className="border-t border-ink pt-4">
            <div className="label">What your team&rsquo;s AI does</div>
            <div className="mt-2 font-display text-[20px] sm:text-[22px] tracking-[-0.005em] text-ink">
              Turns words into data.
            </div>
            <p className="mt-2 text-[13px] text-mute">
              Calls, emails, receipts &rarr; rows in a spreadsheet.
            </p>
          </div>
          <div className="border-t border-ink pt-4">
            <div className="label">What you need</div>
            <div className="mt-2 font-display text-[20px] sm:text-[22px] tracking-[-0.005em] text-ink">
              Turns data into a story.
            </div>
            <p className="mt-2 text-[13px] text-mute">
              Reports, statements, memos &rarr; a one-page answer.
            </p>
          </div>
        </div>
      </Block>

      <Block width="text" className="mt-8">
        <p className="font-display italic text-[15px] text-mute">
          Same technology. Opposite direction. Off-the-shelf AI is built for the first; you need the second.
        </p>

        <blockquote className="pull mt-9">
          This isn&rsquo;t a bug anyone can fix with a better prompt. It is the shape of the tool, pointed the wrong way.
        </blockquote>

        <div className="mt-9 text-[12px] text-mute tracking-[0.02em]">
          <Link
            href="/diagnosis"
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
          >
            The longer version &rarr;
          </Link>
        </div>
      </Block>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   03 — COST
   ────────────────────────────────────────────────────────────── */
function Cost() {
  return (
    <section className="bg-paper-soft py-16 sm:py-20">
      <Block width="text">
        <div className="label">What it costs to do nothing</div>
        <h2 className="mt-4 font-display text-[28px] sm:text-[34px] lg:text-[36px] leading-[1.1] tracking-[-0.01em] font-normal text-ink">
          You are already paying for this. You just can&rsquo;t see the bill.
        </h2>

        <ul className="mt-9 space-y-5 text-[16px] leading-[1.6] text-ink">
          <li className="flex gap-4">
            <span className="text-copper pt-1">&mdash;</span>
            When your most trusted advisor retires, half of what your family knows about its own money walks out with him.
          </li>
          <li className="flex gap-4">
            <span className="text-copper pt-1">&mdash;</span>
            Every family meeting begins by re-explaining what already happened. Same questions, year after year.
          </li>
          <li className="flex gap-4">
            <span className="text-copper pt-1">&mdash;</span>
            Every transition tries to reconstruct decisions only the founder remembers &mdash; from notes, from emails, from one or two people&rsquo;s memory.
          </li>
          <li className="flex gap-4">
            <span className="text-copper pt-1">&mdash;</span>
            Your heirs will inherit the businesses. They won&rsquo;t inherit the reasoning behind them. Not unless someone writes it down.
          </li>
        </ul>

        <p className="mt-9 font-display italic text-[14px] text-mute">
          You pay these costs every quarter. They are invisible because they are normal.
        </p>
      </Block>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   04 — ANSWER  (THE pivot)
   ────────────────────────────────────────────────────────────── */
function Answer() {
  const layers = [
    {
      what: "How you talk to it",
      name: "A conversation",
      note: "Ask any question in your own words. Read the answer with sources.",
    },
    {
      what: "How it answers",
      name: "An AI assistant",
      note: "Drafts the response from your wiki and from your existing systems.",
    },
    {
      what: "What it remembers",
      name: "Your family wiki",
      note: "Plain-text pages, written and kept by us. Stored in a private archive your family owns.",
    },
    {
      what: "What it reads from",
      name: "Your existing systems",
      note: "Trust statements, custodian reports, counsel memos, council minutes &mdash; whatever you already have.",
      muted: true,
    },
  ];

  return (
    <section className="bg-ink text-paper py-18 sm:py-24">
      <Block width="text">
        <div className="label" style={{ color: "#C98859" }}>
          The answer
        </div>
        <h2 className="mt-4 font-display text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.08] tracking-[-0.015em] font-normal text-paper">
          A memory for your family. Written and kept by people. Asked by you.
        </h2>
        <p className="mt-7 text-[16px] sm:text-[17px] leading-[1.65] text-paper-soft">
          Atrium is a private wiki of your family&rsquo;s reasoning, relationships, decisions, and history. We write it. We keep it current. An AI assistant reads it alongside us so it can answer your questions in plain language &mdash; with sources on every claim.
        </p>

        <p className="mt-7 font-display italic text-[18px] sm:text-[20px] leading-[1.4] text-paper border-l-2 border-copper-soft pl-5 sm:pl-6">
          It sits above your existing systems. It composes the story. It does not replace anything.
        </p>
      </Block>

      {/* 4-layer architecture */}
      <Block width="mid" className="mt-12">
        <div className="space-y-2">
          {layers.map((l) => (
            <div
              key={l.what}
              className={`border px-6 sm:px-7 py-5 ${
                l.muted
                  ? "border-dashed border-paper-soft/30 bg-transparent"
                  : "border-paper-soft/30 bg-paper/[0.03]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-5">
                <span className="text-[10px] tracking-[0.22em] uppercase text-copper-soft sm:w-[170px] sm:shrink-0">
                  {l.what}
                </span>
                <span
                  className={`font-display text-[18px] sm:text-[19px] tracking-[-0.005em] ${
                    l.muted ? "text-paper-soft/60" : "text-paper"
                  }`}
                >
                  {l.name}
                </span>
              </div>
              <p
                className="mt-2 text-[12.5px] leading-[1.55] text-mute-soft sm:pl-[190px]"
                dangerouslySetInnerHTML={{ __html: l.note }}
              />
            </div>
          ))}
        </div>
      </Block>

      <Block width="text" className="mt-9">
        <p className="font-mono text-[11px] text-mute tracking-[0.04em]">
          Every change recorded &middot; every claim sourced &middot; plain text your family owns
        </p>

        <div className="mt-8 text-[12px] tracking-[0.02em]">
          <Link
            href="/architecture"
            className="text-copper-soft border-b border-dotted border-copper-soft hover:text-paper hover:border-paper px-1 py-0.5 transition-colors duration-150"
          >
            How it&rsquo;s built &rarr;
          </Link>
        </div>
      </Block>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   05 — INTERFACE
   ────────────────────────────────────────────────────────────── */
function Interface() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <Block width="text">
        <div className="label">What you see</div>
        <h2 className="mt-4 font-display text-[28px] sm:text-[34px] lg:text-[36px] leading-[1.1] tracking-[-0.01em] font-normal text-ink">
          Ask a question. Read the answer.
        </h2>
        <p className="mt-4 font-display italic text-[15px] text-mute">
          No new app to learn. No buttons to find. Every claim links back to where it came from.
        </p>
      </Block>

      <Block width="mid" className="mt-10">
        <div className="border border-rule bg-paper-card px-6 sm:px-9 py-7 sm:py-8">
          <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[80px_1fr] gap-x-5 sm:gap-x-7 gap-y-5">
            <div className="label-mute pt-1.5">You</div>
            <p className="font-display italic text-[17px] sm:text-[18px] leading-[1.45] text-ink tracking-[-0.005em]">
              What is the current position across the family&rsquo;s holdings, and what needs my attention this week?
            </p>

            <div className="label pt-1.5">Atrium</div>
            <div className="text-[14.5px] leading-[1.75] text-ink space-y-4">
              <p>
                Cash and liquid positions reconciled to yesterday&rsquo;s close.
                <span className="cite">Finance · 2026-05-18</span>
              </p>
              <ul className="space-y-2 text-[14px]">
                <li>
                  &mdash; Q2 distribution to the family trust &mdash; Friday{" "}
                  <span className="cite">Trust · Active</span>
                </li>
                <li>
                  &mdash; Next-gen council briefing &mdash; draft circulating Wed{" "}
                  <span className="cite">Council · Open</span>
                </li>
                <li>
                  &mdash; Singapore SFO license &mdash; counsel review pending{" "}
                  <span className="cite">Legal · Blocked</span>
                </li>
              </ul>
              <p className="text-[11.5px] text-mute pt-3 border-t border-rule-soft">
                Sources: custodian report &middot; trustee statement &middot; council briefing draft &middot; counsel memo
              </p>
            </div>
          </div>
        </div>
      </Block>

      <Block width="text" className="mt-8">
        <div className="text-[12px] tracking-[0.02em]">
          <Link
            href="/portal/welcome"
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
          >
            See what your view looks like &rarr;
          </Link>
        </div>
      </Block>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   06 — GENERATIONS
   ────────────────────────────────────────────────────────────── */
function Generations() {
  return (
    <section className="bg-paper-soft py-16 sm:py-20">
      <Block width="text">
        <div className="label">Why it matters across generations</div>
        <h2 className="mt-4 font-display text-[28px] sm:text-[34px] lg:text-[36px] leading-[1.1] tracking-[-0.01em] font-normal text-ink">
          Your children will inherit the assets. Will they inherit the reasoning?
        </h2>

        <div className="mt-9 space-y-5 text-[16px] leading-[1.75] text-ink-soft">
          <p>
            When the founder retires, half a century of thinking usually goes with him. Why this trust and not that one. Why the family exited textiles in 1989. Why the council won&rsquo;t sell the holding company, even after three serious offers.
          </p>
          <p>
            In an Atrium family, that thinking is on the page &mdash; with sources, in the founder&rsquo;s own words, ready to be read by anyone the family invites to read it.
          </p>
          <p className="text-ink">
            The next generation inherits a working memory, not a stack of folders.
          </p>
        </div>

        <p className="mt-9 font-display italic text-[14px] text-mute">
          Most families discover the value of this only after a generation has already moved on. Don&rsquo;t be most families.
        </p>
      </Block>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   07 — CONCIERGE
   ────────────────────────────────────────────────────────────── */
function Concierge() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <Block width="text">
        <div className="label">How it works for you</div>
        <h2 className="mt-4 font-display text-[28px] sm:text-[34px] lg:text-[36px] leading-[1.1] tracking-[-0.01em] font-normal text-ink">
          You read and ask. We do everything else.
        </h2>

        <p className="mt-7 text-[16px] leading-[1.7] text-ink-soft">
          You will never open a terminal, install a plugin, or learn a new piece of software. There is nothing for you to set up. A small team that knows your family does the work. You read what they prepare and ask whatever you want to ask.
        </p>
      </Block>

      <Block width="mid" className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-7 sm:gap-x-7">
          <div className="border-t border-ink pt-4">
            <div className="label">We set it up</div>
            <p className="mt-3 text-[13px] leading-[1.55] text-ink-soft">
              A private archive. The structure that mirrors your family. The founder&rsquo;s reasoning, captured by sitting with him.
            </p>
          </div>
          <div className="border-t border-ink pt-4">
            <div className="label">We read your documents in</div>
            <p className="mt-3 text-[13px] leading-[1.55] text-ink-soft">
              Trustee letters, custodian reports, counsel memos, council minutes &mdash; converted into pages you can cite.
            </p>
          </div>
          <div className="border-t border-ink pt-4">
            <div className="label">We write your weekly read</div>
            <p className="mt-3 text-[13px] leading-[1.55] text-ink-soft">
              Four to six sentences every Monday on what is in your house, with sources. And answers, when you ask.
            </p>
          </div>
        </div>
      </Block>

      <Block width="text" className="mt-10">
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="/concierge"
            className="text-[11px] uppercase tracking-[0.22em] text-paper bg-ink border border-ink px-5 py-2.5 hover:bg-copper hover:border-copper transition-all duration-150"
          >
            See what we do for you &rarr;
          </Link>
          <Link
            href="/portal/welcome"
            className="text-[11px] uppercase tracking-[0.18em] text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
          >
            Preview your view
          </Link>
        </div>
      </Block>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   08 — PRACTICE
   ────────────────────────────────────────────────────────────── */
function Practice() {
  const tiers = [
    {
      tag: "Install",
      cadence: "Once · about six weeks",
      body: "We set up the system. We write down how your family is structured. We sit with the founder and capture his reasoning. We onboard the first three areas of the house.",
    },
    {
      tag: "Operate",
      cadence: "Monthly",
      body: "We keep the wiki current. We catch contradictions. We read in your documents. We write your weekly briefing. We review the whole memory once a month.",
    },
    {
      tag: "Custom",
      cadence: "By project",
      body: "Specific schemas for specific parts of the house. Direct connections to the systems you already use. Training for the people the family invites.",
    },
  ];

  return (
    <section className="bg-paper-soft py-18 sm:py-24 border-t border-rule-soft">
      <Block width="text">
        <div className="label">The practice</div>
        <h2 className="mt-4 font-display text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.08] tracking-[-0.01em] font-normal text-ink">
          A one-week look. Six weeks to build. Then we stay.
        </h2>
      </Block>

      {/* Proof points */}
      <Block width="wide" className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
          <Proof
            n="03"
            tag="Founder vaults"
            body="The founder runs this exact system for himself across his own businesses, finances, and writing. We eat our own cooking."
          />
          <Proof
            n="100+"
            tag="Page manual"
            body="A complete reference manual of how we build this. Available on request to qualified inquiries."
            link={{ href: "/manual", label: "Request it" }}
          />
          <Proof
            n="May 26"
            tag="First family live"
            body="A family-held consumer brand, third generation. Reports in 30, 60, and 90 days."
          />
        </div>
      </Block>

      {/* Engagement tiers */}
      <Block width="wide" className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-9 sm:gap-x-10">
          {tiers.map((t) => (
            <div key={t.tag} className="border-t border-ink pt-4">
              <div className="label">Atrium {t.tag}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-mute mt-1">
                {t.cadence}
              </div>
              <p className="mt-5 text-[13.5px] leading-[1.65] text-ink-soft">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </Block>

      {/* Diagnostic */}
      <Block width="text" className="mt-16">
        <div className="border-t border-rule pt-12">
          <h3 className="font-display text-[24px] sm:text-[26px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
            Start with a one-week look.
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink-soft">
            Five business days. We look at what your family already has, sketch how the system would be structured for you, and tell you the three things it would change first. At the end you receive a written proposal with a price.
          </p>
          <p className="mt-5 font-display italic text-[14px] text-mute">
            One fixed fee. It counts against the full engagement if you continue. Pricing is discussed in this week. It is not published.
          </p>

          <div className="mt-7">
            <Link
              href="/practice"
              className="text-[11px] uppercase tracking-[0.18em] text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
            >
              How an engagement unfolds &rarr;
            </Link>
          </div>
        </div>
      </Block>
    </section>
  );
}

function Proof({
  n,
  tag,
  body,
  link,
}: {
  n: string;
  tag: string;
  body: string;
  link?: { href: string; label: string };
}) {
  return (
    <div>
      <div className="font-display text-[40px] sm:text-[44px] tracking-[-0.015em] text-copper leading-[1]">
        {n}
      </div>
      <div className="mt-3 label">{tag}</div>
      <p className="mt-3 text-[13.5px] leading-[1.65] text-ink-soft">
        {body}
        {link && (
          <>
            {" "}
            <Link
              href={link.href}
              className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-0.5 transition-colors duration-150"
            >
              {link.label} &rarr;
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   09 — WHY NOW
   ────────────────────────────────────────────────────────────── */
function WhyNow() {
  return (
    <section className="bg-paper py-16 sm:py-20 border-t border-rule-soft">
      <Block width="text">
        <div className="label">Why now</div>
        <h2 className="mt-4 font-display text-[28px] sm:text-[34px] lg:text-[36px] leading-[1.1] tracking-[-0.01em] font-normal text-ink">
          The window is open.
        </h2>

        <ul className="mt-9 space-y-7 text-[16px] leading-[1.6] text-ink">
          <li className="flex gap-4">
            <span className="text-copper pt-1">&mdash;</span>
            <span>
              <strong className="text-ink">The technology matured.</strong> The AI behind the system became reliable enough to read your documents and write your briefings in 2025. It wasn&rsquo;t before.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="text-copper pt-1">&mdash;</span>
            <span>
              <strong className="text-ink">Off-the-shelf AI has disappointed everyone at your level.</strong> The principals we speak with have already tried ChatGPT for the family office and found it generic. That scar tissue is universal.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="text-copper pt-1">&mdash;</span>
            <span>
              <strong className="text-ink">You can&rsquo;t be wrong.</strong> The wiki is plain text in a private archive your family owns. If Atrium ever stops working for you, the archive is still yours. The cost of trying us is the diagnostic. Nothing more.
            </span>
          </li>
        </ul>

        <p className="mt-11 font-display italic text-[14px] text-mute">
          The next two years define what executive AI for family enterprises looks like. Be early.
        </p>
      </Block>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   10 — INQUIRY
   ────────────────────────────────────────────────────────────── */
function Inquiry() {
  return (
    <section id="inquiry" className="bg-paper py-18 sm:py-24 border-t border-rule">
      <Block width="wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
          {/* The ask */}
          <div>
            <div className="label">The next step</div>
            <h2 className="mt-4 font-display text-[32px] sm:text-[38px] lg:text-[40px] leading-[1.08] tracking-[-0.01em] font-normal text-ink">
              A 60-minute conversation.
            </h2>
            <p className="mt-6 font-display italic text-[17px] leading-[1.5] text-ink-soft">
              With the principal, an heir, or whoever runs the family office.
            </p>

            <div className="mt-9 space-y-5 text-[14.5px] leading-[1.7] text-ink-soft">
              <p>If we fit your family, we move to the one-week look.</p>
              <p>
                If we don&rsquo;t, you&rsquo;ll hear that in writing &mdash; with the specific reason &mdash; so you don&rsquo;t spend another quarter looking at the wrong vendor.
              </p>
            </div>

            <div className="mt-11 pt-7 border-t border-rule-soft text-[11px] text-mute tracking-[0.04em] leading-[1.7]">
              Atrium &middot; A private practice. Manila.
              <br />
              <span className="text-ink-soft">By inquiry only.</span>
            </div>
          </div>

          {/* The form */}
          <div>
            <div className="label-mute mb-7">Request a conversation</div>
            <InquiryForm source="landing" />
          </div>
        </div>
      </Block>
    </section>
  );
}
