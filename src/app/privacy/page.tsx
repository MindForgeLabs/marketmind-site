export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-slate-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
            <p>
              We collect the minimum data necessary to provide and improve the platform, including usage analytics,
              performance metrics, and diagnostic logs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Usage</h2>
            <p>
              Data is used solely for operating the platform, improving performance, and providing support. We do
              not sell customer data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
            <p>
              Trading data and metrics may be retained to satisfy regulatory and compliance requirements. Personal
              information is removed or anonymized upon account termination where feasible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p>
              Questions about privacy? Email{" "}
              <a href="mailto:privacy@marketmind.ai" className="text-emerald-400 hover:underline">
                privacy@marketmind.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
