type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  bullets: string[];
  tech: string[];
  highlight: string;
  color: string;
};

const items: ExperienceItem[] = [
  {
    period: "Dec 2025 — Apr 2026",
    role: "AI Research Engineer Intern",
    company: "Institut de Chimie Physique, Université Paris-Saclay",
    location: "Paris, France",
    description:
      "Built and tested neural network models to speed up evaluation of two-electron integrals in Hartree–Fock (HF) and multi-configuration self-consistent field (MCSCF) calculations.",
    bullets: [
      "Contributed to model experimentation, validation, and optimization workflows in a research-focused machine learning environment.",
      "Measured trade-offs between computation speed and memory use against standard approximation methods.",
    ],
    tech: ["Python", "Neural Networks", "Validation", "Optimization"],
    highlight: "Speed vs memory trade-off analysis",
    color: "var(--cyan)",
  },
  {
    period: "Mar 2019 — May 2021",
    role: "IT Coordinator",
    company: "Atweaman Lycee",
    location: "Greater Accra Region, Ghana",
    description:
      "Conducted data analysis on student performance and instructor satisfaction, and coordinated IT support across departments and sites.",
    bullets: [
      "Collaborated with cross-functional teams to present insights to senior management, resulting in a 20% improvement in decision-making efficiency.",
      "Coordinated IT support tasks for 105 users across 8 departments and 2 sites, ensuring prompt resolution of technical issues.",
    ],
    tech: ["Data Analysis", "Reporting", "IT Operations", "Stakeholder Management"],
    highlight: "20% decision-making efficiency improvement",
    color: "var(--accent)",
  },
  {
    period: "Sep 2018 — Aug 2021",
    role: "Data Analyst",
    company: "Environmental Dialogue Network",
    location: "Sunyani, BA, Ghana",
    description:
      "Analyzed procurement and stakeholder data to increase revenue, reduce costs, and deliver KPI dashboards for decision-makers.",
    bullets: [
      "Increased revenue by $12M through analysis of customer behaviors, vendor relationships, stakeholder goals, and workflows.",
      "Identified cost-saving opportunities worth $5,000 annually through procurement data analysis.",
      "Developed an interactive dashboard to track procurement KPIs using Power BI.",
      "Analyzed procurement data to identify trends, opportunities, and risks, providing actionable insights to stakeholders with a 96% success rate.",
    ],
    tech: ["Power BI", "Procurement Analytics", "KPI Dashboards", "Data Storytelling"],
    highlight: "$12M revenue impact",
    color: "var(--green)",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="font-mono text-xs mb-3" style={{ color: "var(--accent)" }}>
            EXPERIENCE
          </div>
          <h1 className="font-display text-4xl lg:text-6xl">Work experience</h1>
          <p className="mt-4 text-base max-w-2xl" style={{ color: "var(--text-muted)" }}>
            A timeline of roles, impact, and the kinds of problems I enjoy working on.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px ml-3 hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--accent), var(--border))" }}
          />

          <div className="space-y-10">
            {items.map((item) => (
              <div key={`${item.period}-${item.role}`} className="md:pl-12 relative group">
                <div
                  className="absolute left-0 top-6 w-7 h-7 rounded-full items-center justify-center hidden md:flex"
                  style={{ background: "var(--bg)", border: `2px solid ${item.color}` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                </div>

                <div
                  className="rounded-xl p-6 transition-all duration-300 group-hover:border-opacity-60"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="font-medium text-lg" style={{ color: "var(--text)" }}>
                        {item.role}
                      </div>
                      <div className="text-sm mt-0.5" style={{ color: item.color }}>
                        {item.company}
                      </div>
                      <div className="text-xs mt-1 font-mono" style={{ color: "var(--text-dim)" }}>
                        {item.location}
                      </div>
                    </div>
                    <div
                      className="text-xs font-mono px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: "var(--bg-3)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {item.period}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4 text-xs font-mono" style={{ color: item.color }}>
                    <span>◆</span> {item.highlight}
                  </div>

                  <ul className="space-y-2 mb-5">
                    {item.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: item.color }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{
                          background: "var(--bg)",
                          color: "var(--text-dim)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

