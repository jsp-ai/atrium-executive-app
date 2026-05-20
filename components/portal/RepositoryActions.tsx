"use client";

import { useState } from "react";
import { useToast } from "./Toast";

export default function RepositoryActions() {
  const [snapshotPending, setSnapshotPending] = useState(false);
  const { push } = useToast();

  function snapshot() {
    if (snapshotPending) return;
    setSnapshotPending(true);
    push({
      title: "Snapshot queued",
      body: "Your concierge will email a download link within the hour. The snapshot includes every page in your wiki at this exact commit.",
    });
    setTimeout(() => setSnapshotPending(false), 4000);
  }

  function viewOnGitHub() {
    push({
      title: "GitHub access opens via your concierge",
      body: "For security, repository access is granted by your concierge directly through GitHub's invitation flow. Maria will send a fresh invite to the email on file.",
    });
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={snapshot}
        disabled={snapshotPending}
        className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-paper hover:bg-ink hover:border-ink border border-rule px-4 py-2 transition-all duration-150 disabled:opacity-50 disabled:cursor-wait"
      >
        {snapshotPending ? "Queued…" : "Download a snapshot"}
      </button>
      <button
        onClick={viewOnGitHub}
        className="text-[10px] uppercase tracking-[0.22em] text-mute hover:text-paper hover:bg-ink hover:border-ink border border-rule px-4 py-2 transition-all duration-150"
      >
        Request GitHub access
      </button>
    </div>
  );
}
