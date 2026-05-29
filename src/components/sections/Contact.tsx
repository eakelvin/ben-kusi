"use client";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 20% 50%, rgba(124,106,247,0.07) 0%, transparent 60%)"
      }} />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="font-mono text-xs mb-3" style={{ color: "var(--accent)" }}>05 / CONTACT</div>
          <h2 className="font-display text-4xl lg:text-5xl">
            Let&apos;s work<br /><em>together</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              Open to senior IC and staff roles in ML/data science, as well as consulting engagements for model auditing, ML strategy, and production ML architecture.
            </p>

            <div className="space-y-4">
              {[
                { label: "LinkedIn", val: "https://www.linkedin.com/in/benjamin-kusi-631102232/", href: "#", color: "var(--cyan)" },
                { label: "GitHub", val: "https://github.com/benkusi10", href: "#", color: "var(--green)" },
                { label: "Email", val: "kusibenjamin54(@)gmail.com", href: "mailto:kusibenjamin54(@)gmail.com", color: "var(--accent)" },
                // { label: "Twitter / X", val: "@benkusi10", href: "#", color: "var(--amber)" },
              ].map(l => (
                <a key={l.label} href={l.href}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = l.color; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${l.color}18`, border: `1px solid ${l.color}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>{l.label}</div>
                    <div className="text-sm mt-0.5 group-hover:underline" style={{ color: "var(--text)" }}>{l.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl p-6 sm:p-8" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-full mb-4 flex items-center justify-center"
                  style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)" }}>
                  <span style={{ color: "var(--green)", fontSize: "24px" }}>✓</span>
                </div>
                <div className="text-lg font-medium mb-2" style={{ color: "var(--text)" }}>Message sent!</div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>I&apos;ll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-xs font-mono mb-6" style={{ color: "var(--text-dim)" }}>Send a message</div>
                {[
                  { key: "name", label: "Your name", type: "text", placeholder: "Jane Smith" },
                  { key: "email", label: "Email address", type: "email", placeholder: "jane@company.com" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-xs font-mono mb-2" style={{ color: "var(--text-muted)" }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      required
                      className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 font-mono"
                      style={{ background: "var(--bg-3)", border: "1px solid var(--border)", color: "var(--text)" }}
                      onFocus={e => { e.target.style.borderColor = "var(--accent)"; }}
                      onBlur={e => { e.target.style.borderColor = "var(--border)"; }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: "var(--text-muted)" }}>Message</label>
                  <textarea
                    placeholder="Tell me about the project or role..."
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 font-mono resize-none"
                    style={{ background: "var(--bg-3)", border: "1px solid var(--border)", color: "var(--text)" }}
                    onFocus={e => { e.target.style.borderColor = "var(--accent)"; }}
                    onBlur={e => { e.target.style.borderColor = "var(--border)"; }}
                  />
                </div>
                <button type="submit"
                  className="w-full py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "var(--accent)", color: "#fff" }}>
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
