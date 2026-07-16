"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionHead({
  label,
  title,
  subtitle,
  href,
  cta,
}: {
  label: string;
  title: string;
  subtitle?: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
      <div className="max-w-2xl">
        <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          {label}
        </div>
        <h2 className="font-display text-4xl lg:text-5xl leading-tight">{title}</h2>
        {subtitle && (
          <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {subtitle}
          </p>
        )}
      </div>
      <Link
        href={href}
        className="home-cta shrink-0 self-start lg:self-auto inline-flex items-center gap-2 text-sm font-mono px-4 py-2.5 rounded-lg transition-all duration-200"
        style={{
          color: "var(--accent-2)",
          border: "1px solid var(--border)",
          background: "rgba(124,106,247,0.06)",
        }}
      >
        {cta}
        <span className="home-cta-arrow transition-transform duration-200" aria-hidden>
          →
        </span>
      </Link>
    </div>
  );
}

const experiences = [
  {
    period: "Now",
    role: "AI Research Engineer Intern",
    place: "Institut de Chimie Physique · CNRS / Paris-Saclay",
    detail:
      "Applying machine learning and Python to improve computational efficiency in quantum chemistry research.",
  },
  {
    period: "Prior",
    role: "IT Infrastructure & Data",
    place: "Multi-department operations",
    detail:
      "Coordinated IT for 100+ users, managed networks and upgrades, and built dashboards that drove procurement decisions.",
  },
];

const skillGroups = [
  { label: "ML & AI", items: ["PyTorch", "Scikit-learn", "NLP", "Classification"] },
  { label: "Data", items: ["Python", "SQL", "Pandas", "PostgreSQL"] },
  { label: "BI & Viz", items: ["Power BI", "Tableau", "Plotly"] },
  { label: "Cloud", items: ["AWS SageMaker", "Docker", "GitHub Actions"] },
];

const projects = [
  {
    num: "01",
    tag: "Quantum Chemistry",
    color: "var(--cyan)",
    title: "Predicting Electron Repulsion Integrals",
    blurb: "Neural net accelerating Hartree–Fock calculations with near chemical accuracy.",
  },
  {
    num: "02",
    tag: "Data Analytics",
    color: "var(--amber)",
    title: "Telecom Customer Churn Prediction",
    blurb: "Models to understand and reduce churn in a competitive telecom market.",
  },
  {
    num: "03",
    tag: "NLP",
    color: "var(--rose)",
    title: "FinSentiment",
    blurb: "Financial sentiment analysis on earnings-call transcripts with FinBERT.",
  },
];

const posts = [
  {
    tag: "MLOps",
    color: "var(--accent)",
    title: "Why most ML projects never reach production",
    meta: "May 2026 · 8 min",
  },
  {
    tag: "Machine Learning",
    color: "var(--cyan)",
    title: "Feature engineering: the underrated superpower",
    meta: "Apr 2026 · 6 min",
  },
  {
    tag: "Data Viz",
    color: "var(--rose)",
    title: "Data escalation for industrial facilities",
    meta: "Dec 2025 · 9 min",
  },
];

