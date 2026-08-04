import Link from "next/link";

export default function Guarantee() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#10B981]/10 to-[#4F46E5]/10 border border-[#10B981]/30 rounded-3xl p-8 sm:p-12 text-center">
        <div className="text-5xl mb-4">🛡️</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          7-Day Money-Back Guarantee
        </h2>
        <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-xl mx-auto">
          Try MarketPilot risk-free. If you&apos;re not satisfied within your first 7 days, contact us on WhatsApp and we&apos;ll refund you — no long arguments.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
          <div className="bg-white/5 rounded-2xl p-4">
            <p className="text-[#10B981] font-bold text-sm mb-1">✅ Under 15 posts generated</p>
            <p className="text-gray-400 text-xs">Full refund minus ₦10,000 setup fee</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-4">
            <p className="text-[#10B981] font-bold text-sm mb-1">✅ 15+ posts generated</p>
            <p className="text-gray-400 text-xs">Proportional refund for unused days minus ₦10,000 setup fee</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-4">
            <p className="text-[#10B981] font-bold text-sm mb-1">✅ Processed in 5–7 days</p>
            <p className="text-gray-400 text-xs">Refund sent to your original payment method</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs">
          Boost credits already spent are non-refundable. Full terms in our{" "}
          <Link href="/terms" className="text-[#10B981] hover:underline">Refund Policy</Link>.
          Contact: <a href="https://wa.me/2348023131379" className="text-[#10B981] hover:underline">WhatsApp +2348023131379</a>
        </p>
      </div>
    </section>
  );
}
