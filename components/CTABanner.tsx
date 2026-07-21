export default function CTABanner() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 rounded-3xl overflow-hidden text-center bg-gradient-to-br from-[#4F46E5]/30 to-[#10B981]/20 border border-[#4F46E5]/30">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 to-[#10B981]/10 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[#10B981] text-sm font-semibold uppercase tracking-widest mb-4">Get Started Today</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Ready to put your marketing <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#10B981]"> on autopilot?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10">
              Book a free 30-minute demo call. We'll show you exactly how MarketPilot works and set up your account within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-[#10B981]/25 hover:scale-105">
                📅 Book a Free Demo
              </a>
              <a href="https://wa.me/2348060658537" target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg rounded-xl transition-all">
                💬 WhatsApp Us Now
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-6">No payment required for the demo. No commitment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
