export default function FeaturesPage() {
  const currentPlatform = [
    {
      badge: "Available now",
      title: "Auditable Run Bundles",
      description:
        "A single command produces a versioned, reproducible bundle: plan identity, environment fingerprint, dataset manifest, leakage-safe splits, and gate results. Every run is a self-contained evidence package — not just backtest output.",
      benefits: ["Canonical pipeline entrypoint", "Gate CLI (PASS / FAIL / exit codes)", "Immutable artifact identity (CAS)"],
    },
    {
      badge: "Available now",
      title: "Gate-First Validation",
      description:
        "Fail-closed validation enforces schema integrity, point-in-time correctness, leakage invariants, and statistical gate checks before any result is considered credible. The gate runs on governed strategy slices including stat_arb_pairs and momentum.",
      benefits: ["PIT-safe purge/embargo splits", "20 leakage property tests", "stat_arb_pairs on canonical path"],
    },
    {
      badge: "Phase II-A active · GATE-II deferred",
      title: "Research Evidence Program",
      description:
        "Phase II-0 is complete as the non-promotable bridge (II-0B governed artifact triple, II-0C research pilot harness). Six bounded Phase II-C evidence lanes are closed: task construction, encoder coherence, curriculum sampling, Reptile training, K-budget behavior, proxy–IC alignment, and EWC forgetting robustness. All thresholds are provisional. Phase II-A is the active forward phase toward task-substrate validity closure.",
      benefits: [
        "II-0B governed artifact triple (non-promotable)",
        "II-0C research pilot harness (non-promotable)",
        "MLC-0–6 closed · provisional thresholds",
        "Phase II-A open · GATE-II deferred",
      ],
    },
  ];

  const roadmap = [
    {
      badge: "Planned (Phase II, conditional)",
      title: "Meta-Learning Allocator",
      description:
        "A promotable regime-indexed allocator that recombines signals as market regimes shift. Conditional on Phase II evidence beating a simpler XGBoost incumbent baseline net of costs. Not built yet.",
      benefits: ["Must beat simpler baseline", "Regime-indexed tasks", "Governed promotion gate"],
    },
    {
      badge: "Planned (Phase III)",
      title: "Execution Runtime",
      description:
        "C++/GPU inference, ONNX export, and TensorRT optimisation. Target architecture only — no measured production runtime exists today. Conditional on Phase II validation.",
      benefits: ["C++ inference path proposed", "ONNX / TensorRT target", "Latency evidence required"],
    },
    {
      badge: "Planned (Phase III)",
      title: "Live Execution & Risk Controls",
      description:
        "Broker integration, live data feeds, position limits, drawdown circuit breakers, and kill-switch governance. Conditional on Phase II allocator proof and execution-realism build.",
      benefits: ["Broker wiring conditional", "Kill-switch governance", "Paper-trading sim precedes live"],
    },
    {
      badge: "Planned (Phase IV)",
      title: "Signal Factory",
      description:
        "Governed signal onboarding, novelty / similarity screening, automated discovery loops, and breadth expansion beyond the current narrow base. Signal-factory-serious work begins only after allocator validation.",
      benefits: ["Governed admission criteria", "SignalCatalog foundation exists", "Scale only after allocator proof"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-slate-300 mb-12">
          The governed research substrate is shipped. The adaptive allocator is a roadmap candidate, not a delivered capability.
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
            Planned — not yet shipped. Each phase is conditional on the previous phase producing the required evidence.
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
