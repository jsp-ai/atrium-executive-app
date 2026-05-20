"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MagicLinkForm() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const router = useRouter();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || sending) return;
    setSending(true);
    // Mock the network round-trip
    setTimeout(() => {
      router.push("/portal/login?sent=1");
    }, 700);
  }

  return (
    <form onSubmit={submit} className="mt-9 space-y-5">
      <label className="block">
        <div className="label-mute mb-2">The email your concierge has on file</div>
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tomas.mendoza@example.com"
          className="w-full bg-transparent border-0 border-b border-rule focus:border-ink outline-none py-2 font-display text-[18px] text-ink placeholder:text-mute-soft transition-colors duration-150"
        />
      </label>

      <button
        type="submit"
        disabled={sending || !email.trim()}
        className="text-[11px] uppercase tracking-[0.22em] text-paper bg-ink border border-ink px-6 py-3 hover:bg-copper hover:border-copper transition-all duration-150 disabled:opacity-40 disabled:cursor-wait"
      >
        {sending ? "Sending the link…" : "Send the link"}
      </button>
    </form>
  );
}
