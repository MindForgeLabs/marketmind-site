export default function DesktopPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Desktop Monitoring Dashboard</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">JavaFX Application</h2>
          <p className="text-slate-300 mb-4">
            The desktop dashboard provides a rich, low-latency interface for live trading operations.
          </p>
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Live PnL and exposure tracking.</li>
              <li>• Strategy health and status indicators.</li>
              <li>• Real-time positions and orders view.</li>
              <li>• System resource and latency monitoring.</li>
              <li>• Manual overrides and kill-switch controls.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
          <p className="text-slate-300 mb-4">
            The desktop application connects to several backend services:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Spring Boot</strong> backend for REST and WebSocket APIs.</li>
            <li>• <strong>Prometheus</strong> for metrics aggregation.</li>
            <li>• <strong>PostgreSQL</strong> for historical data.</li>
            <li>• <strong>Redis</strong> as a real-time state cache.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm">
            <div className="text-slate-400 mb-2"># Build desktop application</div>
            <div className="text-emerald-400 mb-4">mvn clean package</div>

            <div className="text-slate-400 mb-2"># Run</div>
            <div className="text-emerald-400">java -jar target/marketmind-desktop.jar</div>
          </div>
        </section>
      </div>
    </main>
  );
}
