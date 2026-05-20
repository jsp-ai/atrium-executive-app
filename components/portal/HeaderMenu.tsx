"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HeaderMenu({
  accountSlug,
  principalInitials,
  principalName,
  principalRole,
}: {
  accountSlug: string;
  principalInitials: string;
  principalName: string;
  principalRole: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", onDown);
      document.addEventListener("keydown", onEsc);
    }
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`h-9 w-9 rounded-full bg-paper-card border flex items-center justify-center font-display text-[12px] tracking-[0.04em] text-ink-soft transition-colors duration-150 ${
          open ? "border-ink" : "border-rule hover:border-ink"
        }`}
        title="Signed in"
      >
        {principalInitials}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] w-[240px] bg-paper border border-ink shadow-[0_8px_28px_rgba(0,0,0,0.12)] py-1"
        >
          <div className="px-4 py-3 border-b border-rule-soft">
            <div className="font-display text-[14px] tracking-[-0.005em] text-ink leading-tight">
              {principalName}
            </div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-copper mt-1">
              {principalRole}
            </div>
          </div>

          <MenuLink href={`/portal/${accountSlug}`} label="Dashboard" />
          <MenuLink href={`/portal/${accountSlug}/settings`} label="Members & access" />
          <MenuLink href={`/portal/${accountSlug}/memory`} label="Memory" />

          <div className="my-1 border-t border-rule-soft" />

          <Link
            href="/portal/login"
            className="block px-4 py-2.5 text-[12.5px] text-mute hover:text-ink hover:bg-paper-card transition-colors duration-150"
            role="menuitem"
          >
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
}

function MenuLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      role="menuitem"
      className="block px-4 py-2.5 text-[12.5px] text-ink-soft hover:text-ink hover:bg-paper-card transition-colors duration-150"
    >
      {label}
    </Link>
  );
}
