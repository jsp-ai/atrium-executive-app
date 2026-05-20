import Link from "next/link";
import InquiryForm from "@/components/marketing/InquiryForm";

export const metadata = {
  title: "The practice · Atrium",
  description: "A diagnostic first. A productized engagement second. A monthly partnership third. No multi-quarter implementations.",
};

export default function PracticePage() {
  const tiers = [
    {
      tag: "Atrium Install",
      cadence: "One-time · ~6 weeks",
      title: "The build",
      body: "Set up the stack. Write the schema. Train the executive team. Onboard the first three departments. Six weeks, no slippage.",
    },
    {
      tag: "Atrium Operate",
      cadence: "Monthly retainer",
      title: "The partnership",
      body: "Schema maintenance. Lint reviews. Ingest service operation. Executive coaching. Monthly synthesis pass. The family reads and asks; we tend the memory.",
    },
    {
      tag: "Atrium Custom",
      cadence: "Project-based",
      title: "The bespoke",
      body: "Department-specific schemas. Integrations with specific operational systems. Training cohorts.",
    },
  ];

  return (
    <div className="px-12 py-28 max-w-[1100px]">
      <div className="label">Part three</div>
      <h1 className="mt-6 font-display text-[56px] leading-[1.04] tracking-[-0.015em] font-normal text-ink max-w-[800px]">
        How we work.
      </h1>
      <p className="mt-8 font-display italic text-[19px] leading-[1.55] text-ink-soft max-w-[680px]">
        A diagnostic first. A productized engagement second. A monthly partnership third. No multi-quarter implementations.
      </p>

      <section className="mt-24">
        <div className="label-mute">Three tiers</div>
        <h2 className="mt-3 font-display text-[32px] tracking-[-0.005em] font-normal text-ink">
          Engagement model.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px]">
          {tiers.map((t) => (
            <div key={t.tag} className="border-t border-ink pt-6">
              <div className="label">{t.tag}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-mute mt-1">{t.cadence}</div>
              <h3 className="mt-6 font-display text-[24px] tracking-[-0.005em] text-ink">{t.title}</h3>
              <p className="mt-4 text-[14px] leading-[1.7] text-ink-soft">{t.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-[14px] text-mute italic font-display max-w-[640px]">
          Pricing is discussed in the diagnostic. It is not published.
        </p>
      </section>

      <section className="mt-24 max-w-[860px]">
        <div className="label-mute">The entry point</div>
        <h2 className="mt-3 font-display text-[32px] tracking-[-0.005em] font-normal text-ink">
          Start with a one-week diagnostic.
        </h2>
        <ul className="mt-10 space-y-5 text-[16px] leading-[1.65] text-ink max-w-[720px]">
          <li className="flex gap-4"><span className="text-copper pt-1">—</span>An integration map against your existing operational stack.</li>
          <li className="flex gap-4"><span className="text-copper pt-1">—</span>A schema sketch tuned to how your family actually operates.</li>
          <li className="flex gap-4"><span className="text-copper pt-1">—</span>Three highest-leverage executive-layer interventions for your specific situation.</li>
          <li className="flex gap-4"><span className="text-copper pt-1">—</span>Pricing for a full engagement.</li>
        </ul>
        <blockquote className="pull mt-12 max-w-[680px]">
          Fixed fee. Convertible against the full engagement. No commitment beyond the week.
        </blockquote>
      </section>

      <section className="mt-24 max-w-[700px] border-t border-rule pt-14">
        <div className="label">The ask</div>
        <h2 className="mt-6 font-display text-[36px] leading-[1.08] tracking-[-0.01em] font-normal text-ink">
          A 60-minute conversation.
        </h2>
        <p className="mt-4 font-display italic text-[16px] text-mute max-w-[600px]">
          With the principal, an heir, or the family-office director.
        </p>

        <div className="mt-12">
          <InquiryForm source="practice" />
        </div>
      </section>

      <div className="mt-24 border-t border-rule pt-10">
        <p className="font-display italic text-[16px] text-mute">
          The 100-page Implementation Manual is{" "}
          <Link
            href="/manual"
            className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150"
          >
            available to qualified inquiries
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