export function HomeSections() {
  return (
    <div className="home-sections">
      {/* About */}
      <section className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 85% 40%, rgba(124,106,247,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <Reveal>
            <SectionHead
              label="01 / ABOUT"
              title="Who I am"
              href="/about"
              cta="More about me"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-5">
                <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Data-driven IT professional focused on analytics, machine learning, and
                  infrastructure — turning complex data into decisions that move the business.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  Based in Paris as a Research Engineer Intern at Institut de Chimie Physique
                  (Université Paris-Saclay / CNRS). Available for CDI roles across Europe in Data
                  Science, Business Analytics, or IT Infrastructure.
                </p>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { k: "Focus", v: "ML · Analytics · Infra" },
                  { k: "Based in", v: "Paris, France" },
                  { k: "Education", v: "MSc Data Science" },
                  { k: "Open to", v: "CDI · Europe" },
                ].map((item) => (
                  <div key={item.k} className="py-1">
                    <div className="text-xs font-mono mb-1.5" style={{ color: "var(--text-dim)" }}>
                      {item.k}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="py-28 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,72rem)] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Reveal>
            <SectionHead
              label="02 / EXPERIENCE"
              title="Where I&apos;ve worked"
              subtitle="A short snapshot — roles, impact, and details live on the experience page."
              href="/experience"
              cta="View experience"
            />
          </Reveal>
          <div className="relative">
            <div
              className="absolute left-[11px] top-3 bottom-3 w-px hidden sm:block"
              style={{
                background: "linear-gradient(to bottom, var(--accent), var(--border))",
              }}
            />
            <div className="space-y-0">
              {experiences.map((item, i) => (
                <Reveal key={item.role} delay={i * 90}>
                  <div className="relative sm:pl-12 pb-10 last:pb-0 group">
                    <div
                      className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full items-center justify-center hidden sm:flex"
                      style={{
                        background: "var(--bg)",
                        border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: i === 0 ? "var(--accent)" : "var(--text-dim)" }}
                      />
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{
                          background: i === 0 ? "rgba(124,106,247,0.12)" : "var(--bg-3)",
                          color: i === 0 ? "var(--accent-2)" : "var(--text-dim)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {item.period}
                      </span>
                      <h3 className="text-lg font-medium" style={{ color: "var(--text)" }}>
                        {item.role}
                      </h3>
                    </div>
                    <div className="text-sm mb-2" style={{ color: "var(--accent-2)" }}>
                      {item.place}
                    </div>
                    <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-28 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,72rem)] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 10% 80%, rgba(34,211,238,0.05) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <Reveal>
            <SectionHead
              label="03 / SKILLS"
              title="What I work with"
              subtitle="Model training, analysis, dashboards, and cloud deployment."
              href="/skills"
              cta="View all skills"
            />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 70}>
                <div>
                  <div
                    className="text-xs font-mono tracking-wide mb-4 pb-3"
                    style={{ color: "var(--accent)", borderBottom: "1px solid var(--border)" }}
                  >
                    {group.label}
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm flex items-center gap-2.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ background: "var(--accent-2)" }}
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-28 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,72rem)] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Reveal>
            <SectionHead
              label="04 / PROJECTS"
              title="Selected work"
              subtitle="Research, analytics, and NLP — a few highlights from the full portfolio."
              href="/projects"
              cta="See all projects"
            />
          </Reveal>
          <div>
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link
                  href="/projects"
                  className={`home-project group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 transition-colors ${i === 0 ? "pt-0" : ""}`}
                >
                  <span
                    className="font-mono text-xs shrink-0 w-8"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {p.num}
                  </span>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded shrink-0 self-start"
                    style={{ background: `${p.color}18`, color: p.color }}
                  >
                    {p.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-base sm:text-lg font-medium mb-1 transition-colors duration-200 group-hover:text-[var(--accent-2)]"
                      style={{ color: "var(--text)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {p.blurb}
                    </p>
                  </div>
                  <span
                    className="home-cta-arrow text-sm font-mono shrink-0 self-start sm:self-center opacity-40 group-hover:opacity-100 transition-all duration-200"
                    style={{ color: "var(--accent-2)" }}
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-28 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,72rem)] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, rgba(124,106,247,0.07) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <Reveal>
            <SectionHead
              label="05 / BLOG"
              title="Writing & notes"
              subtitle="ML in production, feature engineering, and data systems."
              href="/blog"
              cta="Read the blog"
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px rounded-xl overflow-hidden" style={{ background: "var(--border)" }}>
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={i * 70} className="h-full">
                <Link
                  href="/blog"
                  className="home-post group block h-full p-6 sm:p-7 transition-colors duration-200"
                  style={{ background: "var(--bg-2)" }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono" style={{ color: post.color }}>
                      {post.tag}
                    </span>
                    <span className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>
                      {post.meta}
                    </span>
                  </div>
                  <h3
                    className="text-base font-medium leading-snug transition-colors duration-200 group-hover:text-[var(--accent-2)]"
                    style={{ color: "var(--text)" }}
                  >
                    {post.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1.5 mt-6 text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--accent-2)" }}
                  >
                    Read
                    <span className="home-cta-arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-28 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,72rem)] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Reveal>
            <div
              className="relative rounded-2xl overflow-hidden px-8 py-12 sm:px-12 sm:py-16"
              style={{
                background:
                  "linear-gradient(135deg, var(--bg-2) 0%, var(--card) 50%, rgba(124,106,247,0.12) 100%)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="absolute -right-20 -top-20 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(124,106,247,0.2) 0%, transparent 70%)",
                }}
              />
              <div className="relative max-w-xl">
                <div className="font-mono text-xs tracking-widest mb-3" style={{ color: "var(--accent)" }}>
                  06 / CONTACT
                </div>
                <h2 className="font-display text-4xl lg:text-5xl mb-5 leading-tight">
                  Let&apos;s work <em>together</em>
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                  Open to roles in data science, business analytics, and IT infrastructure — plus
                  consulting on ML strategy and production systems.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 hover:gap-3"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  Get in touch
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
