"use client";

import { useState } from "react";

type Message = {
  from: string;
  when: string;
  body: string;
};

const ACTOR_NAMES: Record<string, string> = {
  maria: "Maria Rivera",
  andres: "Andres Cruz",
  rafael: "Rafael Velasco",
  principal: "Don Tomás Mendoza",
  you: "You",
};

export default function ConciergeThread({
  initialMessages,
}: {
  initialMessages: Message[];
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);

  function send() {
    const body = draft.trim();
    if (!body || sending) return;
    setSending(true);
    const stamp = new Date().toISOString().slice(0, 16).replace("T", " · ");
    const optimistic: Message = { from: "you", when: stamp, body };
    setMessages((m) => [optimistic, ...m]);
    setDraft("");

    // Mock the concierge's read receipt + reply
    setTimeout(() => {
      const reply: Message = {
        from: "maria",
        when: new Date(Date.now() + 1).toISOString().slice(0, 16).replace("T", " · "),
        body: "Received. I'll take this one in the morning, Manila time, and put a note on your dashboard before you read your brief.",
      };
      setMessages((m) => [reply, ...m]);
      setSending(false);
    }, 1200);
  }

  return (
    <>
      <ul className="mt-7 space-y-7">
        {messages.map((m, i) => (
          <li key={i}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span
                className={`font-display text-[13px] tracking-[-0.005em] ${
                  m.from === "you" ? "text-copper" : "text-ink"
                }`}
              >
                {ACTOR_NAMES[m.from] ?? m.from}
              </span>
              <span className="font-mono text-[10px] text-mute-soft">
                {m.when.split(" · ")[1] ?? m.when}
              </span>
            </div>
            <p className="text-[13px] leading-[1.6] text-ink-soft">{m.body}</p>
          </li>
        ))}
      </ul>

      <div id="concierge-compose-anchor" className="mt-9 pt-6 border-t border-rule-soft">
        <textarea
          id="concierge-compose"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Compose a quiet message to your concierge…"
          rows={4}
          disabled={sending}
          className="w-full bg-transparent border border-rule focus:border-ink outline-none p-3 font-display text-[13.5px] leading-[1.55] text-ink placeholder:text-mute-soft transition-colors duration-150 resize-none disabled:opacity-60"
        />
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.22em] uppercase text-mute-soft">
            {sending ? "Sending…" : `${draft.length} characters`}
          </span>
          <button
            onClick={send}
            disabled={sending || !draft.trim()}
            className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-paper hover:bg-ink hover:border-ink border border-rule px-4 py-2 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
