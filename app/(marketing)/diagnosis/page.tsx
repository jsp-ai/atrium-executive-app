import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "The diagnosis · Atrium",
  description: "Why your executive AI has plateaued — and why the answer is architectural, not a better prompt.",
};

export default function DiagnosisPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container width="text">
        <div className="label">Part one</div>
        <h1 className="mt-6 font-display text-[40px] sm:text-[52px] lg:text-[56px] leading-[1.06] tracking-[-0.015em] font-normal text-ink">
          The diagnosis
        </h1>
        <p className="mt-7 font-display italic text-[18px] sm:text-[19px] leading-[1.55] text-ink-soft">
          Why your executive AI has plateaued — and why the answer is architectural, not a better prompt.
        </p>

        <section className="mt-16 sm:mt-20">
          <h2 className="font-display text-[26px] sm:text-[32px] lg:text-[34px] leading-[1.1] tracking-[-0.005em] font-normal text-ink">
            Your operational AI feels better. Your executive AI doesn&rsquo;t.
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-ink-soft">
            <p>Sales calls get summarized. Invoices get parsed. Tickets get triaged. The frontline is measurably better.</p>
            <p>At the principal&rsquo;s desk, the answers feel generic. The dashboards feel decorative. The system forgets what you told it last week.</p>
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="label-mute">The framing</div>
          <h2 className="mt-3 font-display text-[26px] sm:text-[32px] lg:text-[34px] leading-[1.1] tracking-[-0.005em] font-normal text-ink">
            The altitude inversion.
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-[1.75] text-ink-soft">
            <p>At the operational layer the native data is unstructured. AI&rsquo;s job is compression — language into rows.</p>
            <p>At the executive layer the native data is over-structured. AI&rsquo;s job is expansion — rows into narrative with context and decision rationale.</p>
            <p className="text-ink">Same model. Opposite vector. Deploying a compression-shaped tool at the executive layer is what generates the &ldquo;feels generic&rdquo; complaint.</p>
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="label-mute">What inverts</div>
          <h2 className="mt-3 font-display text-[26px] sm:text-[32px] lg:text-[34px] leading-[1.1] tracking-[-0.005em] font-normal text-ink">
            Two regimes. Opposite architectures.
          </h2>

          <div className="mt-10 -mx-6 sm:mx-0 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse px-6 sm:px-0">
              <thead>
                <tr className="border-b border-ink">
                  <th className="text-left py-4 pl-6 sm:pl-0"></th>
                  <th className="text-left py-4 pl-6 label">Operational layer</th>
                  <th className="text-left py-4 pl-6 pr-6 sm:pr-0 label">Executive layer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Native state of the data", "Unstructured", "Over-structured"],
                  ["AI's job", "Compression", "Expansion"],
                  ["Vector", "Language → rows", "Rows → narrative"],
                  ["Friction removed", "Data-entry tax", "Context-reconstruction tax"],
                  ["Failure if mis-deployed", "Time wasted on data entry", "Time wasted on context-free dashboards"],
                ].map(([heading, op, exec]) => (
                  <tr key={heading} className="border-b border-rule">
                    <td className="py-5 pr-6 pl-6 sm:pl-0 label-mute align-top w-[170px]">{heading}</td>
                    <td className="py-5 pl-6 pr-6 text-[15px] text-ink align-top">{op}</td>
                    <td className="py-5 pl-6 pr-6 sm:pr-0 text-[15px] text-ink align-top">{exec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="label-mute">The plateau</div>
          <h2 className="mt-3 font-display text-[26px] sm:text-[32px] lg:text-[34px] leading-[1.1] tracking-[-0.005em] font-normal text-ink">
            Why generic LLMs plateau.
          </h2>
          <ul className="mt-8 space-y-5 text-[16px] leading-[1.65] text-ink">
            <li className="flex gap-4"><span className="text-copper pt-1">—</span>No institutional memory across conversations or across generations.</li>
            <li className="flex gap-4"><span className="text-copper pt-1">—</span>No schema for this family&rsquo;s operating reality.</li>
            <li className="flex gap-4"><span className="text-copper pt-1">—</span>No engine for composing decision rationale across sources.</li>
          </ul>
          <blockquote className="pull mt-10">
            These aren&rsquo;t patchable bugs. They are properties of an architecture built for the wrong altitude.
          </blockquote>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="label-mute">The baseline cost</div>
          <h2 className="mt-3 font-display text-[26px] sm:text-[32px] lg:text-[34px] leading-[1.1] tracking-[-0.005em] font-normal text-ink">
            What this is costing you.
          </h2>
          <ul className="mt-8 space-y-6 text-[16px] leading-[1.65] text-ink-soft">
            <li className="flex gap-4"><span className="text-copper pt-1">—</span>When the founder&rsquo;s longest-tenured advisor retires, half the institutional knowledge of the family&rsquo;s financial architecture retires with him.</li>
            <li className="flex gap-4"><span className="text-copper pt-1">—</span>Every family-council meeting reconstructs context from scratch.</li>
            <li className="flex gap-4"><span className="text-copper pt-1">—</span>Every succession event retraces decisions whose rationale lives in the founder&rsquo;s head.</li>
            <li className="flex gap-4"><span className="text-copper pt-1">—</span>Every generational handover exposes the gap between <em className="font-display">what the family did</em> and <em className="font-display">why the principal decided it</em>.</li>
          </ul>
          <p className="mt-10 font-display italic text-[14px] text-mute">
            You are paying these costs today. They are invisible because they are baseline.
          </p>
        </section>

        <div className="mt-16 sm:mt-20 border-t border-rule pt-10">
          <p className="font-display italic text-[18px] text-ink-soft">
            If this matches what you see at your desk —{" "}
            <Link
              href="/architecture"
              className="text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper transition-colors duration-150"
            >
              continue to the answer
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
