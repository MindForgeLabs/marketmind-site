export default function StrategiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Building Strategies</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Strategy Lifecycle</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">1. Development</h3>
              <p className="text-slate-300">
                Write strategy logic in Python, define features, and specify model dependencies.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">2. Backtesting</h3>
              <p className="text-slate-300">
                Run historical simulations, perform walk-forward testing, and validate robustness.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">3. Paper Trading</h3>
              <p className="text-slate-300">
                Execute strategies against live market data without sending real orders.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">4. Production</h3>
              <p className="text-slate-300">
                Deploy to the C++ runtime with full risk controls and observability.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Example Strategy</h2>
          <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto text-sm">
            <code className="text-emerald-400">{`@strategy(name="momentum_mean_reversion")
class HybridStrategy(BaseStrategy):
    def __init__(self):
        self.momentum = MomentumIndicator(window=20)
        self.mean_rev = MeanReversionIndicator(window=50)

    @cache(ttl="5m", tier=CacheTier.L2)
    async def predict(self, features: Features) -> Signal:
        mom_signal = await self.momentum.compute(features)
        mr_signal = await self.mean_rev.compute(features)

        # Ensemble with learned weights
        signal = 0.6 * mom_signal + 0.4 * mr_signal

        return self.risk_engine.size_position(signal)`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• Always implement position limits and stop-losses.</li>
            <li>• Use walk-forward optimization to avoid overfitting.</li>
            <li>• Monitor live performance and risk metrics in real time.</li>
            <li>• Run in paper mode for at least 1–2 weeks before going live.</li>
            <li>• Prefer simple, interpretable strategies over unnecessary complexity.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
