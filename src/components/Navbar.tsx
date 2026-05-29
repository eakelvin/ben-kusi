"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(12,12,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm" style={{ color: "var(--accent-2)" }}>
          CodeWithBenjamin<span className="cursor-blink" />
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
          <a href="/resume.pdf"
            className="text-xs px-4 py-2 rounded-lg font-mono transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}>
            Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
