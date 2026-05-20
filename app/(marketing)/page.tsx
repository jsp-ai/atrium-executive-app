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
   WHY NOW (small closer)
   ────────────────────────────────────────────────────────────── */
function WhyNow() {
  return (
    <section className="bg-paper px-12 py-20 border-t border-rule-soft">
      <div className="max-w-[860px]">
        <div className="label">Why now</div>
        <h2 className="mt-4 font-display text-[36px] leading-[1.08] tracking-[-0.01em] font-normal text-ink max-w-[700px]">
          The window is open.
        </h2>

        <ul className="mt-10 space-y-7 text-[16px] leading-[1.6] text-ink max-w-[760px]">
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

        <p className="mt-12 font-display italic text-[14px] text-mute max-w-[640px]">
          The next two years define what executive AI for family enterprises looks like. Be early.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   01 — HERO
   ────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-paper px-12 pt-20 pb-28">
      <div className="max-w-[1100px]">
        <h1 className="font-display text-[120px] leading-[0.95] tracking-[-0.015em] font-normal text-ink">
          Atrium
        </h1>
        <div className="mt-7 h-px w-20 bg-copper" />
        <p className="mt-8 font-display italic text-[26px] leading-[1.35] text-ink-soft max-w-[600px]">
          Where your company remembers.
        </p>

        <p className="mt-9 text-[17px] leading-[1.65] text-ink-soft max-w-[600px]">
          A private team that builds and keeps a living record of your family&rsquo;s business — answering your questions in your own words, with sources on every claim. You read and ask. We do the rest.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] tracking-[0.22em] uppercase">
          <span className="text-copper">AI for the executive layer</span>
          <span className="text-mute-soft">·</span>
          <span className="text-mute">A private practice · Manila</span>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   02 — DIAGNOSIS
   ────────────────────────────────────────────────────────────── */
function Diagnosis() {
  return (
    <section className="bg-paper px-12 py-20 border-t border-rule">
      <div className="max-w-[820px]">
        <div className="label">The diagnosis</div>
        <h2 className="mt-4 font-display text-[42px] leading-[1.06] tracking-[-0.01em] font-normal text-ink max-w-[760px]">
          ChatGPT works for your team. It doesn&rsquo;t work for you.
        </h2>

        <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-ink-soft max-w-[720px]">
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 max-w-[760px]">
          <div className="border-t border-ink pt-4">
            <div className="label">What your team&rsquo;s AI does</div>
            <div className="mt-2 font-display text-[22px] tracking-[-0.005em] text-ink">Turns words into data.</div>
            <p className="mt-2 text-[13px] text-mute">Calls, emails, receipts &rarr; rows in a spreadsheet.</p>
          </div>
          <div className="border-t border-ink pt-4">
            <div className="label">What you need</div>
            <div className="mt-2 font-display text-[22px] tracking-[-0.005em] text-ink">Turns data into a story.</div>
            <p className="mt-2 text-[13px] text-mute">Reports, statements, memos &rarr; a one-page answer.</p>
          </div>
        </div>

        <p className="mt-7 font-display italic text-[15px] text-mute max-w-[640px]">
          Same technology. Opposite direction. Off-the-shelf AI is built for the first; you need the second.
        </p>

        <blockquote className="pull mt-12 max-w-[700px]">
          This isn&rsquo;t a bug anyone can fix with a better prompt. It is the shape of the tool, pointed the wrong way.
        </blockquote>

        <div className="mt-10 text-[12px] text-mute tracking-[0.02em]">
          <Link
            href="/diagnosis"
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
          >
            The longer version &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   03 — COST
   ────────────────────────────────────────────────────────────── */
function Cost() {
  return (
    <section className="bg-paper-soft px-12 py-20">
      <div className="max-w-[820px]">
        <div className="label">What it costs to do nothing</div>
        <h2 className="mt-4 font-display text-[36px] leading-[1.08] tracking-[-0.01em] font-normal text-ink max-w-[760px]">
          You are already paying for this. You just can&rsquo;t see the bill.
        </h2>

        <ul className="mt-10 space-y-5 text-[16px] leading-[1.6] text-ink max-w-[760px]">
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

        <p className="mt-9 font-display italic text-[14px] text-mute max-w-[640px]">
          You pay these costs every quarter. They are invisible because they are normal.
        </p>
      </div>
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
    <section className="bg-ink text-paper px-12 py-24">
      <div className="max-w-[1000px]">
        <div className="label" style={{ color: "#C98859" }}>The answer</div>
        <h2 className="mt-4 font-display text-[48px] leading-[1.06] tracking-[-0.015em] font-normal text-paper max-w-[820px]">
          A memory for your family. Written and kept by people. Asked by you.
        </h2>
        <p className="mt-7 text-[17px] leading-[1.65] text-paper-soft max-w-[720px]">
          Atrium is a private wiki of your family&rsquo;s reasoning, relationships, decisions, and history. We write it. We keep it current. An AI assistant reads it alongside us so it can answer your questions in plain language &mdash; with sources on every claim.
        </p>

        <p className="mt-7 font-display italic text-[20px] leading-[1.4] text-paper border-l-2 border-copper-soft pl-6 max-w-[660px]">
          It sits above your existing systems. It composes the story. It does not replace anything.
        </p>

        {/* 4-layer architecture, translated */}
        <div className="mt-14 space-y-2 max-w-[820px]">
          {layers.map((l) => (
            <div
              key={l.what}
              className={`border px-7 py-5 ${
                l.muted
                  ? "border-dashed border-paper-soft/30 bg-transparent"
                  : "border-paper-soft/30 bg-paper/[0.03]"
              }`}
            >
              <div className="flex items-baseline gap-5">
                <span className="text-[10px] tracking-[0.22em] uppercase text-copper-soft w-[170px] shrink-0">
                  {l.what}
                </span>
                <span className={`font-display text-[19px] tracking-[-0.005em] ${l.muted ? "text-paper-soft/60" : "text-paper"}`}>
                  {l.name}
                </span>
              </div>
              <p
                className="mt-1.5 text-[12.5px] leading-[1.55] text-mute-soft pl-[190px]"
                dangerouslySetInnerHTML={{ __html: l.note }}
              />
            </div>
          ))}
        </div>

        <p className="mt-10 font-mono text-[11px] text-mute tracking-[0.04em] max-w-[760px]">
          Every change recorded &middot; every claim sourced &middot; plain text your family owns
        </p>

        <div className="mt-10 text-[12px] tracking-[0.02em]">
          <Link
            href="/architecture"
            className="text-copper-soft border-b border-dotted border-copper-soft hover:text-paper hover:border-paper px-1 py-0.5 transition-colors duration-150"
          >
            How it&rsquo;s built &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   05 — INTERFACE
   ────────────────────────────────────────────────────────────── */
function Interface() {
  return (
    <section className="bg-paper px-12 py-20">
      <div className="max-w-[900px]">
        <div className="label">What you see</div>
        <h2 className="mt-4 font-display text-[36px] leading-[1.08] tracking-[-0.01em] font-normal text-ink max-w-[760px]">
          Ask a question. Read the answer.
        </h2>
        <p className="mt-4 font-display italic text-[15px] text-mute max-w-[640px]">
          No new app to learn. No buttons to find. Every claim links back to where it came from.
        </p>

        <div className="mt-12 border border-rule bg-paper-card px-9 py-8 max-w-[820px]">
          <div className="grid grid-cols-[80px_1fr] gap-x-7 gap-y-5">
            <div className="label-mute pt-1.5">You</div>
            <p className="font-display italic text-[18px] leading-[1.45] text-ink tracking-[-0.005em]">
              What is the current position across the family&rsquo;s holdings, and what needs my attention this week?
            </p>

            <div className="label pt-1.5">Atrium</div>
            <div className="text-[14.5px] leading-[1.75] text-ink space-y-4">
              <p>
                Cash and liquid positions reconciled to yesterday&rsquo;s close.
                <span className="cite">Finance · 2026-05-18</span>
              </p>
              <ul className="space-y-2 text-[14px]">
                <li>&mdash; Q2 distribution to the family trust &mdash; Friday <span className="cite">Trust · Active</span></li>
                <li>&mdash; Next-gen council briefing &mdash; draft circulating Wed <span className="cite">Council · Open</span></li>
                <li>&mdash; Singapore SFO license &mdash; counsel review pending <span className="cite">Legal · Blocked</span></li>
              </ul>
              <p className="text-[11.5px] text-mute pt-3 border-t border-rule-soft">
                Sources: custodian report &middot; trustee statement &middot; council briefing draft &middot; counsel memo
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-[12px] tracking-[0.02em]">
          <Link
            href="/portal/welcome"
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
          >
            See what your view looks like &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   06 — GENERATIONS
   ────────────────────────────────────────────────────────────── */
function Generations() {
  return (
    <section className="bg-paper-soft px-12 py-20">
      <div className="max-w-[820px]">
        <div className="label">Why it matters across generations</div>
        <h2 className="mt-4 font-display text-[36px] leading-[1.08] tracking-[-0.01em] font-normal text-ink max-w-[760px]">
          Your children will inherit the assets. Will they inherit the reasoning?
        </h2>

        <div className="mt-9 space-y-5 text-[16px] leading-[1.75] text-ink-soft max-w-[720px]">
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

        <p className="mt-9 font-display italic text-[14px] text-mute max-w-[640px]">
          Most families discover the value of this only after a generation has already moved on. Don&rsquo;t be most families.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   07 — CONCIERGE
   ────────────────────────────────────────────────────────────── */
function Concierge() {
  return (
    <section className="bg-paper px-12 py-20">
      <div className="max-w-[820px]">
        <div className="label">How it works for you</div>
        <h2 className="mt-4 font-display text-[36px] leading-[1.08] tracking-[-0.01em] font-normal text-ink max-w-[760px]">
          You read and ask. We do everything else.
        </h2>

        <p className="mt-7 text-[16px] leading-[1.7] text-ink-soft max-w-[720px]">
          You will never open a terminal, install a plugin, or learn a new piece of software. There is nothing for you to set up. A small team that knows your family does the work. You read what they prepare and ask whatever you want to ask.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-7 max-w-[760px]">
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

        <div className="mt-10 flex flex-wrap gap-4 items-center">
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
      </div>
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
    <section className="bg-paper-soft px-12 py-24 border-t border-rule-soft">
      <div className="max-w-[1000px]">
        <div className="label">The practice</div>
        <h2 className="mt-4 font-display text-[40px] leading-[1.06] tracking-[-0.01em] font-normal text-ink max-w-[760px]">
          A one-week look. Six weeks to build. Then we stay.
        </h2>

        {/* Proof points — compact row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[920px]">
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

        {/* Engagement tiers */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1000px]">
          {tiers.map((t) => (
            <div key={t.tag} className="border-t border-ink pt-4">
              <div className="label">Atrium {t.tag}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-mute mt-1">{t.cadence}</div>
              <p className="mt-5 text-[13.5px] leading-[1.65] text-ink-soft">{t.body}</p>
            </div>
          ))}
        </div>

        {/* Diagnostic */}
        <div className="mt-20 max-w-[820px] border-t border-rule pt-12">
          <h3 className="font-display text-[26px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
            Start with a one-week look.
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink-soft max-w-[720px]">
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
      </div>
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
      <div className="font-display text-[44px] tracking-[-0.015em] text-copper leading-[1]">{n}</div>
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
   09 — INQUIRY
   ────────────────────────────────────────────────────────────── */
function Inquiry() {
  return (
    <section id="inquiry" className="bg-paper px-12 py-24 border-t border-rule">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 max-w-[1100px]">
        {/* The ask */}
        <div>
          <div className="label">The next step</div>
          <h2 className="mt-4 font-display text-[40px] leading-[1.06] tracking-[-0.01em] font-normal text-ink max-w-[440px]">
            A 60-minute conversation.
          </h2>
          <p className="mt-7 font-display italic text-[17px] leading-[1.5] text-ink-soft max-w-[440px]">
            With the principal, an heir, or whoever runs the family office.
          </p>

          <div className="mt-10 space-y-5 text-[14.5px] leading-[1.7] text-ink-soft max-w-[440px]">
            <p>If we fit your family, we move to the one-week look.</p>
            <p>
              If we don&rsquo;t, you&rsquo;ll hear that in writing &mdash; with the specific reason &mdash; so you don&rsquo;t spend another quarter looking at the wrong vendor.
            </p>
          </div>

          <div className="mt-12 pt-7 border-t border-rule-soft text-[11px] text-mute tracking-[0.04em] leading-[1.7]">
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
    </section>
  );
}
