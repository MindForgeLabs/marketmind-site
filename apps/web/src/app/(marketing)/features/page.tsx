export default function FeaturesPage() {
  const currentPlatform = [
    {
      badge: "Available now",
      title: "Auditable Run Bundles & Gates",
      description:
        "Single-command pipeline produces versioned artifacts (plan, env fingerprint, dataset manifest, splits, gate results). Fail-closed validation (CLI + runner) enforces schema integrity and leakage safeguards.",
      benefits: ["Run bundle pipeline", "Gate CLI (Appendix C/D)", "Reproducible research runs"],
    },
    {
      badge: "Available now",
      title: "PIT-Safe Backtesting & Validation",
      description:
        "Governed backtest boundary with purge/embargo splits, leakage/property tests, and the first trusted stat_arb_pairs strategy slice. Content-addressable artifact registry (CAS) with run state machine.",
      benefits: ["Purge/embargo splits", "Artifact registry (CAS)", "stat_arb_pairs on canonical path"],
    },
    {
      badge: "Active (Phase II-0)",
      title: "Validation Scaffolding",
      description:
        "Non-promotable Phase II-0 scaffolding: task manifest and meta-validity artifact schemas, threshold governance hooks, and harness scaffolds for future promotable evaluation. These are scaffolds, not shipped Phase II machinery.",
      benefits: ["Task manifest schema", "Meta-validity report schema", "Threshold governance hooks"],
    },
  ];

  const roadmap = [
    {
      badge: "Planned (Phase III)",
      title: "Ultra-Low Latency",
      description: "Sub-3ms p95 inference with C++20 and TensorRT optimization. Not yet shipped.",
      benefits: ["50–150x faster than Python-only stacks", "GPU acceleration", "Zero-copy pipelines"],
    },
    {
      badge: "Planned (Phase II, conditional)",
      title: "Hybrid ML Models",
      description: "Promotable meta-learning allocator combining Transformers, LSTMs, and classical indicators — conditional on Phase II-0 scaffolding confirming a viable evidence path. Not yet shipped.",
      benefits: ["Flexible architecture", "ONNX export", "Fast iteration"],
    },
    {
      badge: "Planned (Phase III)",
      title: "Enterprise Risk Controls",
      description: "Built-in position limits, drawdown protection, and kill switch. Not yet shipped.",
      benefits: ["Real-time monitoring", "Automatic circuit breakers", "Audit logging"],
    },
    {
      badge: "Planned (Phase II+)",
      title: "Multi-Tier Caching",
      description: "L1–L4 cache hierarchy with TinyLFU admission. Not yet shipped.",
      benefits: [">95% hit rate", "Sub-microsecond L1", "Intelligent promotion"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-slate-300 mb-12">
          Governed backtesting and validation delivered (Phase 0 & Phase I); Phase II-0 validation scaffolding active; promotable ML and execution are roadmap items.
        </p>

        <section className="mb-16" aria-labelledby="current-platform-heading">
          <h2 id="current-platform-heading" className="text-2xl font-bold mb-6 text-emerald-400">
            Current platform
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentPlatform.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-900/50 border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/40 transition"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400/90 mb-2">
                  {feature.badge}
                </p>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400">✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="roadmap-heading">
          <h2 id="roadmap-heading" className="text-2xl font-bold mb-6 text-slate-400">
            Roadmap
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Planned — not yet shipped. Timeline and scope subject to change.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {roadmap.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-900/30 border border-white/5 rounded-xl p-8 hover:border-white/10 transition"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-400/90 mb-2">
                  {feature.badge}
                </p>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-500">
                      <span className="text-amber-400/80">○</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
