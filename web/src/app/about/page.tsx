export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">About MarketMind</h1>

        <section className="mb-12">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            MarketMind is an advanced algorithmic trading platform that combines state-of-the-art machine
            learning with ultra-low-latency execution infrastructure.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Built by quants and engineers, for quants and engineers. The platform is designed to enable
            institutional and advanced retail traders to deploy sophisticated strategies with transparent,
            measurable performance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technology Principles</h2>
          <div className="space-y-4 text-slate-300">
            <p>
              MarketMind uses a multi-language architecture where each component is optimized for its role:
              Python for training, C++ for inference, Java for monitoring, and TypeScript for the web.
            </p>
            <p>
              Every optimization is backed by benchmarks, and every feature is designed with observability
              and safety in mind.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-slate-300">
            Interested in collaborating or using MarketMind?{" "}
            <a href="/contact" className="text-emerald-400 hover:underline">
              Get in touch
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
