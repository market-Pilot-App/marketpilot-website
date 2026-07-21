const steps = [
  {
    number: "01",
    title: "Share Your Brand Details",
    description: "You give us your brand name, social media credentials, website URL and target audience. Setup takes less than 24 hours.",
    icon: "📋",
  },
  {
    number: "02",
    title: "We Configure Your Engine",
    description: "We set up your autonomous marketing engine — AI content angles, posting schedule, boost settings and analytics dashboard.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Sit Back & Watch It Grow",
    description: "MarketPilot posts daily, boosts your audience, captures leads and sends you weekly performance reports. Fully automated.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">We Simplify the Process</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Up and running within <span className="text-[#4F46E5]">24–72 hours</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">No technical skills required. We handle everything from setup to daily operation.</p>
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
