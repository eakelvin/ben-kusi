"use client";
import { useEffect, useRef, useState } from "react";
import { themes, DEFAULT_THEME, THEME_STORAGE_KEY, type ThemeId } from "@/lib/themes";

interface ThemeToggleProps {
  variant?: "icon" | "block";
  onPick?: () => void;
}

export function ThemeToggle({ variant = "icon", onPick }: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeId>(DEFAULT_THEME);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId | null;
      if (stored && themes.some(t => t.id === stored)) {
        setTheme(stored);
        document.documentElement.dataset.theme = stored;
      } else {
        document.documentElement.dataset.theme = DEFAULT_THEME;
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", handler);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("mousedown", handler);
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const apply = (id: ThemeId) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try { localStorage.setItem(THEME_STORAGE_KEY, id); } catch { /* ignore */ }
    setOpen(false);
    onPick?.();
  };

  if (variant === "block") {
    return (
      <div className="flex flex-col gap-1">
        <div className="px-3 pt-2 pb-1 text-xs font-mono" style={{ color: "var(--text-dim)" }}>
          THEME
        </div>
        {themes.map(t => (
          <ThemeRow key={t.id} t={t} active={theme === t.id} onClick={() => apply(t.id)} />
        ))}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Change theme"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className="w-9 h-9 inline-flex items-center justify-center rounded-lg transition-colors"
        style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="13.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="17.5" cy="10.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="8.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="6.5" cy="12.5" r="1.2" fill="currentColor" stroke="none" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.43-.18-.83-.44-1.12-.29-.29-.44-.65-.44-1.12 0-.93.75-1.69 1.69-1.69h1.99c3.06 0 5.55-2.49 5.55-5.55C22 6.4 17.5 2 12 2z" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-60 rounded-xl overflow-hidden z-50"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          }}>
          <div className="px-3 py-2 text-xs font-mono"
            style={{ color: "var(--text-dim)", borderBottom: "1px solid var(--border)" }}>
            THEME
          </div>
          <div className="py-1">
            {themes.map(t => (
              <ThemeRow key={t.id} t={t} active={theme === t.id} onClick={() => apply(t.id)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ThemeRow({
  t,
  active,
  onClick,
}: {
  t: (typeof themes)[number];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={active}
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2 text-left transition-colors"
      style={{
        background: active ? "var(--bg-3)" : "transparent",
        color: active ? "var(--text)" : "var(--text-muted)",
      }}>
      <span
        className="w-8 h-8 rounded-md shrink-0 relative overflow-hidden"
        style={{ background: t.preview.bg, border: "1px solid var(--border)" }}>
        <span
          className="absolute left-1 top-1 w-2 h-1 rounded-sm"
          style={{ background: t.preview.text, opacity: 0.7 }} />
        <span
          className="absolute right-1 bottom-1 w-3 h-3 rounded-full"
          style={{ background: t.preview.accent }} />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-sm" style={{ color: active ? "var(--text)" : "var(--text-muted)" }}>
          {t.label}
        </span>
        <span className="block text-xs font-mono" style={{ color: "var(--text-dim)" }}>
          {t.hint}
        </span>
      </span>
      {active && <span style={{ color: "var(--accent)" }}>✓</span>}
    </button>
  );
}
