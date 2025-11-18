export default function RestAPIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">REST API Reference</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-emerald-400">
            https://api.marketmind.ai/v1
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-emerald-500 text-slate-950 px-3 py-1 rounded font-mono text-sm font-bold">
                  GET
                </span>
                <code className="text-emerald-400">/metrics</code>
              </div>
              <p className="text-slate-300 mb-3">
                Get current system metrics such as latency, throughput, and win rate.
              </p>
              <div className="bg-slate-900 rounded p-3 text-sm">
                <div className="text-slate-400 mb-2">Response:</div>
                <pre className="text-emerald-400">{`{
  "latencyP95Ms": 3.0,
  "throughputPerSec": 1000,
  "winRate": 0.732
}`}</pre>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-emerald-500 text-slate-950 px-3 py-1 rounded font-mono text-sm font-bold">
                  GET
                </span>
                <code className="text-emerald-400">/equity-curve</code>
              </div>
              <p className="text-slate-300 mb-3">Retrieve equity curve data points for dashboards.</p>
              <div className="bg-slate-900 rounded p-3 text-sm">
                <div className="text-slate-400 mb-2">Response:</div>
                <pre className="text-emerald-400">{`[
  { "time": 0, "value": 100.0 },
  { "time": 1, "value": 102.3 }
]`}</pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
