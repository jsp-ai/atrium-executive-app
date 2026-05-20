"use client";

import { useEffect, useRef, useState } from "react";
import { useToast } from "./Toast";

export default function MemberManageButton({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { push } = useToast();

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  function action(label: string) {
    setOpen(false);
    push({
      title: `${label} — ${name}`,
      body: "Recorded. Your concierge will receive a council-style change request and surface it at the next council briefing.",
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`text-[10px] uppercase tracking-[0.22em] transition-colors duration-150 ${
          open ? "text-ink" : "text-mute hover:text-ink"
        }`}
      >
        Manage
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] w-[200px] bg-paper border border-ink shadow-[0_8px_28px_rgba(0,0,0,0.12)] py-1 z-20"
        >
          <button
            onClick={() => action("Edit role")}
            className="block w-full text-left px-4 py-2.5 text-[12.5px] text-ink-soft hover:text-ink hover:bg-paper-card transition-colors duration-150"
            role="menuitem"
          >
            Edit role
          </button>
          <button
            onClick={() => action("Resend invitation")}
            className="block w-full text-left px-4 py-2.5 text-[12.5px] text-ink-soft hover:text-ink hover:bg-paper-card transition-colors duration-150"
            role="menuitem"
          >
            Resend invitation
          </button>
          <button
            onClick={() => action("Set access window")}
            className="block w-full text-left px-4 py-2.5 text-[12.5px] text-ink-soft hover:text-ink hover:bg-paper-card transition-colors duration-150"
            role="menuitem"
          >
            Set access window
          </button>
          <div className="my-1 border-t border-rule-soft" />
          <button
            onClick={() => action("Revoke access")}
            className="block w-full text-left px-4 py-2.5 text-[12.5px] text-copper hover:bg-paper-card transition-colors duration-150"
            role="menuitem"
          >
            Revoke access
          </button>
        </div>
      )}
    </div>
  );
}
