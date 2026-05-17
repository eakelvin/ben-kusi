export function Experience() {
  const items = [
    {
      period: "2022 — Present",
      role: "Senior Data Scientist",
      company: "Meridian Health AI",
      location: "San Francisco, CA",
      description: "Lead ML research for clinical NLP products. Built patient risk stratification models deployed to 40+ hospital systems. Mentor team of 6 junior scientists.",
      tech: ["PyTorch", "BERT", "FastAPI", "AWS", "Kubernetes"],
      highlight: "2M+ patient records processed daily",
      color: "var(--accent)",
    },
    {
      period: "2020 — 2022",
      role: "Machine Learning Engineer",
      company: "Stratum Financial",
      location: "New York, NY",
      description: "Designed fraud detection pipeline serving 50M+ transactions/month. Reduced fraud losses by $12M annually. Led migration from batch to real-time inference.",
      tech: ["LightGBM", "Kafka", "Redis", "Terraform", "GCP"],
      highlight: "$12M annual fraud losses prevented",
      color: "var(--cyan)",
    },
    {
      period: "2019 — 2020",
      role: "Data Scientist",
      company: "Verdigris Technologies",
      location: "Sunnyvale, CA",
      description: "Built energy consumption forecasting models for IoT sensor networks. Published 2 papers on anomaly detection in industrial time series data.",
      tech: ["TensorFlow", "Prophet", "InfluxDB", "Grafana"],
      highlight: "2 peer-reviewed publications",
      color: "var(--green)",
    },
    {
      period: "2018 — 2019",
      role: "Data Science Intern",
      company: "Palantir Technologies",
      location: "Palo Alto, CA",
      description: "Developed entity resolution pipeline for government datasets. Contributed to internal feature store infrastructure.",
      tech: ["Spark", "Python", "Java", "Foundry"],
      highlight: "Full-time offer extended",
      color: "var(--amber)",
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="font-mono text-xs mb-3" style={{ color: "var(--accent)" }}>04 / EXPERIENCE</div>
          <h2 className="font-display text-4xl lg:text-5xl">Work History</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px ml-3 hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--accent), var(--border))" }} />

          <div className="space-y-10">
            {items.map((item, i) => (
              <div key={i} className="md:pl-12 relative group">
                {/* Dot */}
                <div className="absolute left-0 top-6 w-7 h-7 rounded-full items-center justify-center hidden md:flex"
                  style={{ background: "var(--bg)", border: `2px solid ${item.color}` }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                </div>

                <div className="rounded-xl p-6 transition-all duration-300 group-hover:border-opacity-60"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="font-medium text-lg" style={{ color: "var(--text)" }}>{item.role}</div>
                      <div className="text-sm mt-0.5" style={{ color: item.color }}>{item.company}</div>
                      <div className="text-xs mt-1 font-mono" style={{ color: "var(--text-dim)" }}>{item.location}</div>
                    </div>
                    <div className="text-xs font-mono px-3 py-1 rounded-full shrink-0"
                      style={{ background: "var(--bg-3)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                      {item.period}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{item.description}</p>

                  <div className="flex items-center gap-2 mb-4 text-xs font-mono"
                    style={{ color: item.color }}>
                    <span>◆</span> {item.highlight}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{ background: "var(--bg)", color: "var(--text-dim)", border: "1px solid var(--border)" }}>
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
