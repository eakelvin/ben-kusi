"use client";

const posts = [
    {
        title: "Why most ML projects never reach production",
        excerpt:
            "The unglamorous truth: it's almost never the model. Notes on data contracts, monitoring, and the boring details that decide whether your model survives the real world.",
        tag: "MLOps",
        tagColor: "var(--accent)",
        date: "May 2026",
        readTime: "8 min read",
        href: "https://towardsdev.com/why-most-machine-learning-projects-never-reach-production-c07207a41804?gi=a4b0f4e8567b",
    },
    {
        title: "Feature engineering: the underrated superpower",
        excerpt:
            "Thoughtful features beat fancier models more often than the AutoML pitch decks would have you believe. A practical look at signal, leakage, and iteration speed.",
        tag: "Machine Learning",
        tagColor: "var(--cyan)",
        date: "Apr 2026",
        readTime: "6 min read",
        href: "https://medium.com/@nishaviji6910/feature-engineering-the-hidden-superpower-behind-every-great-machine-learning-model-2ec33583b477",
    },
    {
        title: "Data escalation process for all industrial facilities",
        excerpt:
            "How to Animate the NRJ data escalation process for all industrial facilities in the Bitumen domain.",
        tag: "Data Visualization",
        tagColor: "var(--rose)",
        date: "Dec 2025",
        readTime: "9 min read",
        href: "https://medium.com/@kusibenjamin54/how-to-animate-the-nrj-data-escalation-process-for-all-industrial-facilities-in-the-bitumen-domain-e261f46b1b22",
    },
    {
        title: "A practical guide to A/B testing on imbalanced data",
        excerpt:
            "When your conversion rate is 0.4%, classical power analysis lies to you. A walk-through of CUPED, sequential testing, and what to actually trust.",
        tag: "Statistics",
        tagColor: "var(--green)",
        date: "Mar 2026",
        readTime: "10 min read",
        href: "https://medium.com/@tanvimoghe1/how-i-handle-imbalanced-data-in-real-life-a-practical-guide-e92dd680c0d6",
    },
    {
        title: "From notebook to API: deploying models with FastAPI",
        excerpt:
            "A minimal, opinionated path from model.pkl to a tested, containerized service — with the gotchas that always bite first-time deployers.",
        tag: "Engineering",
        tagColor: "var(--amber)",
        date: "Feb 2026",
        readTime: "7 min read",
        href: "#",
    },
    {
        title: "Causal inference for data scientists",
        excerpt:
            "Correlation isn't causation, but you can do better than just saying that. A friendly tour of DAGs, propensity scores, and double machine learning.",
        tag: "Statistics",
        tagColor: "var(--green)",
        date: "Jan 2026",
        readTime: "12 min read",
        href: "#",
    },

];

export function Blog() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0" style={{
                background: "radial-gradient(ellipse at 20% 30%, rgba(124,106,247,0.06) 0%, transparent 60%)"
            }} />
            <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
                <div className="mb-14">
                    <div className="font-mono text-xs mb-3" style={{ color: "var(--accent)" }}>04 / BLOG</div>
                    <h2 className="font-display text-4xl lg:text-5xl">Writing &amp; notes</h2>
                    <p className="mt-4 text-base max-w-2xl" style={{ color: "var(--text-muted)" }}>
                        Long-form notes on machine learning, production data systems, and the occasional rant about model monitoring.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {posts.map(p => {
                        const hasLink = p.href && p.href !== "#";
                        const isExternal = hasLink && /^https?:\/\//.test(p.href);
                        const cardStyle: React.CSSProperties = {
                            background: "var(--card)",
                            border: "1px solid var(--border)",
                            opacity: hasLink ? 1 : 0.6,
                            cursor: hasLink ? "pointer" : "not-allowed",
                        };
                        const inner = (
                            <>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono px-2 py-0.5 rounded"
                                        style={{ background: `${p.tagColor}18`, color: p.tagColor }}>
                                        {p.tag}
                                    </span>
                                    <span className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>{p.date}</span>
                                </div>

                                <h3 className="text-lg font-medium mb-2 leading-snug" style={{ color: "var(--text)" }}>
                                    {p.title}
                                </h3>
                                <p className="text-xs leading-relaxed mb-5 flex-1" style={{ color: "var(--text-muted)" }}>
                                    {p.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: "1px solid var(--border)" }}>
                                    <span className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>{p.readTime}</span>
                                    <span className="text-xs font-mono transition-colors group-hover:text-white" style={{ color: "var(--text-muted)" }}>
                                        {hasLink ? (isExternal ? "Read ↗" : "Read →") : "Coming soon"}
                                    </span>
                                </div>
                            </>
                        );

                        if (!hasLink) {
                            return (
                                <div key={p.title}
                                    className="relative rounded-xl p-6 flex flex-col"
                                    style={cardStyle}
                                    aria-disabled>
                                    {inner}
                                </div>
                            );
                        }

                        return (
                            <a key={p.title} href={p.href}
                                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="group relative rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5"
                                style={cardStyle}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = p.tagColor;
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${p.tagColor}22`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                }}>
                                {inner}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
