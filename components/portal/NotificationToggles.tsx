"use client";

import { useState } from "react";

type Toggle = { id: string; label: string; hint: string; defaultOn: boolean };

const TOGGLES: Toggle[] = [
  {
    id: "weekly",
    label: "Weekly digest",
    hint: "Composed Sunday evening Manila.",
    defaultOn: true,
  },
  {
    id: "decision",
    label: "Decision-pending nudge",
    hint: "When the principal's signature is the only thing blocking a council resolution.",
    defaultOn: true,
  },
  {
    id: "daily",
    label: "Activity rollup",
    hint: "Daily summary of what your concierges tended.",
    defaultOn: false,
  },
  {
    id: "realtime",
    label: "Realtime activity",
    hint: "Every signed commit, as it happens.",
    defaultOn: false,
  },
];

export default function NotificationToggles() {
  const [state, setState] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(TOGGLES.map((t) => [t.id, t.defaultOn])),
  );

  return (
    <ul className="space-y-4 text-[14px] text-ink-soft">
      {TOGGLES.map((t) => {
        const on = state[t.id];
        return (
          <li
            key={t.id}
            className="flex items-start justify-between gap-6 py-2.5 border-b border-rule-soft last:border-b-0"
          >
            <div className="flex-1">
              <div className="text-[14px] text-ink">{t.label}</div>
              <div className="text-[12px] text-mute font-display italic mt-0.5">
                {t.hint}
              </div>
            </div>
            <button
              onClick={() => setState((s) => ({ ...s, [t.id]: !s[t.id] }))}
              aria-pressed={on}
              aria-label={`Toggle ${t.label}`}
              className={`mt-1 h-5 w-9 rounded-full border transition-all duration-150 relative shrink-0 ${
                on ? "bg-ink border-ink" : "bg-paper-card border-rule"
              }`}
            >
              <span
                className={`absolute top-0.5 h-3.5 w-3.5 rounded-full transition-all duration-150 ${
                  on ? "left-[18px] bg-paper" : "left-0.5 bg-mute-soft"
                }`}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
