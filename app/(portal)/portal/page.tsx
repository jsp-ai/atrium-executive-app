import Link from "next/link";

export const metadata = {
  title: "Client area · Atrium",
  description: "Atrium client portal · By invitation.",
};

export default function PortalLanding() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 sm:px-12 py-7 flex items-center justify-between bg-paper">
        <Link
          href="/"
          className="font-display text-[20px] tracking-[0.02em] text-ink hover:text-copper transition-colors duration-150"
        >
          Atrium
        </Link>
        <div className="label-mute">Client area</div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 sm:px-12 py-16 sm:py-24">
        <div className="max-w-[560px]">
          <div className="label">Atrium &middot; Client area</div>
          <h1 className="mt-6 font-display text-[40px] leading-[1.08] tracking-[-0.01em] font-normal text-ink">
            By invitation.
          </h1>
          <p className="mt-7 font-display italic text-[18px] leading-[1.55] text-ink-soft">
            The client portal opens to signed engagements only.
          </p>
          <p className="mt-5 text-[15px] leading-[1.65] text-ink-soft max-w-[480px]">
            If you are an existing client, your concierge has the email on file.{" "}
            <Link
              href="/portal/login"
              className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150"
            >
              Sign in
            </Link>
            . If you are exploring whether Atrium is right for your family —{" "}
            <Link
              href="/inquiry"
              className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150"
            >
              begin with a conversation
            </Link>
            .
          </p>

          <div className="mt-14 border-t border-rule pt-8 max-w-[480px]">
            <div className="label">Demo</div>
            <p className="mt-4 text-[14px] leading-[1.7] text-ink-soft">
              For prospective principals and their advisors, a designed walk-through of what your family sees inside Atrium.
            </p>
            <div className="mt-5 flex flex-col gap-3 text-[13px]">
              <Link
                href="/portal/login"
                className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150 self-start"
              >
                Start with the sign-in flow &rarr;
              </Link>
              <Link
                href="/portal/welcome"
                className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150 self-start"
              >
                Skip to the first-login experience &rarr;
              </Link>
              <Link
                href="/portal/mendoza"
                className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150 self-start"
              >
                Skip to the principal&rsquo;s dashboard (demo family) &rarr;
              </Link>
            </div>
          </div>

          <div className="mt-16 text-[11px] text-mute tracking-[0.04em] font-mono">
            Real authentication: WorkOS AuthKit &middot; magic link + passkey
          </div>
        </div>
      </main>
    </div>
  );
}
