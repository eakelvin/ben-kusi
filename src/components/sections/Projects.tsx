"use client";
import { useState } from "react";

// const projects = [
//   {
//     id: 1,
//     tag: "Healthcare AI",
//     title: "Clinical NLP Pipeline",
//     description: "End-to-end NLP system for extracting structured data from unstructured clinical notes. Processes 2M+ records/day with 94% extraction accuracy.",
//     tech: ["PyTorch", "spaCy", "BERT", "FastAPI", "Kubernetes"],
//     metric1: { label: "Accuracy", val: "94.2%" },
//     metric2: { label: "Throughput", val: "2M+/day" },
//     color: "var(--cyan)",
//     status: "Production",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 2,
//     tag: "Fintech",
//     title: "Real-time Fraud Detection",
//     description: "Ensemble model combining gradient boosting and graph neural networks to detect fraudulent transactions. Reduced false positives by 67% vs previous rule-based system.",
//     tech: ["LightGBM", "PyG", "Kafka", "Redis", "AWS"],
//     metric1: { label: "AUC-ROC", val: "0.987" },
//     metric2: { label: "Latency", val: "<12ms" },
//     color: "var(--accent-2)",
//     status: "Production",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 3,
//     tag: "Climate Tech",
//     title: "Carbon Emissions Forecaster",
//     description: "Spatiotemporal model combining satellite imagery and sensor data to forecast industrial carbon emissions at building-level granularity across 50 cities.",
//     tech: ["PyTorch", "LSTM", "Sentinel-2", "GeoPandas", "GEE"],
//     metric1: { label: "RMSE", val: "0.043" },
//     metric2: { label: "Cities", val: "50" },
//     color: "var(--green)",
//     status: "Research",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 4,
//     tag: "E-commerce",
//     title: "Personalization Engine",
//     description: "Multi-armed bandit + collaborative filtering system powering real-time product recommendations. Increased CTR by 34% and revenue per session by 21%.",
//     tech: ["TensorFlow", "Apache Spark", "Feast", "Vertex AI"],
//     metric1: { label: "CTR lift", val: "+34%" },
//     metric2: { label: "Rev/session", val: "+21%" },
//     color: "var(--amber)",
//     status: "Production",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 5,
//     tag: "NLP / OSS",
//     title: "FinSentiment",
//     description: "Open-source library for financial sentiment analysis. Fine-tuned FinBERT on 500K+ earnings call transcripts. 12K+ GitHub stars, used by 300+ companies.",
//     tech: ["HuggingFace", "FinBERT", "Python", "PyPI"],
//     metric1: { label: "GitHub ★", val: "12.4K" },
//     metric2: { label: "Downloads", val: "2M+/mo" },
//     color: "var(--rose)",
//     status: "Open Source",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 6,
//     tag: "MLOps",
//     title: "AutoML Orchestration Platform",
//     description: "Internal platform for automated hyperparameter tuning, model versioning, and deployment. Reduced model deployment time from 2 weeks to 4 hours.",
//     tech: ["Ray Tune", "MLflow", "Airflow", "FastAPI", "Terraform"],
//     metric1: { label: "Deploy time", val: "4hrs" },
//     metric2: { label: "Models/mo", val: "200+" },
//     color: "var(--cyan)",
//     status: "Internal",
//     github: "#",
//     demo: "#",
//   },
// ];

const projects = [
  {
    id: 1,
    tag: "Quantum Chemistry Neural Network",
    title: "Predicting Electron Repulsion Integrals (ERIs) & HF Energy",
    description: "Accelerating Quantum Chemistry with Neural Networks: Predicting Electron Repulsion Integrals for Hartree - Fock Calculations.Trained solely on methane(CH4) and ethane(CH3CH3) in the minimal STO- 3G basis, the model(ERINet) predicts the 140, 185 ERIs of propane(CH3CH2CH3) with R2 > 0.94 and median absolute error near chemical accuracy(1 kcal / mol)",
    tech: ["Pyscf", "swiss activation function", "huber loss",],
    metric1: { label: "RMSE", val: "94%" },
    metric2: { label: "Throughput", val: "2M+/day" },
    color: "var(--cyan)",
    status: "Research",
    github: "https://github.com/benkusi10/Predicting-Electron-Repulsion-Integrals-ERIs-HF-Energy",
    demo: "#",
  },

  {
    id: 2,
    tag: "Data Analytics",
    title: "Telecom Customer Churn Prediction",
    description: "MCustomers in the telecom industry can choose from a variety of service providers and actively switch from one to the next. The telecommunications business has an annual churn rate of 15-25 percent in this highly competitive market.",
    tech: ["TensorFlow", "Apache Spark", "Feast", "Vertex AI"],
    metric1: { label: "CTR lift", val: "+34%" },
    metric2: { label: "Rev/session", val: "+21%" },
    color: "var(--amber)",
    status: "Production",
    github: "https://github.com/benkusi10/Telecom-Customer-Churn-Prediction/blob/main/README.md",
    demo: "#",
  },
  {
    id: 3,
    tag: "NLP / OSS",
    title: "FinSentiment",
    description: "Open-source library for financial sentiment analysis. Fine-tuned FinBERT on 500K+ earnings call transcripts. 12K+ GitHub stars, used by 300+ companies.",
    tech: ["HuggingFace", "FinBERT", "Python", "PyPI"],
    metric1: { label: "GitHub ★", val: "12.4K" },
    metric2: { label: "Downloads", val: "2M+/mo" },
    color: "var(--rose)",
    status: "Open Source",
    github: "https://github.com/benkusi10/Natural-Language-Processing-",
    demo: "#",
  },

];

const statusColor: Record<string, string> = {
  Production: "var(--green)",
  Research: "var(--amber)",
  "Open Source": "var(--accent-2)",
  Internal: "var(--cyan)",
};

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <div className="font-mono text-xs mb-3" style={{ color: "var(--accent)" }}>03 / PROJECTS</div>
          <h2 className="font-display text-4xl lg:text-5xl">Selected Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => (
            <div key={p.id}
              className="relative rounded-xl p-6 cursor-pointer transition-all duration-300"
              style={{
                background: "var(--card)",
                border: `1px solid ${hovered === p.id ? p.color : "var(--border)"}`,
                boxShadow: hovered === p.id ? `0 0 30px ${p.color}22` : "none",
                transform: hovered === p.id ? "translateY(-2px)" : "none",
              }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}>

              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ background: `${p.color}18`, color: p.color }}>
                  {p.tag}
                </span>
                <span className="text-xs font-mono flex items-center gap-1.5" style={{ color: statusColor[p.status] }}>
                  <span className="w-1 h-1 rounded-full" style={{ background: statusColor[p.status] }} />
                  {p.status}
                </span>
              </div>

              <h3 className="text-lg font-medium mb-2" style={{ color: "var(--text)" }}>{p.title}</h3>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{p.description}</p>

              {/* Metrics */}
              {/* <div className="grid grid-cols-2 gap-3 mb-5">
                {[p.metric1, p.metric2].map(m => (
                  <div key={m.label} className="p-2.5 rounded-lg text-center" style={{ background: "var(--bg-3)", border: "1px solid var(--border)" }}>
                    <div className="text-base font-mono font-medium" style={{ color: p.color }}>{m.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{m.label}</div>
                  </div>
                ))}
              </div> */}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{ background: "var(--bg)", color: "var(--text-dim)", border: "1px solid var(--border)" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <a href={p.github} className="text-xs font-mono transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>
                  GitHub →
                </a>
                <a href={p.demo} className="text-xs font-mono transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>
                  Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
