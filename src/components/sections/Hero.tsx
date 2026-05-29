"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const roles = ["Data Scientist", "Machine Learning Engineer", "NLP Researcher", "Statistical Modeler", "Data Engineer", "Data Consultant", "AI Integration", "IT Infrastructure Support", "AI Researcher"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(124,106,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,106,247,0.04) 1px, transparent 1px)`,
        backgroundSize: "48px 48px"
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full" style={{
        background: "radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)",
        filter: "blur(40px)"
      }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full" style={{
        background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
        filter: "blur(40px)"
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Status badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", color: "var(--green)" }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--green)" }} />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "var(--green)" }} />
                </span>
                Available for opportunities
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)", color: "var(--cyan)" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Paris, France
              </div>
            </div>

            <h1 className="font-display text-5xl lg:text-7xl mb-4 leading-[1.05]" style={{ color: "var(--text)" }}>
              AnalyzeWith<br />
              <span style={{ color: "var(--accent-2)" }}>Benjamin</span>
            </h1>

            <div className="h-8 mb-6 flex items-center">
              <span className="text-lg font-mono" style={{ color: "var(--text-muted)" }}>
                {displayed}
                <span className="cursor-blink" />
              </span>
            </div>

            <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "var(--text-muted)" }}>
              I turn messy, high-dimensional data into clear decisions.
              5+ years building production ML systems across healthcare, fintech, and climate tech.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/projects"
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--accent)", color: "#fff" }}>
                View Projects
              </Link>
              <Link href="/contact"
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                Get in touch
              </Link>
            </div>

            {/* Stats */}
            {/* <div className="flex flex-wrap gap-x-8 gap-y-5 mt-14 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { val: "5+", label: "Years exp." },
                { val: "23", label: "Projects shipped" },
                { val: "4", label: "Papers published" },
                { val: "12K+", label: "GitHub stars" },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-mono font-medium" style={{ color: "var(--accent-2)" }}>{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{s.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right: Portrait image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]" style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 60px rgba(124,106,247,0.1)"
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ben.jpeg"
                alt="Benjamin Kusi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
