"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Toast = {
  id: number;
  title: string;
  body?: string;
};

type ToastContextValue = {
  push: (t: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

let toastSeq = 0;

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    // Graceful fallback so component doesn't crash if used outside the provider
    return { push: () => {} };
  }
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timeouts = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const push = useCallback((t: Omit<Toast, "id">) => {
    const id = ++toastSeq;
    setToasts((prev) => [...prev, { ...t, id }]);
    const timer = setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
      timeouts.current.delete(id);
    }, 5000);
    timeouts.current.set(id, timer);
  }, []);

  const dismiss = useCallback((id: number) => {
    const timer = timeouts.current.get(id);
    if (timer) clearTimeout(timer);
    timeouts.current.delete(id);
    setToasts((prev) => prev.filter((x) => x.id !== id));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => {
    for (const t of timeouts.current.values()) clearTimeout(t);
    timeouts.current.clear();
  }, []);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-[380px] pointer-events-none"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className="pointer-events-auto bg-paper border border-ink shadow-[0_8px_28px_rgba(0,0,0,0.12)] px-5 py-4 flex items-start gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="font-display text-[14px] tracking-[-0.005em] text-ink leading-tight">
                {t.title}
              </div>
              {t.body && (
                <div className="mt-1.5 text-[12.5px] leading-[1.5] text-mute font-display italic">
                  {t.body}
                </div>
              )}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss"
              className="text-mute hover:text-ink text-[16px] shrink-0 -mt-1"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
