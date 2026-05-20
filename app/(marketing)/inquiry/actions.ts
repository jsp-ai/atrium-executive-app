"use server";

import fs from "node:fs/promises";
import path from "node:path";

export type InquiryState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "ok" };

const FIELDS = [
  "name",
  "role",
  "house",
  "location",
  "shape",
  "referral",
  "contact",
] as const;

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const data: Record<string, string> = {};
  for (const f of FIELDS) {
    data[f] = String(formData.get(f) ?? "").trim();
  }

  if (!data.name || !data.shape || !data.contact) {
    return {
      status: "error",
      message: "Three fields are required: your name, the shape of the situation, and a contact for a reply.",
    };
  }

  const source = String(formData.get("source") ?? "site");
  const submittedAt = new Date().toISOString();
  const record = { submittedAt, source, ...data };

  const logDir = path.join(process.cwd(), ".inquiries");
  try {
    await fs.mkdir(logDir, { recursive: true });
    const filename = `${submittedAt.replace(/[:.]/g, "-")}-${slugify(data.name)}.json`;
    await fs.writeFile(path.join(logDir, filename), JSON.stringify(record, null, 2), "utf8");
  } catch (err) {
    console.error("[inquiry] log write failed", err);
  }

  console.log("[inquiry] received", { from: data.name, source, contact: data.contact });

  return { status: "ok" };
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "anon";
}
