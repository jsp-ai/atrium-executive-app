import { ACCOUNT, ACTIVITY } from "@/lib/mock/mendoza";
import ActivityFilter from "@/components/portal/ActivityFilter";

export default function Activity() {
  return (
    <div className="px-5 sm:px-10 lg:px-12 py-10 sm:py-12 max-w-[1000px]">
      <div className="label">Stewardship &middot; Activity</div>
      <h1 className="mt-3 font-display text-[30px] sm:text-[34px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
        Every change a signed commit.
      </h1>
      <p className="mt-4 font-display italic text-[16px] leading-[1.55] text-ink-soft max-w-[640px]">
        Reverse-chronological log of every change to your family&rsquo;s memory. Filterable by author, page, and date.
      </p>

      <div className="mt-10">
        <ActivityFilter items={ACTIVITY} accountSlug={ACCOUNT.slug} />
      </div>

      <div className="mt-20 pt-7 border-t border-rule text-[11px] text-mute font-mono leading-[1.7]">
        <div className="label-mute mb-3 font-sans">What you are looking at</div>
        Each line is a signed git commit to your family&rsquo;s private repository (atrium-wiki-mendoza).
        <br />
        Concierges sign commits with their own identity in the trailer.
        <br />
        The atrium-bot account ingests upstream sources (custodian statements, council minutes) on a schedule.
        <br />
        Run <span className="text-ink">git log</span> on your repository and the history matches this view exactly.
      </div>
    </div>
  );
}
