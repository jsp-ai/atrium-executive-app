import { ACCOUNT, FILES } from "@/lib/mock/mendoza";
import FilesList from "@/components/portal/FilesList";

export default function Files() {
  return (
    <div className="px-12 py-12 max-w-[920px]">
      <div className="label">Memory &middot; Files</div>
      <h1 className="mt-3 font-display text-[34px] leading-[1.12] tracking-[-0.01em] font-normal text-ink">
        Source documents.
      </h1>
      <p className="mt-4 font-display italic text-[16px] leading-[1.55] text-ink-soft max-w-[640px]">
        The raw documents your concierges work from &mdash; counsel memoranda, trustee letters, custodian statements, founder&rsquo;s notes. Each file is tied back to the wiki pages that cite it.
      </p>

      <div className="mt-12 border-t border-ink">
        <div className="grid grid-cols-[1fr_120px_140px_140px] gap-6 py-3 text-[10px] tracking-[0.18em] uppercase text-mute">
          <div>Document</div>
          <div>Size</div>
          <div>Uploaded</div>
          <div className="text-right">Cited by</div>
        </div>

        <FilesList files={FILES} accountSlug={ACCOUNT.slug} />
      </div>

      <div className="mt-16 pt-8 border-t border-rule text-[11px] text-mute font-mono leading-[1.7]">
        <div className="label-mute mb-3 font-sans">What you are looking at</div>
        Files are stored in your private Cloudflare R2 bucket, scoped to your account.
        <br />
        Signed URLs are 15-minute expiry &middot; bucket versioning retains 90 days.
        <br />
        Uploads in Phase 2: your concierge attaches a document and an OCR pass extracts the citation-ready text into the wiki.
      </div>
    </div>
  );
}
