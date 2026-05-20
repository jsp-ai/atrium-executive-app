"use client";

import Link from "next/link";
import { useState } from "react";
import { useToast } from "./Toast";

type FileRow = {
  id: string;
  name: string;
  size: string;
  uploaded: string;
  citedBy: number;
  preview: string;
  cites: string[];
};

export default function FilesList({
  files,
  accountSlug,
}: {
  files: FileRow[];
  accountSlug: string;
}) {
  const [open, setOpen] = useState<FileRow | null>(null);

  return (
    <>
      <ul className="divide-y divide-rule-soft border-t border-rule-soft">
        {files.map((f) => (
          <li
            key={f.id}
            className="grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_110px_130px_130px] gap-x-5 sm:gap-x-6 py-5 items-baseline"
          >
            <button
              onClick={() => setOpen(f)}
              className="font-display text-[15px] tracking-[-0.005em] text-ink text-left hover:text-copper transition-colors duration-150"
            >
              {f.name}
              <span className="block sm:hidden mt-1 font-sans text-[11px] font-mono text-mute">
                {f.size} &middot; {f.uploaded}
              </span>
            </button>
            <div className="hidden sm:block font-mono text-[12px] text-ink-soft">{f.size}</div>
            <div className="hidden sm:block font-mono text-[12px] text-mute">{f.uploaded}</div>
            <div className="text-right">
              <button
                onClick={() => setOpen(f)}
                className="text-[12px] text-copper border-b border-dotted border-copper hover:bg-copper hover:text-paper px-1 transition-colors duration-150"
              >
                {f.citedBy} {f.citedBy === 1 ? "page" : "pages"} &rarr;
              </button>
            </div>
          </li>
        ))}
      </ul>

      {open && (
        <FileModal
          file={open}
          accountSlug={accountSlug}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}

function FileModal({
  file,
  accountSlug,
  onClose,
}: {
  file: FileRow;
  accountSlug: string;
  onClose: () => void;
}) {
  const { push } = useToast();

  function download() {
    push({
      title: `${file.name} — download requested`,
      body: "A 15-minute signed URL will arrive in your email within seconds. The download counts toward your audit log.",
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={file.name}
    >
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" aria-hidden />
      <div
        className="relative bg-paper border border-rule max-w-[860px] w-full max-h-[88vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="px-9 py-6 border-b border-rule-soft flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="label">Document</div>
            <div className="mt-2 font-display text-[20px] tracking-[-0.005em] text-ink leading-tight">
              {file.name}
            </div>
            <div className="mt-1 text-[11px] tracking-[0.04em] text-mute font-mono">
              {file.size} &middot; uploaded {file.uploaded} &middot; cited by {file.citedBy} {file.citedBy === 1 ? "page" : "pages"}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 h-9 w-9 rounded-full border border-rule flex items-center justify-center text-mute hover:text-ink hover:border-ink transition-colors duration-150"
          >
            ×
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-9 py-8 bg-paper-card">
          <div className="label-mute mb-3">Preview · OCR transcription</div>
          <p className="text-[15px] leading-[1.78] text-ink-soft font-display italic max-w-[700px]">
            {file.preview}
          </p>

          <div className="mt-12 pt-6 border-t border-rule-soft">
            <div className="label-mute mb-4">Cited in your wiki</div>
            <ul className="space-y-3">
              {file.cites.map((c) => (
                <li key={c}>
                  <Link
                    href={`/portal/${accountSlug}/memory/${c}`}
                    onClick={onClose}
                    className="text-[14px] text-ink-soft hover:text-copper border-b border-dotted border-mute-soft hover:border-copper transition-colors duration-150"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-9 py-5 border-t border-rule-soft flex items-center justify-between bg-paper">
          <div className="text-[10px] tracking-[0.22em] uppercase text-mute font-mono">
            Cloudflare R2 · signed URL · 15-min expiry
          </div>
          <div className="flex gap-3">
            <button
              onClick={download}
              className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-paper hover:bg-ink hover:border-ink border border-rule px-4 py-2 transition-all duration-150"
            >
              Download original
            </button>
            <button
              onClick={onClose}
              className="text-[10px] uppercase tracking-[0.22em] text-paper bg-ink border border-ink px-4 py-2 hover:bg-copper hover:border-copper transition-all duration-150"
            >
              Close
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
