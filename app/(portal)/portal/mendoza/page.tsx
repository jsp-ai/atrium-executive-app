import Link from "next/link";
import {
  ACCOUNT,
  CONCIERGES,
  WEEKLY_BRIEF,
  OPEN_QUESTIONS,
  RECENT_DECISIONS,
  COUNCIL_CALENDAR,
  ACTIVITY,
} from "@/lib/mock/mendoza";
import DashboardSearch from "@/components/portal/DashboardSearch";

export default function Dashboard() {
  const operating = CONCIERGES[1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0 min-h-full">
      {/* Main column */}
      <div className="px-5 sm:px-10 lg:px-12 py-10 sm:py-12 max-w-[820px]">
        {/* Search bar */}
        <DashboardSearch accountSlug={ACCOUNT.slug} />

        <div className="mt-10 sm:mt-12 label">This week &middot; {WEEKLY_BRIEF.asOf}</div>
        <h1 className="mt-3 font-display text-[30px] sm:text-[34px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
          In your house.
        </h1>

        {/* The composed weekly brief */}
        <div className="mt-9 space-y-5 text-[16px] leading-[1.78] text-ink">
          {WEEKLY_BRIEF.paragraphs.map((para, i) => (
            <p key={i}>
              {para.map((seg, j) => (
                <span key={j}>
                  {seg.text}
                  {seg.cite && (
                    <Link
                      href={`/portal/${ACCOUNT.slug}/memory/${seg.link}`}
                      className="cite"
                    >
                      {seg.cite}
                    </Link>
                  )}
                </span>
              ))}
            </p>
          ))}
        </div>

        <div className="mt-7 pt-5 border-t border-rule-soft flex flex-wrap gap-x-4 gap-y-2 justify-between items-baseline text-[11px] text-mute tracking-[0.02em]">
          <span>
            Composed by{" "}
            <Link
              href={`/portal/${ACCOUNT.slug}/concierge`}
              className="text-ink-soft border-b border-dotted border-mute-soft hover:text-copper hover:border-copper transition-colors duration-150"
            >
              {WEEKLY_BRIEF.composedBy}
            </Link>{" "}
            &middot; {WEEKLY_BRIEF.asOf}
          </span>
          <Link
            href={`/portal/${ACCOUNT.slug}/ask`}
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150 px-1"
          >
            Ask a follow-up &rarr;
          </Link>
        </div>

        {/* Three cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-x-7">
          <Card title="Open questions" subtitle="From the principal">
            <ul className="space-y-3">
              {OPEN_QUESTIONS.map((q) => (
                <li key={q.q}>
                  <Link
                    href={`/portal/${ACCOUNT.slug}/memory/${q.link}`}
                    className="block group"
                  >
                    <div className="font-display text-[14px] leading-[1.4] text-ink italic group-hover:text-copper transition-colors duration-150">
                      &ldquo;{q.q}&rdquo;
                    </div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-mute-soft mt-1">
                      {q.asked}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Recent decisions" subtitle="Past 30 days">
            <ul className="space-y-3">
              {RECENT_DECISIONS.map((d) => (
                <li key={d.title}>
                  <Link
                    href={`/portal/${ACCOUNT.slug}/memory/${d.link}`}
                    className="block group"
                  >
                    <div className="text-[14px] leading-[1.4] text-ink group-hover:text-copper transition-colors duration-150">
                      {d.title}
                    </div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-mute-soft mt-1">
                      {d.date} &middot; {d.author}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Council calendar" subtitle="Next two weeks">
            <ul className="space-y-3">
              {COUNCIL_CALENDAR.map((c) => (
                <li key={c.when}>
                  <Link
                    href={`/portal/${ACCOUNT.slug}/memory/${c.link}`}
                    className="block group"
                  >
                    <div className="text-[14px] leading-[1.4] text-ink group-hover:text-copper transition-colors duration-150">
                      {c.what}
                    </div>
                    <div className="text-[10px] tracking-[0.18em] uppercase text-mute-soft mt-1">
                      {c.when}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Activity */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <div className="label">Recent activity</div>
              <h2 className="mt-2 font-display text-[20px] sm:text-[22px] tracking-[-0.005em] font-normal text-ink">
                What your concierges are tending.
              </h2>
            </div>
            <Link
              href={`/portal/${ACCOUNT.slug}/activity`}
              className="text-[11px] uppercase tracking-[0.18em] text-mute hover:text-ink whitespace-nowrap"
            >
              Full log &rarr;
            </Link>
          </div>

          <ul className="mt-7 divide-y divide-rule-soft">
            {ACTIVITY.slice(0, 6).map((a, i) => (
              <li key={i} className="py-4 text-[13px]">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-mono text-[11px] text-mute-soft">{a.ts}</span>
                  <span className="font-mono text-[11px] text-copper">{a.actor}</span>
                  <span className="text-ink-soft text-[12px]">{a.action}</span>
                  <Link
                    href={`/portal/${ACCOUNT.slug}/memory/${a.target}`}
                    className="text-ink font-display tracking-[-0.005em] hover:text-copper"
                  >
                    [[{a.target}]]
                  </Link>
                </div>
                <div className="mt-1 text-mute italic font-display text-[12px]">
                  {a.note}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right rail */}
      <aside className="border-t lg:border-t-0 lg:border-l border-rule-soft bg-paper-soft px-5 sm:px-7 py-10 lg:py-12">
        <div className="label">Your concierge</div>

        <div className="mt-5 flex items-start gap-3.5">
          <div className="h-11 w-11 rounded-full bg-paper-card border border-rule flex items-center justify-center font-display text-[13px] tracking-[0.04em] text-ink-soft shrink-0">
            {operating.initials}
          </div>
          <div className="min-w-0">
            <div className="font-display text-[15px] tracking-[-0.005em] text-ink leading-tight">
              {operating.name}
            </div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-mute-soft mt-0.5">
              {operating.role}
            </div>
          </div>
        </div>
        <p className="mt-4 text-[12.5px] leading-[1.55] text-ink-soft">
          {operating.bio}
        </p>
        <Link
          href={`/portal/${ACCOUNT.slug}/concierge#concierge-compose-anchor`}
          className="mt-4 inline-block text-[11px] uppercase tracking-[0.18em] text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150 px-1 py-0.5"
        >
          Send a message
        </Link>

        <div className="mt-9 pt-7 border-t border-rule-soft">
          <div className="label-mute mb-3">Also on your team</div>
          <ul className="space-y-3.5">
            {CONCIERGES.filter((c) => c !== operating).map((c) => (
              <li key={c.name}>
                <Link
                  href={`/portal/${ACCOUNT.slug}/concierge`}
                  className="flex items-start gap-3 group"
                >
                  <div className="h-8 w-8 rounded-full bg-paper-card border border-rule group-hover:border-ink transition-colors duration-150 flex items-center justify-center font-display text-[10.5px] tracking-[0.04em] text-ink-soft shrink-0">
                    {c.initials}
                  </div>
                  <div className="min-w-0 leading-tight">
                    <div className="font-display text-[13px] text-ink group-hover:text-copper transition-colors duration-150">
                      {c.name}
                    </div>
                    <div className="text-[9.5px] tracking-[0.18em] uppercase text-mute-soft">
                      {c.role}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/portal/${ACCOUNT.slug}/settings`}
          className="mt-9 pt-7 border-t border-rule-soft text-[10.5px] leading-[1.6] text-mute font-mono block hover:text-ink transition-colors duration-150 group"
        >
          <div className="label-mute mb-2 font-sans group-hover:text-copper transition-colors duration-150">
            Repository
          </div>
          atrium-wiki-mendoza
          <br />
          private &middot; git-versioned
          <br />
          {ACCOUNT.installedAt} &rarr; today
        </Link>
      </aside>
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-ink pt-4">
      <div className="label">{title}</div>
      {subtitle && (
        <div className="text-[10px] tracking-[0.18em] uppercase text-mute-soft mt-0.5">
          {subtitle}
        </div>
      )}
      <div className="mt-5">{children}</div>
    </div>
  );
}
