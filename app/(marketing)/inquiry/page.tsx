import InquiryForm from "@/components/marketing/InquiryForm";

export const metadata = {
  title: "Request a conversation · Atrium",
  description: "A 60-minute conversation with the principal, an heir, or the family-office director.",
};

export default async function InquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  const { source } = await searchParams;
  return (
    <div className="px-12 py-28 max-w-[820px]">
      <div className="label">The ask</div>
      <h1 className="mt-6 font-display text-[48px] leading-[1.06] tracking-[-0.01em] font-normal text-ink max-w-[700px]">
        A 60-minute conversation.
      </h1>
      <p className="mt-6 font-display italic text-[18px] leading-[1.5] text-ink-soft max-w-[620px]">
        With the principal, an heir, or the family-office director. If there is fit, we move to the one-week diagnostic. If there is not, we will tell you so in writing — including the specific reason.
      </p>

      <div className="mt-16">
        <InquiryForm source={source ?? "inquiry"} />
      </div>
    </div>
  );
}
