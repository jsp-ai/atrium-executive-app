import Link from "next/link";

export const metadata = {
  title: "Welcome · Atrium",
  description: "First-login orientation. What you see, what we tend, and the three things that make Atrium different.",
};

export default async function WelcomePage({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  const { step } = await searchParams;
  const current = Math.max(1, Math.min(6, parseInt(step ?? "1", 10) || 1));

  const STEPS: { title: string; body: React.ReactNode; cta?: { href: string; label: string } }[] = [
    {
      title: "Welcome to your house.",
      body: (
        <>
          <p>
            You are reading the first page of your family&rsquo;s institutional memory. From this point forward, your house has a place to remember.
          </p>
          <p>
            What follows is a short tour. Five minutes. Take it once.
          </p>
        </>
      ),
    },
    {
      title: "Three things to know first.",
      body: (
        <ol className="list-none space-y-7 mt-2">
          <li>
            <div className="label">One</div>
            <p className="mt-2">
              <strong className="text-ink">You will not edit anything.</strong> Atrium tends your family&rsquo;s memory on your behalf. The work happens behind the scenes. You read, you ask, you decide.
            </p>
          </li>
          <li>
            <div className="label">Two</div>
            <p className="mt-2">
              <strong className="text-ink">Every answer carries citations.</strong> No assertion is unsourced. Click a citation and you arrive at the wiki page it came from.
            </p>
          </li>
          <li>
            <div className="label">Three</div>
            <p className="mt-2">
              <strong className="text-ink">Your concierges are one message away.</strong> Three people, named, with faces. Manila working hours. Reach them through the portal.
            </p>
          </li>
        </ol>
      ),
    },
    {
      title: "Ask.",
      body: (
        <>
          <p>
            Type any question about your house in your own words.
          </p>
          <div className="my-7 border-l-2 border-copper pl-6 font-display italic text-[18px] text-ink-soft leading-[1.5]">
            What is the current position across the family&rsquo;s holdings, and what requires my attention this week?
          </div>
          <p>
            Atrium composes the answer from your wiki, your council resolutions, your trustee letters, your custodian statements, your counsel memoranda. With citations on every claim.
          </p>
          <p className="font-display italic text-mute text-[15px]">
            No new app. No dashboard to interpret. The interface is a conversation.
          </p>
        </>
      ),
      cta: { href: "/portal/mendoza/ask", label: "See an example answer" },
    },
    {
      title: "Memory.",
      body: (
        <>
          <p>
            Behind the conversation is a wiki — plain markdown pages, governed by a schema your family wrote with us, versioned in a private repository your family owns.
          </p>
          <p>
            Browse it directly when you want to. Most principals read the weekly briefing on the dashboard, ask a question or two, and never open the wiki itself. That is by design.
          </p>
          <p className="font-display italic text-mute text-[15px]">
            The repository is yours. If Atrium ever ends, the memory is unchanged in your hands the day after.
          </p>
        </>
      ),
      cta: { href: "/portal/mendoza/memory", label: "Tour the memory" },
    },
    {
      title: "Activity.",
      body: (
        <>
          <p>
            Every change to your family&rsquo;s memory is a signed commit. Reverse-chronological log. Who tended what, when, and why.
          </p>
          <p>
            This is what makes Atrium auditable, not magical. Counsel and your CPA can verify the chain directly.
          </p>
          <p className="font-display italic text-mute text-[15px]">
            <span className="font-mono not-italic">git log</span> on your repository shows the same history this page does.
          </p>
        </>
      ),
      cta: { href: "/portal/mendoza/activity", label: "Read the log" },
    },
    {
      title: "Begin.",
      body: (
        <>
          <p>
            That is the tour. You are now in your dashboard.
          </p>
          <p>
            At the top of every week, Maria composes a four-to-six sentence brief of what is in your house. Read it Sunday evening or Monday morning. Ask follow-ups in your own words. Defer to your concierges anything that should be tended on your behalf.
          </p>
          <p className="font-display italic text-ink text-[18px] mt-7">
            Where your company remembers.
          </p>
        </>
      ),
      cta: { href: "/portal/mendoza", label: "Open the dashboard" },
    },
  ];

  const s = STEPS[current - 1];
  const prev = current > 1 ? current - 1 : null;
  const next = current < STEPS.length ? current + 1 : null;

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <header className="px-9 h-[68px] border-b border-rule-soft bg-paper flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[19px] tracking-[0.02em] text-ink hover:text-copper transition-colors duration-150"
        >
          Atrium
        </Link>
        <div className="flex items-center gap-5">
          <span className="label-mute hidden sm:inline">First login &middot; orientation</span>
          <span className="h-4 w-px bg-rule hidden sm:inline-block" aria-hidden />
          <Link
            href="/portal/mendoza"
            className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-paper hover:bg-ink border border-rule hover:border-ink px-3.5 py-2 transition-all duration-150"
          >
            Skip onboarding &rarr;
          </Link>
        </div>
      </header>

      <main className="flex-1 flex">
        {/* Step rail */}
        <aside className="w-[280px] shrink-0 border-r border-rule-soft bg-paper-soft px-8 py-12">
          <div className="label">Five-minute tour</div>
          <ol className="mt-7 space-y-3">
            {STEPS.map((stepDef, i) => {
              const num = i + 1;
              const active = num === current;
              const done = num < current;
              return (
                <li key={stepDef.title}>
                  <Link
                    href={`/portal/welcome?step=${num}`}
                    className={`flex items-start gap-4 py-1.5 ${
                      active
                        ? "text-ink"
                        : done
                          ? "text-mute"
                          : "text-mute-soft"
                    } hover:text-ink transition-colors duration-150`}
                  >
                    <span
                      className={`font-mono text-[10px] tracking-[0.18em] uppercase w-6 shrink-0 mt-1 ${
                        active ? "text-copper" : "text-mute-soft"
                      }`}
                    >
                      {String(num).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[14px] tracking-[-0.005em] leading-[1.3]">
                      {stepDef.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="mt-12 pt-7 border-t border-rule-soft text-[10.5px] text-mute leading-[1.6] font-mono">
            <div className="label-mute mb-2 font-sans">For prospective principals</div>
            This walkthrough is what we show you on first login after install.{" "}
            <Link
              href="/portal/mendoza"
              className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150"
            >
              Skip ahead to the dashboard
            </Link>{" "}
            at any time.
          </div>
        </aside>

        {/* Step body */}
        <section className="flex-1 px-16 py-20 flex flex-col">
          <div className="max-w-[640px]">
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-copper">
              Step {current} of {STEPS.length}
            </div>
            <h1 className="mt-5 font-display text-[42px] leading-[1.08] tracking-[-0.01em] font-normal text-ink">
              {s.title}
            </h1>

            <div className="mt-10 space-y-6 text-[17px] leading-[1.7] text-ink-soft">
              {s.body}
            </div>

            {s.cta && (
              <div className="mt-12">
                <Link
                  href={s.cta.href}
                  className="inline-block text-[11px] uppercase tracking-[0.22em] text-mute border border-ink px-6 py-3 hover:bg-ink hover:text-paper transition-all duration-150"
                >
                  {s.cta.label} &rarr;
                </Link>
              </div>
            )}
          </div>

          {/* Step navigation */}
          <div className="mt-auto pt-14 flex items-center justify-between max-w-[640px]">
            {prev ? (
              <Link
                href={`/portal/welcome?step=${prev}`}
                className="text-[11px] uppercase tracking-[0.22em] text-mute hover:text-ink transition-colors duration-150"
              >
                &larr; Previous
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/portal/welcome?step=${next}`}
                className="text-[11px] uppercase tracking-[0.22em] text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 py-0.5 transition-colors duration-150"
              >
                Continue &rarr;
              </Link>
            ) : (
              <Link
                href={`/portal/mendoza`}
                className="text-[11px] uppercase tracking-[0.22em] text-paper bg-ink border border-ink px-5 py-2.5 hover:bg-copper hover:border-copper transition-all duration-150"
              >
                Begin
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
