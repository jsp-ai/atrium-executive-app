"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/(marketing)/inquiry/actions";

const initial: InquiryState = { status: "idle" };

export default function InquiryForm({ source = "site" }: { source?: string }) {
  const [state, action, pending] = useActionState(submitInquiry, initial);

  if (state.status === "ok") {
    return (
      <div className="border-l-2 border-copper pl-7 py-2 max-w-[620px]">
        <p className="font-display italic text-[18px] leading-[1.55] text-ink">
          Received. A partner will reply personally within two working days, from a Manila number or a quiet email address.
        </p>
        <p className="mt-5 font-display italic text-[16px] leading-[1.55] text-ink-soft">
          If for any reason there is no fit, you will hear that in writing as well — promptly, with the specific reason.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-9 max-w-[620px]">
      <input type="hidden" name="source" value={source} />

      <Field
        name="name"
        label="Your name"
      />

      <Field
        name="role"
        label="Your role"
        hint="Principal · Heir · Family-office director · Advisor"
      />

      <Field
        name="house"
        label="The family or business this is about"
      />

      <Field
        name="location"
        label="Where you are based"
        hint="e.g. Manila · Singapore · Hong Kong · Jakarta"
      />

      <FieldArea
        name="shape"
        label="In your own words, what brings you here"
        placeholder="Our founder is stepping back from the day-to-day and most of what he knows lives only in his head."
      />

      <Field
        name="referral"
        label="Who told you about Atrium"
        optional
      />

      <Field
        name="contact"
        label="The best way for us to reach you"
        hint="Email; a phone number if you prefer a call"
      />

      {state.status === "error" && (
        <p className="text-[13px] text-copper font-display italic">{state.message}</p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={pending}
          className="text-[11px] uppercase tracking-[0.22em] text-mute hover:text-paper hover:bg-ink hover:border-ink border border-ink px-7 py-3.5 transition-all duration-150 disabled:opacity-40 disabled:cursor-wait"
        >
          {pending ? "Sending…" : "Request a conversation"}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  hint,
  optional,
}: {
  name: string;
  label: string;
  hint?: string;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <div className="label-mute mb-2">
        {label}
        {optional && <span className="ml-2 normal-case tracking-normal text-[10px] text-mute-soft italic">— optional</span>}
      </div>
      <input
        type="text"
        name={name}
        className="w-full bg-transparent border-0 border-b border-rule focus:border-ink outline-none py-2 font-display text-[18px] text-ink placeholder:text-mute-soft transition-colors duration-150"
      />
      {hint && <div className="mt-1.5 text-[11px] text-mute-soft italic font-display">{hint}</div>}
    </label>
  );
}

function FieldArea({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <div className="label-mute mb-2">{label}</div>
      <textarea
        name={name}
        rows={6}
        placeholder={placeholder}
        className="w-full bg-transparent border border-rule focus:border-ink outline-none p-4 font-display text-[16px] leading-[1.55] text-ink placeholder:text-mute-soft transition-colors duration-150 resize-none"
      />
    </label>
  );
}
