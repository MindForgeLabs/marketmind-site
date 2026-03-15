export default function CachingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Multi-Tier Caching</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cache Hierarchy</h2>
          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">L1: In-Process Cache</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• Location: process memory (C++ / Python).</div>
                <div>• Latency: ~10 nanoseconds.</div>
                <div>• Size: ~256MB per process.</div>
                <div>• Use case: hot features and model outputs.</div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">L2: Shared Memory</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• Location: shared memory / Unix domain sockets.</div>
                <div>• Latency: ~1 microsecond.</div>
                <div>• Use case: cross-process feature sharing.</div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-purple-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">L3: Redis (Local)</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• Location: local Redis instance.</div>
                <div>• Latency: ~100 microseconds.</div>
                <div>• Use case: precomputed indicators and historical features.</div>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-orange-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-orange-400">L4: Remote Cache</h3>
              <div className="text-sm text-slate-300 space-y-1">
                <div>• Location: distributed Redis cluster / key-value store.</div>
                <div>• Latency: ~1 millisecond.</div>
                <div>• Use case: cold features and backtesting data.</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cache Admission Policy</h2>
          <p className="text-slate-300 mb-4">
            MarketMind uses <strong>TinyLFU</strong> for intelligent cache admission and eviction:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Tracks approximate access frequency with minimal memory usage.</li>
            <li>• Protects against cache pollution from large one-off scans.</li>
            <li>• Promotes genuinely hot keys to faster tiers automatically.</li>
            <li>• Supports configurable warmup periods for new deployments.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
