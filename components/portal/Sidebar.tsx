"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SECTIONS: { heading?: string; items: { href: string; label: string }[] }[] = [
  {
    items: [
      { href: "", label: "Dashboard" },
      { href: "/ask", label: "Ask" },
    ],
  },
  {
    heading: "Memory",
    items: [
      { href: "/memory", label: "Wiki" },
      { href: "/activity", label: "Activity" },
      { href: "/files", label: "Files" },
    ],
  },
  {
    heading: "Stewardship",
    items: [
      { href: "/concierge", label: "Your concierge" },
      { href: "/settings", label: "Members & access" },
    ],
  },
];

export default function Sidebar({ accountSlug }: { accountSlug: string }) {
  const pathname = usePathname();
  const base = `/portal/${accountSlug}`;

  function active(href: string) {
    const full = `${base}${href}`;
    return href === ""
      ? pathname === base
      : pathname === full || pathname.startsWith(`${full}/`);
  }

  const allItems = SECTIONS.flatMap((s) => s.items);

  return (
    <>
      {/* Mobile / tablet — horizontal scrolling nav strip */}
      <nav className="lg:hidden border-b border-rule-soft bg-paper-soft overflow-x-auto">
        <ul className="flex items-center gap-1 px-4 py-2 min-w-max">
          {allItems.map((item) => {
            const href = `${base}${item.href}`;
            const isActive = active(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={href}
                  className={`block whitespace-nowrap px-3 py-2 text-[12px] tracking-[-0.005em] transition-colors duration-150 ${
                    isActive
                      ? "text-ink font-medium border-b-2 border-copper"
                      : "text-mute hover:text-ink border-b-2 border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop — vertical sidebar */}
      <nav className="hidden lg:flex w-[230px] shrink-0 border-r border-rule-soft bg-paper-soft px-7 py-9 flex-col gap-7">
        {SECTIONS.map((section, i) => (
          <div key={i}>
            {section.heading && <div className="label-mute mb-4">{section.heading}</div>}
            <ul className="flex flex-col gap-1.5">
              {section.items.map((item) => {
                const href = `${base}${item.href}`;
                const isActive = active(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={href}
                      className={`block py-1.5 text-[13px] tracking-[-0.005em] transition-colors duration-150 ${
                        isActive
                          ? "text-ink font-medium"
                          : "text-mute hover:text-ink"
                      }`}
                    >
                      {isActive && <span className="text-copper mr-2">·</span>}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div className="mt-auto border-t border-rule-soft pt-6 text-[10px] tracking-[0.18em] uppercase text-mute-soft font-mono">
          plain text &middot; signed commits &middot; in a repo you own
        </div>
      </nav>
    </>
  );
}
