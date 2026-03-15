export default function WebSocketAPIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">WebSocket API Reference</h1>
        <p className="text-slate-300 mb-4">
          Real-time streaming API for market data, signals, and position updates.
        </p>
        <p className="text-slate-400">
          The WebSocket API is designed for dashboards and real-time monitoring. Clients can subscribe to
          strategy feeds, metrics channels, and PnL streams with a single persistent connection.
        </p>
      </div>
    </main>
  );
}
