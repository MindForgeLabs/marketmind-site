export default function RiskPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Risk Management</h1>
        <p className="text-slate-400 mb-8">
          Risk framework (position limits, drawdown protection, kill switch) is target architecture (Phase III). Today: validation gates and backtest discipline.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Built-in Safety Controls <span className="text-sm font-normal text-amber-400/90">(Target, Phase III)</span></h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Position Limits</h3>
              <p className="text-slate-300">
                Maximum position sizes across symbols, sectors, and the overall portfolio.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Drawdown Protection</h3>
              <p className="text-slate-300">
                Automatic strategy pause or throttle when account-level drawdowns breach configured thresholds.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Volatility Adjustment</h3>
              <p className="text-slate-300">
                Dynamic position sizing based on realized or implied volatility.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-xl font-semibold mb-2">Kill Switch</h3>
              <p className="text-slate-300">
                One-command emergency halt across all strategies and accounts.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Risk Configuration</h2>
          <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto text-sm">
            <code className="text-emerald-400">{`risk_config = {
  "max_position_pct": 0.05,        # 5% of portfolio per position
  "max_sector_exposure": 0.25,     # 25% max in single sector
  "max_daily_loss_pct": 0.02,      # 2% daily loss limit
  "max_drawdown_pct": 0.10,        # 10% max drawdown before pause
  "leverage_limit": 2.0,           # Max 2x leverage
  "stop_loss_pct": 0.03,           # 3% stop loss per trade
}`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Real-Time Monitoring <span className="text-sm font-normal text-amber-400/90">(Planned, Phase III)</span></h2>
          <p className="text-slate-300 mb-4">
            Today: backtest and validation results in the desktop dashboard. Target (Phase III): risk metrics tracked in real time and surfaced through:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Desktop monitoring dashboard (JavaFX — backtest results today).</li>
            <li>• Web interface dashboards (roadmap).</li>
            <li>• Prometheus metrics endpoints (roadmap).</li>
            <li>• Slack / email / PagerDuty alerts on limit violations (roadmap).</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
