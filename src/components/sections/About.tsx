export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 80% 50%, rgba(124,106,247,0.06) 0%, transparent 60%)"
      }} />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="font-mono text-xs mb-3" style={{ color: "var(--accent)" }}>01 / ABOUT</div>
          <h2 className="font-display text-4xl lg:text-5xl">The story so far</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-3 space-y-5">
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I&apos;m a data scientist with a deep belief that <span style={{ color: "var(--text)" }}>good models should be explainable, fair, and actually deployed</span> — not stuck in Jupyter notebooks. I started my journey studying applied mathematics at UC Berkeley, where I fell in love with the intersection of statistics and computation.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Over five years, I&apos;ve had the privilege of working on problems that matter: <span style={{ color: "var(--text)" }}>predicting disease risk for millions of patients, stopping financial fraud in milliseconds, and helping companies understand their carbon footprint</span> down to the building level.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I care deeply about the full ML lifecycle — from data quality and feature engineering to monitoring model drift in production. I believe the unglamorous parts of data science are often the most impactful.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Outside of work, I&apos;m contributing to open-source ML tooling, co-authoring a chapter in an upcoming O&apos;Reilly book on production ML, and learning to make very mediocre sourdough.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {/* Education */}
            <div className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="text-xs font-mono mb-4" style={{ color: "var(--accent)" }}>EDUCATION</div>
              <div className="space-y-4">
                {[
                  {
                    degree: "M.S. Statistics",
                    school: "Stanford University",
                    year: "2019",
                    note: "Concentration: ML & Data Science"
                  },
                  {
                    degree: "B.S. Applied Mathematics",
                    school: "UC Berkeley",
                    year: "2017",
                    note: "Minor: Computer Science"
                  },
                ].map(e => (
                  <div key={e.degree} className="flex gap-3">
                    <div className="w-1 rounded-full shrink-0 mt-1" style={{ background: "var(--accent)", height: "calc(100% - 4px)" }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{e.degree}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--accent-2)" }}>{e.school}</div>
                      <div className="text-xs mt-0.5 font-mono" style={{ color: "var(--text-dim)" }}>{e.year} · {e.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="text-xs font-mono mb-4" style={{ color: "var(--cyan)" }}>PUBLICATIONS</div>
              <div className="space-y-3">
                {[
                  { title: "Spatiotemporal Anomaly Detection in Industrial IoT", venue: "NeurIPS 2023", cited: "142 citations" },
                  { title: "Causal Graph Networks for Financial Fraud", venue: "KDD 2022", cited: "89 citations" },
                  { title: "Federated Learning for Clinical NLP", venue: "EMNLP 2021", cited: "201 citations" },
                  { title: "Uncertainty Quantification in Ensemble Models", venue: "ICML 2020", cited: "67 citations" },
                ].map(p => (
                  <div key={p.title} className="pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
                    <div className="text-xs font-medium leading-snug" style={{ color: "var(--text)" }}>{p.title}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-mono" style={{ color: "var(--accent-2)" }}>{p.venue}</span>
                      <span className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>· {p.cited}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
