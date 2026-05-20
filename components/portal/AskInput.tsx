"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AskInput({ accountSlug }: { accountSlug: string }) {
  const [value, setValue] = useState("");
  const router = useRouter();

  function submit() {
    const q = value.trim();
    if (!q) return;
    router.push(`/portal/${accountSlug}/ask?free=${encodeURIComponent(q)}`);
  }

  return (
    <div className="flex items-center gap-4">
      <span className="font-display italic text-copper text-[20px]">›</span>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Ask a follow-up — in your own words…"
        className="flex-1 bg-transparent border-none outline-none font-display italic text-[18px] text-ink placeholder:text-mute-soft py-2"
        aria-label="Ask a question"
      />
      <button
        onClick={submit}
        className="text-[10px] uppercase tracking-[0.22em] text-mute border border-rule px-4 py-2 hover:text-paper hover:bg-ink hover:border-ink transition-all duration-150"
      >
        Ask
      </button>
    </div>
  );
}
