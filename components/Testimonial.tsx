export default function Testimonial() {
  return (
    <section className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">Trusted By</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-16">
          Already powering <span className="text-[#4F46E5]">African brands</span>
        </h2>

        <div className="p-8 bg-white/5 border border-[#4F46E5]/30 rounded-2xl relative">
          <div className="text-5xl text-[#4F46E5]/30 font-serif absolute top-4 left-6">"</div>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 relative z-10">
            MarketPilot has completely transformed how we handle social media. It posts daily across all our platforms,
            grows our Telegram community automatically, and the weekly reports keep us informed without lifting a finger.
            Our reach has grown significantly since we started.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#10B981] rounded-full flex items-center justify-center text-white font-bold text-lg">
              R
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">Marketing Team</p>
              <p className="text-gray-400 text-sm">A leading African news platform, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Stats from live system */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          {[
            { value: "661+", label: "Telegram Members Grown" },
            { value: "71+", label: "Posts Auto-Published" },
            { value: "6", label: "Platforms Managed" },
          ].map((s) => (
            <div key={s.label} className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-2xl font-bold text-[#10B981]">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
