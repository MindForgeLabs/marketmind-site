import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    links: [
      { name: "Quickstart", href: "/quickstart", desc: "Get up and running in 3 steps" },
      { name: "Installation", href: "/docs/installation", desc: "System requirements and setup" },
      { name: "Architecture", href: "/docs/architecture", desc: "How MarketMind works" },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      { name: "Strategies", href: "/docs/strategies", desc: "Building and deploying trading strategies" },
      { name: "ML Pipeline", href: "/docs/ml-pipeline", desc: "Training and exporting models" },
      { name: "Caching", href: "/docs/caching", desc: "Multi-tier cache architecture" },
      { name: "Risk Management", href: "/docs/risk", desc: "Position sizing and safety controls" },
    ],
  },
  {
    title: "Infrastructure",
    links: [
      { name: "C++ Runtime", href: "/docs/cpp-runtime", desc: "Low-latency inference engine" },
      { name: "Python Services", href: "/docs/python-services", desc: "Training and preprocessing" },
      { name: "Desktop UI", href: "/docs/desktop", desc: "JavaFX monitoring dashboard" },
      { name: "Telemetry", href: "/docs/telemetry", desc: "Metrics and observability" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { name: "REST API", href: "/docs/api/rest", desc: "HTTP endpoints" },
      { name: "gRPC", href: "/docs/api/grpc", desc: "High-performance RPC" },
      { name: "WebSocket", href: "/docs/api/websocket", desc: "Real-time data feeds" },
    ],
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-slate-300 mb-12">
          Everything you need to build, deploy, and monitor algorithmic trading strategies with MarketMind.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {docSections.map((section) => (
            <div key={section.title} className="bg-slate-900/50 border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block p-3 rounded-lg hover:bg-slate-800/50 transition group"
                    >
                      <div className="font-semibold text-emerald-400 group-hover:text-emerald-300">
                        {link.name}
                      </div>
                      <div className="text-sm text-slate-400">{link.desc}</div>
                    </Link>
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
