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

  return (
    <nav className="w-[230px] shrink-0 border-r border-rule-soft bg-paper-soft px-7 py-9 flex flex-col gap-7">
      {SECTIONS.map((section, i) => (
        <div key={i}>
          {section.heading && <div className="label-mute mb-4">{section.heading}</div>}
          <ul className="flex flex-col gap-1.5">
            {section.items.map((item) => {
              const href = `${base}${item.href}`;
              const isActive =
                item.href === ""
                  ? pathname === base
                  : pathname === href || pathname.startsWith(`${href}/`);
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
  );
}
