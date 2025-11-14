export default function TelemetryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Telemetry & Observability</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Metrics</h2>
          <p className="text-slate-300 mb-4">
            MarketMind exposes detailed metrics for latency, throughput, errors, and model performance.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Per-endpoint and per-strategy latency distributions.</li>
            <li>• Throughput and queue-depth tracking for each service.</li>
            <li>• Model-specific metrics such as win rate and Sharpe ratio.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Tracing</h2>
          <p className="text-slate-300 mb-4">
            Distributed tracing allows you to follow a request from data ingestion through inference and order routing.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• OpenTelemetry integration.</li>
            <li>• Sampling strategies for high-volume environments.</li>
            <li>• Span attributes for model and strategy IDs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
          <p className="text-slate-300 mb-4">
            Alerting policies can be configured for latency, error rates, risk thresholds, and model drift.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Slack, email, PagerDuty, or custom webhooks.</li>
            <li>• Per-strategy SLOs and SLIs.</li>
            <li>• Automatic escalation paths for critical incidents.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
