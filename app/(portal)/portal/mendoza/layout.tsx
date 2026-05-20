import Sidebar from "@/components/portal/Sidebar";
import PortalHeader from "@/components/portal/PortalHeader";
import { ToastProvider } from "@/components/portal/Toast";
import { ACCOUNT, PRINCIPAL } from "@/lib/mock/mendoza";

export const metadata = {
  title: `${ACCOUNT.displayName} · Atrium`,
};

export default function MendozaPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-paper">
        <div className="bg-paper-card border-b border-rule-soft px-9 py-2 text-[10px] tracking-[0.22em] uppercase text-copper text-center font-mono">
          Demo &middot; designed walk-through of the principal&rsquo;s view &middot; no auth, no live data
        </div>
        <PortalHeader
          accountName={ACCOUNT.displayName}
          accountSlug={ACCOUNT.slug}
          principalInitials={PRINCIPAL.initials}
          principalName={PRINCIPAL.fullName}
          principalRole={PRINCIPAL.role}
        />
        <div className="flex-1 flex">
          <Sidebar accountSlug={ACCOUNT.slug} />
          <main className="flex-1 min-w-0 bg-paper">{children}</main>
        </div>
      </div>
    </ToastProvider>
  );
}
