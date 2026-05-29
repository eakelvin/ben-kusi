"use client";
import { useEffect, useState } from "react";

const roles = ["Machine Learning Engineer", "Data Scientist", "NLP Researcher", "Statistical Modeler"];

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
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-mono"
              style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", color: "var(--green)" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--green)" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "var(--green)" }} />
              </span>
              Available for opportunities
            </div>

            <h1 className="font-display text-5xl lg:text-7xl mb-4 leading-[1.05]" style={{ color: "var(--text)" }}>
              CodeWith<br />
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
              <a href="#projects"
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--accent)", color: "#fff" }}>
                View Projects
              </a>
              <a href="#contact"
                className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "var(--accent)"; (e.target as HTMLElement).style.color = "var(--text)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "var(--border)"; (e.target as HTMLElement).style.color = "var(--text-muted)"; }}>
                Get in touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
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
            </div>
          </div>

          {/* Right: Visual terminal card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden" style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "0 0 60px rgba(124,106,247,0.1)"
            }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-3)" }}>
                <span className="w-3 h-3 rounded-full" style={{ background: "var(--rose)" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "var(--amber)" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "var(--green)" }} />
                <span className="ml-3 text-xs font-mono" style={{ color: "var(--text-dim)" }}>model_eval.py</span>
              </div>
              <div className="p-6 font-mono text-xs leading-6" style={{ color: "var(--text-muted)" }}>
                <div><span style={{ color: "var(--accent-2)" }}>import</span> <span style={{ color: "var(--cyan)" }}>pandas</span> as pd</div>
                <div><span style={{ color: "var(--accent-2)" }}>from</span> <span style={{ color: "var(--cyan)" }}>sklearn.ensemble</span> <span style={{ color: "var(--accent-2)" }}>import</span> RandomForestClassifier</div>
                <div className="mt-3"><span style={{ color: "var(--text-dim)" }}># Load & preprocess</span></div>
                <div>df = pd.read_parquet(<span style={{ color: "var(--green)" }}>&apos;claims_2024.parquet&apos;</span>)</div>
                <div>X, y = df.drop(<span style={{ color: "var(--green)" }}>&apos;fraud&apos;</span>, axis=<span style={{ color: "var(--amber)" }}>1</span>), df[<span style={{ color: "var(--green)" }}>&apos;fraud&apos;</span>]</div>
                <div className="mt-3">model = RandomForestClassifier(</div>
                <div className="ml-4">n_estimators=<span style={{ color: "var(--amber)" }}>500</span>,</div>
                <div className="ml-4">max_depth=<span style={{ color: "var(--amber)" }}>12</span>,</div>
                <div className="ml-4">class_weight=<span style={{ color: "var(--green)" }}>&apos;balanced&apos;</span></div>
                <div>)</div>
                <div className="mt-3">model.fit(X_train, y_train)</div>
                <div className="mt-4 p-3 rounded-lg" style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.15)" }}>
                  <div style={{ color: "var(--green)" }}>✓ Training complete</div>
                  <div>AUC-ROC: <span style={{ color: "var(--green)" }}>0.9847</span></div>
                  <div>F1 Score: <span style={{ color: "var(--green)" }}>0.9312</span></div>
                  <div>Precision: <span style={{ color: "var(--green)" }}>0.9621</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
