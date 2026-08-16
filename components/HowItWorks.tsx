const steps = [
  {
    number: "01",
    title: "Sign Up & Connect Your Accounts",
    description: "Create your account, pick your plan, and connect your social platforms via secure OAuth — no passwords shared. The whole process takes less than 30 minutes and requires zero technical skills.",
    icon: "📱",
  },
  {
    number: "02",
    title: "Configure Your Brand DNA",
    description: "Tell the engine about your business — your tone, audience, products, and goals. Our Brand DNA system uses this to make sure every post, blog, and caption sounds exactly like you.",
    icon: "🧬",
  },
  {
    number: "03",
    title: "The Engine Runs. You Focus on Business.",
    description: "From that point, MarketPilot posts daily across all your platforms, boosts your audience, captures leads, and sends you a weekly performance report. You don't touch it — it just runs.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">Simple Setup. Powerful Results.</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Up and running in <span className="text-[#4F46E5]">under 30 minutes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">No technical skills required. You set it up once — the engine handles everything from that point forward.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4F46E5]/50 transition-all group">
              <div className="text-5xl font-black text-[#4F46E5]/20 group-hover:text-[#4F46E5]/40 transition-colors mb-4">
                {step.number}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 text-[#4F46E5] text-2xl z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
