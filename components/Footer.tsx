import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rule px-12 py-7 bg-paper">
      <div className="flex flex-col gap-2 max-w-[820px]">
        <div className="font-display italic text-[14px] text-ink-soft">
          Atrium &middot; A private practice. Manila.
        </div>
        <div className="text-[11px] text-mute tracking-[0.04em]">
          By inquiry only &middot;{" "}
          <Link
            href="/inquiry"
            className="text-ink-soft border-b border-dotted border-mute-soft hover:text-copper hover:border-copper transition-colors duration-150"
          >
            Request a conversation
          </Link>
        </div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-mute-soft">
          <Link href="/portal" className="hover:text-ink transition-colors duration-150">
            Client login
          </Link>
        </div>
      </div>
    </footer>
  );
}
