export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Integrations</h1>
        <p className="text-slate-300 mb-8">
          MarketMind is designed to integrate with data providers, execution venues, and monitoring. Broker integrations (e.g. Interactive Brokers) and live execution are planned (Phase III); no live broker execution today.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Data Providers</h3>
            <p className="text-xs text-amber-400/90 mb-2">Planned (Phase II/III). Partial today: file/Yahoo/FRED daily path.</p>
            <ul className="space-y-2 text-slate-400">
              <li>• Polygon.io</li>
              <li>• Alpha Vantage</li>
              <li>• Interactive Brokers</li>
              <li>• Custom feeds via gRPC / REST</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Execution</h3>
            <p className="text-xs text-amber-400/90 mb-2">Planned (Phase III). No live broker execution today.</p>
            <ul className="space-y-2 text-slate-400">
              <li>• FIX protocol</li>
              <li>• Alpaca</li>
              <li>• Interactive Brokers</li>
              <li>• Custom broker adapters</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Monitoring</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Prometheus + Grafana</li>
              <li>• DataDog</li>
              <li>• New Relic</li>
              <li>• Custom dashboards</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Notifications</h3>
            <ul className="space-y-2 text-slate-400">
              <li>• Slack</li>
              <li>• PagerDuty</li>
              <li>• Email</li>
              <li>• Custom webhooks</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
