import Link from "next/link";
import { MEMBERS, ACCOUNT } from "@/lib/mock/mendoza";
import NotificationToggles from "@/components/portal/NotificationToggles";
import MemberManageButton from "@/components/portal/MemberManageButton";
import RepositoryActions from "@/components/portal/RepositoryActions";

export default function Settings() {
  return (
    <div className="px-12 py-12 max-w-[820px]">
      <div className="label">Stewardship &middot; Members & access</div>
      <h1 className="mt-3 font-display text-[34px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
        Who can read your house.
      </h1>
      <p className="mt-4 font-display italic text-[16px] leading-[1.55] text-ink-soft max-w-[640px]">
        Family members, heirs, and time-bounded advisors. Atrium concierges hold their own roles and are never counted as members.
      </p>

      <section className="mt-12">
        <div className="label-mute mb-4">Members</div>
        <ul className="divide-y divide-rule-soft border-y border-rule-soft">
          {MEMBERS.map((m) => (
            <li
              key={m.name}
              className="grid grid-cols-[1fr_220px_100px_auto] gap-6 py-4 items-baseline"
            >
              {m.link ? (
                <Link
                  href={`/portal/${ACCOUNT.slug}/memory/${m.link}`}
                  className="font-display text-[15px] tracking-[-0.005em] text-ink hover:text-copper transition-colors duration-150"
                >
                  {m.name}
                </Link>
              ) : (
                <div className="font-display text-[15px] tracking-[-0.005em] text-ink">
                  {m.name}
                </div>
              )}
              <div className="text-[11px] tracking-[0.18em] uppercase text-copper">{m.role}</div>
              <div className="text-[11px] font-mono text-mute">{m.lastSeen}</div>
              <MemberManageButton name={m.name} />
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[12px] text-mute font-display italic">
          The principal invites family members. Concierges request additions; the principal approves. No Atrium staff can add a family member unilaterally.
        </p>
      </section>

      <section className="mt-16">
        <div className="label-mute mb-4">Notifications</div>
        <NotificationToggles />
      </section>

      <section className="mt-16">
        <div className="label-mute mb-4">Repository</div>
        <div className="border border-rule bg-paper-card px-7 py-6 text-[13px] text-ink-soft leading-[1.7]">
          Your family&rsquo;s memory is plain markdown in a private GitHub repository named{" "}
          <span className="font-mono text-ink">atrium-wiki-mendoza</span>. You own the repository.
          <br />
          <br />
          Atrium can be ended at any time. The repository remains yours unchanged the day after.
        </div>

        <div className="mt-5">
          <RepositoryActions />
        </div>
      </section>

      <div className="mt-20 pt-7 border-t border-rule text-[11px] text-mute font-mono leading-[1.7]">
        <div className="label-mute mb-3 font-sans">Account</div>
        Slug &middot; {ACCOUNT.slug}
        <br />
        Installed &middot; {ACCOUNT.installedAt}
        <br />
        Tier &middot; Atrium Install &rarr; Operate (monthly retainer)
      </div>
    </div>
  );
}

