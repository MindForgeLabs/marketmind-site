export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="text-xl text-slate-300 mb-8">
          MarketMind is an internal-first platform. Pricing is available on request for approved partners.
        </p>

        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
