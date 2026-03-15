export default function GrpcAPIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">gRPC API Reference</h1>
        <p className="text-slate-300 mb-4">
          High-performance RPC interface for low-latency integrations with exchange connectors, risk systems,
          and downstream services. <strong className="text-amber-400/90">Planned (Phase II/III).</strong> gRPC services are not yet running; proto/stubs may exist but no inference or streaming service is shipped.
        </p>
        <p className="text-slate-400">
          Detailed protobuf definitions and examples will be published in a future release.
        </p>
      </div>
    </main>
  );
}
