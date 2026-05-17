"use client";
import { useState } from "react";

const skillGroups = [
  {
    label: "ML & AI",
    color: "var(--accent)",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "scikit-learn", level: 98 },
      { name: "Transformers (HF)", level: 90 },
      { name: "XGBoost/LightGBM", level: 96 },
      { name: "MLflow", level: 88 },
    ],
  },
  {
    label: "Data Engineering",
    color: "var(--cyan)",
    skills: [
      { name: "Apache Spark", level: 85 },
      { name: "dbt", level: 90 },
      { name: "Airflow", level: 82 },
      { name: "BigQuery", level: 92 },
      { name: "Kafka", level: 78 },
    ],
  },
  {
    label: "Languages",
    color: "var(--green)",
    skills: [
      { name: "Python", level: 99 },
      { name: "SQL", level: 96 },
      { name: "R", level: 80 },
      { name: "Julia", level: 70 },
      { name: "Bash", level: 85 },
    ],
  },
  {
    label: "Cloud & MLOps",
    color: "var(--amber)",
    skills: [
      { name: "AWS SageMaker", level: 88 },
      { name: "Docker/K8s", level: 83 },
      { name: "Terraform", level: 75 },
      { name: "Vertex AI", level: 80 },
      { name: "GitHub Actions", level: 90 },
    ],
  },
];

const badges = [
  "Causal Inference", "A/B Testing", "Bayesian Methods", "Time Series", "NLP",
  "Computer Vision", "Recommendation Systems", "Anomaly Detection", "Feature Engineering",
  "Model Interpretability", "SHAP", "RAG", "LangChain", "Vector DBs", "Embeddings",
];

export function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="font-mono text-xs mb-3" style={{ color: "var(--accent)" }}>02 / SKILLS</div>
          <h2 className="font-display text-4xl lg:text-5xl">Technical Arsenal</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tabs */}
          <div>
            <div className="flex gap-2 mb-8 flex-wrap">
              {skillGroups.map((g, i) => (
                <button key={g.label} onClick={() => setActive(i)}
                  className="px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200"
                  style={{
                    background: active === i ? g.color : "var(--card)",
                    color: active === i ? "#fff" : "var(--text-muted)",
                    border: `1px solid ${active === i ? g.color : "var(--border)"}`,
                  }}>
                  {g.label}
                </button>
              ))}
            </div>

            <div className="space-y-5">
              {skillGroups[active].skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-mono" style={{ color: "var(--text)" }}>{skill.name}</span>
                    <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{skill.level}%</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                    <div className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%`, background: skillGroups[active].color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges / specialties */}
          <div>
            <div className="text-xs font-mono mb-6" style={{ color: "var(--text-muted)" }}>Specializations & concepts</div>
            <div className="flex flex-wrap gap-2">
              {badges.map(b => (
                <span key={b}
                  className="px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 cursor-default"
                  style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.borderColor = "var(--accent)";
                    (e.target as HTMLElement).style.color = "var(--accent-2)";
                    (e.target as HTMLElement).style.background = "rgba(124,106,247,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.borderColor = "var(--border)";
                    (e.target as HTMLElement).style.color = "var(--text-muted)";
                    (e.target as HTMLElement).style.background = "var(--card)";
                  }}>
                  {b}
                </span>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-10">
              <div className="text-xs font-mono mb-4" style={{ color: "var(--text-muted)" }}>Certifications</div>
              <div className="space-y-3">
                {[
                  { name: "AWS Certified Machine Learning – Specialty", issuer: "Amazon Web Services", year: "2024" },
                  { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2023" },
                  { name: "Deep Learning Specialization", issuer: "Coursera / deeplearning.ai", year: "2022" },
                ].map(cert => (
                  <div key={cert.name} className="flex items-start gap-3 p-3 rounded-lg"
                    style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--accent)" }} />
                    <div>
                      <div className="text-sm" style={{ color: "var(--text)" }}>{cert.name}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{cert.issuer} · {cert.year}</div>
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
