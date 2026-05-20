import { CONCIERGES, MESSAGES } from "@/lib/mock/mendoza";
import ConciergeThread from "@/components/portal/ConciergeThread";
import ScrollFocusButton from "@/components/portal/ScrollFocusButton";

const THIS_MONTH = [
  "Finalize the Singapore SFO license counsel memorandum (third revision in flight)",
  "Capture Tomás's working session on the 1989 textile-exit reasoning",
  "Roll forward the 13-week cash forecast each Sunday evening",
  "Lint and re-cite the 2025 distribution policy against the trustee letter superseded in March",
  "Prepare the next-gen council briefing pack for Wednesday May 22",
];

export default function Concierge() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] min-h-full">
      <div className="px-5 sm:px-10 lg:px-12 py-10 sm:py-12 max-w-[760px]">
        <div className="label">Stewardship &middot; Your concierge</div>
        <h1 className="mt-3 font-display text-[30px] sm:text-[34px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
          Your team.
        </h1>
        <p className="mt-4 font-display italic text-[16px] leading-[1.55] text-ink-soft max-w-[640px]">
          Three people who know your house. One message away.
        </p>

        <div className="mt-10 sm:mt-12 space-y-9">
          {CONCIERGES.map((c) => (
            <div
              key={c.name}
              className="flex flex-wrap sm:flex-nowrap items-start gap-x-5 gap-y-4 pb-9 border-b border-rule-soft last:border-b-0"
            >
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-paper-card border border-rule flex items-center justify-center font-display text-[14px] sm:text-[15px] tracking-[0.04em] text-ink-soft shrink-0">
                {c.initials}
              </div>
              <div className="flex-1 min-w-[180px]">
                <div className="font-display text-[19px] sm:text-[20px] tracking-[-0.005em] text-ink">{c.name}</div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-copper mt-1">{c.role}</div>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink-soft max-w-[480px]">{c.bio}</p>
                <div className="mt-4 text-[11px] tracking-[0.04em] text-mute font-mono">
                  Based in {c.based}
                </div>
              </div>
              <ScrollFocusButton
                targetId="concierge-compose"
                label="Message"
                preset={`${c.name.split(" ")[0]}, `}
              />
            </div>
          ))}
        </div>

        <section className="mt-16">
          <div className="label-mute">This month&rsquo;s focus</div>
          <h2 className="mt-3 font-display text-[22px] tracking-[-0.005em] font-normal text-ink">
            What we are tending for you in May.
          </h2>
          <ul className="mt-7 space-y-4 text-[15px] leading-[1.6] text-ink-soft max-w-[640px]">
            {THIS_MONTH.map((m) => (
              <li key={m} className="flex gap-4">
                <span className="text-copper pt-1">&mdash;</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Recent thread */}
      <aside className="border-t lg:border-t-0 lg:border-l border-rule-soft bg-paper-soft px-5 sm:px-7 py-10 lg:py-12">
        <div className="label">Recent thread</div>
        <p className="mt-3 text-[11px] text-mute font-display italic">
          Messages stay quiet here. No email, no Slack.
        </p>

        <ConciergeThread initialMessages={[...MESSAGES]} />
      </aside>
    </div>
  );
}
