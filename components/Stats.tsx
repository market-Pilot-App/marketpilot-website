const stats = [
  { value: "71+", label: "Automated Posts Published", icon: "📝" },
  { value: "661+", label: "Telegram Community Members", icon: "✈️" },
  { value: "6", label: "Platforms Supported", icon: "🌍" },
  { value: "24/7", label: "Fully Autonomous Operation", icon: "🤖" },
];

export default function Stats() {
  return (
    <section className="py-16 px-4 border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-10 uppercase tracking-widest">
          Real results from our live system
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4F46E5]/50 transition-colors">
              <p className="text-3xl mb-2">{s.icon}</p>
              <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#10B981] mb-2">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
