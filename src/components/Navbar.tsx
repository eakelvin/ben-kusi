"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const showChrome = scrolled || open;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: showChrome ? "rgba(12,12,15,0.85)" : "transparent",
        backdropFilter: showChrome ? "blur(16px)" : "none",
        borderBottom: showChrome ? "1px solid var(--border)" : "1px solid transparent",
      }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm" style={{ color: "var(--accent-2)" }}>
          AnalyzeWithBenjamin<span className="cursor-blink" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: active ? "var(--text)" : "var(--text-muted)" }}>
                {l.label}
              </Link>
            );
          })}
          <a href="https://cvdesignr.com/p/6a0da679820ba" target="_blank" rel="noopener noreferrer"
            className="text-xs px-4 py-2 rounded-lg font-mono transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}>
            Resume ↗
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-lg transition-colors"
          style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
          {open ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${open ? "max-h-96" : "max-h-0"}`}
        style={{ borderTop: open ? "1px solid var(--border)" : "1px solid transparent" }}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm transition-colors"
                style={{
                  color: active ? "var(--text)" : "var(--text-muted)",
                  background: active ? "var(--card)" : "transparent",
                }}>
                {l.label}
              </Link>
            );
          })}
          <a href="#"
            onClick={() => setOpen(false)}
            className="mt-2 text-xs px-4 py-2.5 rounded-lg font-mono text-center transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}>
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
