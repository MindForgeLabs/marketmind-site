export default function QuickstartPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">3-Step Quickstart</h1>
        <p className="text-slate-300 mb-8">
          Get MarketMind running in minutes. This guide assumes you have the system requirements installed.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              Clone and Install
            </h2>
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
              <div className="text-emerald-400">git clone https://github.com/yourorg/marketmind.git</div>
              <div className="text-emerald-400">cd marketmind && pip install -e .</div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              Start Services
            </h2>
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
              <div className="text-emerald-400">docker-compose up -d</div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              Run Example Strategy
            </h2>
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
              <div className="text-emerald-400">python examples/momentum_strategy.py --mode paper</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
