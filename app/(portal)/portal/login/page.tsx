import Link from "next/link";
import MagicLinkForm from "@/components/portal/MagicLinkForm";

export const metadata = {
  title: "Sign in · Atrium",
  description: "Atrium client area · sign in by magic link",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const { sent } = await searchParams;
  const linkSent = Boolean(sent);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <header className="px-9 h-[68px] border-b border-rule-soft bg-paper flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[19px] tracking-[0.02em] text-ink hover:text-copper transition-colors duration-150"
        >
          Atrium
        </Link>
        <div className="label-mute">Sign in</div>
      </header>

      <main className="flex-1 flex items-center justify-center px-12 py-24">
        <div className="max-w-[460px] w-full">
          <div className="label">Client area</div>
          <h1 className="mt-5 font-display text-[36px] leading-[1.08] tracking-[-0.01em] font-normal text-ink">
            Sign in.
          </h1>
          <p className="mt-5 font-display italic text-[17px] leading-[1.5] text-ink-soft">
            We send a one-time link to the email your concierge has on file. No password.
          </p>

          {linkSent ? (
            <SentState />
          ) : (
            <>
              <MagicLinkForm />

              {/* Demo entry — for prospective principals and their advisors */}
              <div className="mt-12 pt-9 border-t border-rule-soft">
                <div className="label-mute mb-3">Not yet a client?</div>
                <p className="text-[13.5px] leading-[1.65] text-ink-soft max-w-[420px]">
                  Walk through the principal&rsquo;s view, end to end, with a designed sample family. No sign-in. No email.
                </p>
                <Link
                  href="/portal/welcome"
                  className="mt-5 inline-block text-[11px] uppercase tracking-[0.22em] text-ink border border-ink px-6 py-3 hover:bg-ink hover:text-paper transition-all duration-150"
                >
                  View demo &rarr;
                </Link>
              </div>
            </>
          )}

          <div className="mt-14 pt-7 border-t border-rule-soft text-[11px] text-mute font-mono leading-[1.7]">
            <div className="label-mute mb-2 font-sans">Production</div>
            Magic link via WorkOS AuthKit &middot; WebAuthn passkey enroll on second visit &middot; session cookie, 8h rolling for principals
          </div>
        </div>
      </main>
    </div>
  );
}

function SentState() {
  return (
    <div className="mt-9 border-l-2 border-copper pl-7 py-2">
      <p className="font-display italic text-[18px] leading-[1.55] text-ink">
        Link sent. Check your inbox for an email from your concierge.
      </p>
      <p className="mt-4 text-[14px] leading-[1.7] text-ink-soft">
        The link is valid for fifteen minutes and works once. If you don&rsquo;t see it, look in the quiet folder or ask your concierge to re-send.
      </p>
      <div className="mt-7 text-[11px] tracking-[0.04em] text-mute font-mono">
        For this demo &mdash;{" "}
        <Link
          href="/portal/welcome?step=1"
          className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 transition-colors duration-150"
        >
          continue as Don Tomás &rarr;
        </Link>
      </div>
    </div>
  );
}
