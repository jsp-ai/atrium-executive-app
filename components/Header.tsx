import Link from "next/link";

export default function Header() {
  return (
    <header className="px-12 py-7 flex items-center justify-between bg-paper">
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
    </header>
  );
}
