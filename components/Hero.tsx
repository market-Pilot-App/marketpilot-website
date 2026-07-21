import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4F46E5]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#4F46E5]/20 border border-[#4F46E5]/40 rounded-full text-sm text-[#818CF8] mb-8">
          <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
          Africa's First Autonomous Marketing Engine
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Automate Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#10B981]">
            Social Media.
          </span>
          <br />
          Guarantee Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#4F46E5]">
            Growth.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          MarketPilot posts daily to Facebook, Instagram, LinkedIn, Telegram & more —
          generates AI content, boosts your audience, and sends you weekly reports.
          <span className="text-white font-medium"> You focus on your business. We handle your growth.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
            className="w-full sm:w-auto px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-[#10B981]/25 hover:shadow-[#10B981]/40 hover:scale-105">
            📅 Book a Free Demo
          </a>
          <a href="https://wa.me/2348060658537" target="_blank"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg rounded-xl transition-all">
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Platform icons */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-xs text-gray-500 mr-2">Posts to:</span>
          {[
            { icon: "📘", name: "Facebook" },
            { icon: "📸", name: "Instagram" },
            { icon: "💼", name: "LinkedIn" },
            { icon: "✈️", name: "Telegram" },
            { icon: "🐦", name: "X/Twitter" },
            { icon: "🎵", name: "TikTok" },
          ].map((p) => (
            <span key={p.name} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
              {p.icon} {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
