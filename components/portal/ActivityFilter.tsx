"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Activity = {
  ts: string;
  actor: string;
  action: string;
  target: string;
  note: string;
};

const ACTOR_DISPLAY: Record<string, string> = {
  maria: "Maria Rivera",
  andres: "Andres Cruz",
  rafael: "Rafael Velasco",
  "atrium-bot": "atrium-bot",
  council: "Family council",
};

export default function ActivityFilter({
  items,
  accountSlug,
}: {
  items: readonly Activity[];
  accountSlug: string;
}) {
  const [actor, setActor] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const actors = useMemo(() => {
    const set = new Set<string>();
    for (const i of items) set.add(i.actor);
    return [...set];
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      if (actor && i.actor !== actor) return false;
      if (q) {
        const hay = `${i.target} ${i.note} ${i.action}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [items, actor, query]);

  const byDay = useMemo(() => {
    const map = new Map<string, Activity[]>();
    for (const i of filtered) {
      const day = i.ts.split(" · ")[0];
      const list = map.get(day) ?? [];
      list.push(i);
      map.set(day, list);
    }
    return [...map.entries()];
  }, [filtered]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[10px] tracking-[0.18em] uppercase">
        <FilterPill
          label="All authors"
          active={actor === null}
          onClick={() => setActor(null)}
        />
        {actors.map((a) => (
          <FilterPill
            key={a}
            label={ACTOR_DISPLAY[a] ?? a}
            active={actor === a}
            onClick={() => setActor(a)}
          />
        ))}
        <div className="w-full sm:w-auto sm:ml-auto flex items-center gap-2.5 text-[11px] normal-case tracking-normal">
          <span className="font-display italic text-mute">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="page, action, or word…"
            className="flex-1 sm:flex-none bg-transparent border-0 border-b border-rule focus:border-ink outline-none py-1 px-2 font-display text-[13px] text-ink placeholder:text-mute-soft sm:w-[220px]"
          />
        </div>
      </div>

      {/* Results */}
      <div className="mt-12 space-y-12">
        {byDay.length === 0 && (
          <div className="text-[14px] text-mute font-display italic">
            No activity matches that filter.{" "}
            <button
              onClick={() => {
                setActor(null);
                setQuery("");
              }}
              className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 transition-colors duration-150"
            >
              Reset
            </button>
          </div>
        )}

        {byDay.map(([day, list]) => (
          <section key={day}>
            <div className="label">{day}</div>
            <ul className="mt-5 divide-y divide-rule-soft border-t border-rule-soft">
              {list.map((a, i) => (
                <li key={i} className="py-5 text-[13px]">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-[11px] text-mute-soft">
                      {a.ts.split(" · ")[1]}
                    </span>
                    <span className="font-mono text-[11px] text-copper">
                      {a.actor}
                    </span>
                    <span className="text-ink-soft text-[12px]">{a.action}</span>
                    <Link
                      href={`/portal/${accountSlug}/memory/${a.target}`}
                      className="font-display text-[14px] text-ink hover:text-copper"
                    >
                      [[{a.target}]]
                    </Link>
                  </div>
                  <div className="mt-1 text-mute italic font-display text-[12px]">
                    {a.note}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 border transition-all duration-150 ${
        active
          ? "border-ink bg-ink text-paper"
          : "border-rule text-mute hover:text-ink hover:border-ink"
      }`}
    >
      {label}
    </button>
  );
}
