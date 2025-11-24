export default function FeaturesPage() {
  const features = [
    {
      title: "Ultra-Low Latency",
      description: "Sub-3ms p95 inference with C++20 and TensorRT optimization.",
      benefits: ["50–150x faster than Python-only stacks", "GPU acceleration", "Zero-copy pipelines"],
    },
    {
      title: "Hybrid ML Models",
      description: "Combine Transformers, LSTMs, and classical indicators.",
      benefits: ["Flexible architecture", "ONNX export", "Fast iteration"],
    },
    {
      title: "Enterprise Risk Controls",
      description: "Built-in position limits, drawdown protection, and kill switch.",
      benefits: ["Real-time monitoring", "Automatic circuit breakers", "Audit logging"],
    },
    {
      title: "Multi-Tier Caching",
      description: "L1–L4 cache hierarchy with TinyLFU admission.",
      benefits: [">95% hit rate", "Sub-microsecond L1", "Intelligent promotion"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-slate-300 mb-12">
          Everything you need to build, deploy, and monitor production trading strategies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900/50 border border-white/10 rounded-xl p-8 hover:border-emerald-500/30 transition"
            >
              <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
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
      </div>
    </main>
  );
}
