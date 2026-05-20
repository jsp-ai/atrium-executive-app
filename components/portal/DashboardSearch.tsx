"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardSearch({ accountSlug }: { accountSlug: string }) {
  const [value, setValue] = useState("");
  const router = useRouter();

  function submit() {
    const q = value.trim();
    if (!q) return;
    router.push(`/portal/${accountSlug}/ask?free=${encodeURIComponent(q)}`);
  }

  return (
    <div className="border-b border-rule-soft pb-5 flex items-center gap-4 max-w-[820px]">
      <span className="font-display italic text-copper text-[19px]">›</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Ask your house anything…"
        className="flex-1 bg-transparent border-none outline-none font-display italic text-[17px] text-ink placeholder:text-mute-soft py-1.5"
        aria-label="Search and ask"
      />
      <button
        onClick={submit}
        className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-paper hover:bg-ink hover:border-ink border border-rule px-4 py-1.5 transition-all duration-150"
      >
        Ask
      </button>
    </div>
  );
}
