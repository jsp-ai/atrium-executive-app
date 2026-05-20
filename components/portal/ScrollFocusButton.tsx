"use client";

export default function ScrollFocusButton({
  targetId,
  label,
  className,
  preset,
}: {
  targetId: string;
  label: string;
  className?: string;
  preset?: string;
}) {
  function go() {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
      el.focus();
      if (preset && !el.value) {
        const native = Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype,
          "value",
        )?.set;
        native?.call(el, preset);
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }
    } else {
      el.focus({ preventScroll: true });
    }
  }

  return (
    <button
      onClick={go}
      className={
        className ??
        "text-[10px] uppercase tracking-[0.22em] text-mute border border-rule px-4 py-2 hover:text-paper hover:bg-ink hover:border-ink transition-all duration-150"
      }
    >
      {label}
    </button>
  );
}
