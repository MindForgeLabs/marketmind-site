export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-slate-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By using MarketMind, you agree to be bound by these Terms of Service and any future updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Trading Risks</h2>
            <p>
              Trading involves substantial risk of loss. Past performance does not guarantee future results. You
              are solely responsible for all trading decisions and outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. System Availability</h2>
            <p>
              While we aim for high availability, we do not guarantee uninterrupted service. Maintenance windows
              and outages may occur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p>
              All software, models, and documentation are the property of MarketMind or its licensors. Customer
              strategies and data remain the property of the customer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Contact</h2>
            <p>
              Questions about these terms? Email{" "}
              <a href="mailto:legal@marketmind.ai" className="text-emerald-400 hover:underline">
                legal@marketmind.ai
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
