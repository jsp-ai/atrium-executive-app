import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-paper">
      <div className="mx-auto w-full max-w-[1040px] px-6 sm:px-10 py-6 sm:py-7 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[20px] tracking-[0.02em] text-ink hover:text-copper transition-colors duration-150"
        >
          Atrium
        </Link>

        <Link
          href="/portal/login"
          className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-ink transition-colors duration-150"
        >
          Client login
        </Link>
      </div>
    </header>
  );
}
