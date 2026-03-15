import Link from "next/link";

export default function GuidesPage() {
  const guides = [
    {
      title: "First Strategy",
      description: "Build and validate your first trading strategy (backtest and gates).",
      href: "/guides/first-strategy",
      time: "15 min",
    },
    {
      title: "Model Training",
      description: "Planned (Phase II): Train a Transformer model and export to ONNX. Not shipped yet.",
      href: "/guides/model-training",
      time: "30 min",
    },
    {
      title: "Performance Tuning",
      description: "Optimize inference latency and throughput. Planned (Phase III).",
      href: "/guides/performance-tuning",
      time: "45 min",
    },
    {
      title: "Production Deployment",
      description: "Planned (Phase III): Deploy strategies to production. Not available yet.",
      href: "/guides/production-deployment",
      time: "60 min",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Guides</h1>
        <p className="text-xl text-slate-300 mb-12">
          Step-by-step tutorials for common MarketMind workflows.
        </p>

        <div className="space-y-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block bg-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 hover:bg-slate-900/70 transition group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition">
                    {guide.title}
                  </h2>
                  <p className="text-slate-400">{guide.description}</p>
                </div>
                <div className="text-sm text-slate-500 whitespace-nowrap ml-4">
                  {guide.time}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
