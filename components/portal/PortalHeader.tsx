import Link from "next/link";
import HeaderMenu from "./HeaderMenu";

export default function PortalHeader({
  accountName,
  accountSlug,
  principalInitials,
  principalName,
  principalRole,
}: {
  accountName: string;
  accountSlug: string;
  principalInitials: string;
  principalName: string;
  principalRole: string;
}) {
  return (
    <header className="px-9 h-[68px] border-b border-rule-soft bg-paper flex items-center justify-between">
      <div className="flex items-center gap-7">
        <Link
          href="/"
          className="font-display text-[19px] tracking-[0.02em] text-ink hover:text-copper transition-colors duration-150"
        >
          Atrium
        </Link>
        <div className="h-4 w-px bg-rule" aria-hidden />
        <Link
          href={`/portal/${accountSlug}`}
          className="block hover:text-copper transition-colors duration-150"
        >
          <div className="font-display text-[15px] tracking-[-0.005em] text-ink">
            {accountName}
          </div>
          <div className="text-[10px] tracking-[0.18em] uppercase text-mute-soft -mt-0.5">
            Atrium &middot; {accountSlug}
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href={`/portal/${accountSlug}/concierge`}
          className="text-[11px] uppercase tracking-[0.18em] text-mute hover:text-ink transition-colors duration-150"
        >
          Concierge
        </Link>
        <div className="h-4 w-px bg-rule" aria-hidden />
        <HeaderMenu
          accountSlug={accountSlug}
          principalInitials={principalInitials}
          principalName={principalName}
          principalRole={principalRole}
        />
      </div>
    </header>
  );
}
