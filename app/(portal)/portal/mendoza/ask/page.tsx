import Link from "next/link";
import {
  ACCOUNT,
  ASK_LIBRARY,
  ASK_RECENT,
  SUGGESTED_QUESTIONS,
  type CuratedAnswer,
} from "@/lib/mock/mendoza";
import AskInput from "@/components/portal/AskInput";

export default async function AskPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; free?: string }>;
}) {
  const { q, free } = await searchParams;

  // Free-text search from the dashboard: fuzzy-match against pre-baked Q&As
  let answer: CuratedAnswer | null = null;
  let userQuery: string | null = null;

  if (q && ASK_LIBRARY[q]) {
    answer = ASK_LIBRARY[q];
    userQuery = answer.question;
  } else if (free) {
    userQuery = free;
    answer = matchFree(free);
  } else {
    // Default: the principal's first question of the day
    answer = ASK_LIBRARY["cash-position"];
    userQuery = answer.question;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] min-h-full">
      <div className="px-5 sm:px-10 lg:px-12 py-10 sm:py-12 max-w-[860px]">
        <div className="label">The interface &middot; Ask</div>
        <h1 className="mt-3 font-display text-[30px] sm:text-[34px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
          Ask your house anything.
        </h1>
        <p className="mt-3 font-display italic text-[15px] text-mute max-w-[640px]">
          Plain language. Every claim cites its source. No new app to learn.
        </p>

        <div className="mt-10 sm:mt-12 space-y-12 sm:space-y-14">
          {/* The principal's question */}
          <div>
            <div className="label-mute mb-3">You</div>
            <p className="font-display italic text-[19px] sm:text-[22px] leading-[1.4] text-ink tracking-[-0.005em]">
              {userQuery}
            </p>
            {answer && (
              <div className="mt-2 text-[11px] text-mute-soft tracking-[0.04em] font-mono">
                composed {answer.composedAt} &middot; {answer.sources.length} sources
              </div>
            )}
          </div>

          {/* The composed answer (or fallback) */}
          {answer ? (
            <AnswerBlock answer={answer} />
          ) : (
            <FreeFallback query={userQuery ?? ""} />
          )}
        </div>

        {/* Input + suggested follow-ups */}
        <div className="mt-16 border-t border-rule pt-7">
          <AskInput accountSlug={ACCOUNT.slug} />

          <div className="mt-9">
            <div className="label-mute mb-3">Try next</div>
            <ul className="flex flex-col gap-2">
              {SUGGESTED_QUESTIONS.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/portal/${ACCOUNT.slug}/ask?q=${s.id}`}
                    className="text-left font-display italic text-[15px] text-ink-soft hover:text-copper transition-colors duration-100 py-1 block"
                  >
                    <span className="text-mute-soft not-italic mr-2">&mdash;</span>
                    {s.q}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 pt-5 border-t border-rule-soft text-[11px] text-mute tracking-[0.02em] font-mono">
            Demo &middot; live streaming + retrieval lands in Phase 2 (Anthropic SDK + pgvector + Voyage embeddings)
          </div>
        </div>
      </div>

      {/* History sidebar */}
      <aside className="border-t lg:border-t-0 lg:border-l border-rule-soft bg-paper-soft px-5 sm:px-7 py-10 lg:py-12">
        <div className="label">Today&rsquo;s conversation</div>
        <p className="mt-3 text-[11px] text-mute font-display italic leading-[1.55]">
          Your questions today, in order. Click any to revisit.
        </p>

        <ul className="mt-7 space-y-5">
          {ASK_RECENT.map((r) => {
            const active = answer?.id === r.id;
            return (
              <li key={r.id}>
                <Link
                  href={`/portal/${ACCOUNT.slug}/ask?q=${r.id}`}
                  className="block group"
                >
                  <div className="font-mono text-[10px] tracking-[0.04em] text-mute-soft">
                    {r.when.split(" · ")[1]}
                  </div>
                  <div
                    className={`mt-1 font-display italic text-[13px] leading-[1.4] transition-colors duration-150 ${
                      active ? "text-copper" : "text-ink-soft group-hover:text-ink"
                    }`}
                  >
                    &ldquo;{truncate(r.q, 80)}&rdquo;
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 pt-6 border-t border-rule-soft text-[10.5px] leading-[1.6] text-mute font-mono">
          <div className="label-mute mb-2 font-sans">Older threads</div>
          Conversations older than today move to the threads archive &mdash; Phase 3.
        </div>
      </aside>
    </div>
  );
}

function AnswerBlock({ answer }: { answer: CuratedAnswer }) {
  return (
    <div>
      <div className="label mb-3">Atrium</div>
      <div className="text-[15px] leading-[1.78] text-ink space-y-5">
        {answer.blocks.map((block, i) => {
          if (block.type === "lede") {
            return (
              <p
                key={i}
                className="font-display text-[19px] leading-[1.5] tracking-[-0.005em]"
              >
                {block.text}
                {block.cite && (
                  <Link
                    href={`/portal/${ACCOUNT.slug}/memory/${block.link}`}
                    className="cite"
                  >
                    {block.cite}
                  </Link>
                )}
              </p>
            );
          }
          if (block.type === "pull") {
            return (
              <blockquote key={i} className="pull">
                {block.text}
              </blockquote>
            );
          }
          return (
            <p key={i}>
              {block.text}
              {block.cite && (
                <Link
                  href={`/portal/${ACCOUNT.slug}/memory/${block.link}`}
                  className="cite"
                >
                  {block.cite}
                </Link>
              )}
            </p>
          );
        })}
      </div>

      {/* Sources */}
      <div className="mt-8 pt-5 border-t border-rule-soft text-[12px] text-mute leading-[1.7]">
        <span className="label-mute mr-3">Sources</span>
        {answer.sources.map((src, i) => (
          <span key={src.link}>
            <Link
              href={`/portal/${ACCOUNT.slug}/memory/${src.link}`}
              className="text-ink-soft border-b border-dotted border-mute-soft hover:text-copper hover:border-copper transition-colors duration-150"
            >
              {src.label}
            </Link>
            {i < answer.sources.length - 1 && (
              <span className="text-mute-soft mx-2">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function FreeFallback({ query }: { query: string }) {
  return (
    <div>
      <div className="label mb-3">Atrium</div>
      <div className="border-l-2 border-copper pl-7 py-2 max-w-[640px]">
        <p className="font-display italic text-[17px] leading-[1.55] text-ink">
          We don&rsquo;t have a composed answer for that question yet.
        </p>
        <p className="mt-4 text-[14px] leading-[1.7] text-ink-soft">
          In production, Atrium would compose a response from your wiki here, with citations on every claim. In this demo, only the five questions in the suggested list have pre-composed answers. Try one of those, or open a real engagement to see live composition over your family&rsquo;s memory.
        </p>
        <p className="mt-4 font-mono text-[11px] text-mute">
          Asked: <span className="text-ink-soft">&ldquo;{query}&rdquo;</span>
        </p>
      </div>
    </div>
  );
}

function truncate(s: string, n: number): string {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + "…";
}

function matchFree(free: string): CuratedAnswer | null {
  const norm = free.toLowerCase();
  const all = Object.values(ASK_LIBRARY);
  // Best match: any question whose lowercase title shares >= 3 word stems
  const queryWords = new Set(
    norm.split(/\W+/).filter((w) => w.length > 3),
  );
  let best: { score: number; ans: CuratedAnswer } | null = null;
  for (const ans of all) {
    const qWords = new Set(
      ans.question.toLowerCase().split(/\W+/).filter((w) => w.length > 3),
    );
    let score = 0;
    for (const w of queryWords) if (qWords.has(w)) score++;
    if (best === null || score > best.score) best = { score, ans };
  }
  return best && best.score >= 2 ? best.ans : null;
}
