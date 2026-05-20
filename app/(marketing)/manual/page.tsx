import InquiryForm from "@/components/marketing/InquiryForm";

export const metadata = {
  title: "The Implementation Manual · Atrium",
  description: "A 100-page working artifact of a system in production use. Released by request to qualified inquiries.",
};

export default function ManualPage() {
  return (
    <div className="px-12 py-28 max-w-[820px]">
      <div className="label">Where Atrium is today</div>
      <h1 className="mt-6 font-display text-[52px] leading-[1.06] tracking-[-0.015em] font-normal text-ink">
        The Implementation Manual.
      </h1>
      <p className="mt-8 font-display italic text-[19px] leading-[1.55] text-ink-soft max-w-[700px]">
        A 100-page working artifact of a system in production use.
      </p>

      <section className="mt-20 max-w-[720px] space-y-7 text-[16px] leading-[1.75] text-ink-soft">
        <p>
          The Manual documents the reference implementation used to set up an Atrium engagement on a macOS workstation. Homebrew, Marp CLI, Google Chrome for slide rendering, GitHub Desktop with a private repository, Obsidian as the markdown editor, Claude Code as the agent.
        </p>
        <p>
          It includes the project schema (an LLM Wiki Pattern calibrated to client-engagement scope), the folder structure, the workflow loop, the troubleshooting table, and the file templates.
        </p>
        <p>
          We release it on request to qualified inquiries. It is not the practice. It is a working artifact of the practice — the kind of document a family&rsquo;s technical advisor reads to verify the architecture is real.
        </p>
      </section>

      <section className="mt-20 border-t border-rule pt-14">
        <h2 className="font-display text-[28px] leading-[1.12] tracking-[-0.005em] font-normal text-ink">
          Request the manual.
        </h2>
        <p className="mt-4 font-display italic text-[15px] text-mute max-w-[600px]">
          A few quiet lines is enough. We will reply within two working days.
        </p>

        <div className="mt-12">
          <InquiryForm source="manual" />
        </div>
      </section>
    </div>
  );
}
