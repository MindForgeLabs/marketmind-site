export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Security</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <p className="text-slate-300 mb-6">
            MarketMind is designed with security as a first-class concern. All components implement
            defense-in-depth with multiple layers of protection.
          </p>

          <div className="space-y-4">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Encryption</h3>
              <p className="text-slate-400">
                All data is encrypted in transit (TLS 1.3) and at rest (AES-256 or better).
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Access Control</h3>
              <p className="text-slate-400">
                Role-based access control with least-privilege defaults for all services.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Audit Logging</h3>
              <p className="text-slate-400">
                Comprehensive audit trails for configuration changes, deployments, and API calls.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Compliance</h3>
              <p className="text-slate-400">
                Designed to run on SOC 2 Type II compliant infrastructure; detailed reports available on request.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Report a Vulnerability</h2>
          <p className="text-slate-300">
            If you discover a security issue, please email{" "}
            <a href="mailto:security@marketmind.ai" className="text-emerald-400 hover:underline">
              security@marketmind.ai
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
