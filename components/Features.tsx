const features = [
  {
    icon: "🧬",
    title: "Brand DNA Engine",
    description: "AI learns your brand's tone, keywords, and audience during setup. Every post, blog, and email sounds like YOU — not a generic robot.",
    color: "from-[#7C3AED] to-[#4F46E5]",
    badge: "✨ New",
  },
  {
    icon: "🤖",
    title: "AI Content Generation",
    description: "Groq-powered AI generates fresh, engaging content daily tailored to your brand voice and target audience.",
    color: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    icon: "📅",
    title: "Multi-Platform Auto-Posting",
    description: "Posts automatically to Facebook, Instagram, LinkedIn, Telegram and X/Twitter on a smart schedule. TikTok audience boosting included.",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    icon: "🚀",
    title: "Auto Audience Boost",
    description: "Automatically boosts your posts and grows your followers with Nigerian and African targeted audiences daily across all platforms including TikTok.",
    color: "from-[#F97316] to-[#EA580C]",
    badge: "🔥 Most Popular",
  },
  {
    icon: "🌐",
    title: "AI Landing Page Builder",
    description: "No website? We build you one in seconds using AI. Your branded landing page goes live instantly at your own MarketPilot link — ready to capture leads.",
    color: "from-[#10B981] to-[#4F46E5]",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Real-time dashboard showing reach, likes, clicks, engagement trends and daily performance reports.",
    color: "from-[#4F46E5] to-[#10B981]",
  },
  {
    icon: "💬",
    title: "WhatsApp Broadcast",
    description: "Build a WhatsApp subscriber list and blast content directly to your audience — Nigeria's #1 platform.",
    color: "from-[#10B981] to-[#4F46E5]",
  },
  {
    icon: "📰",
    title: "Blog Auto-Publishing",
    description: "AI writes and publishes SEO-optimised blog articles to your website automatically every week.",
    color: "from-[#7C3AED] to-[#4F46E5]",
  },
  {
    icon: "🎯",
    title: "Nigerian & African Targeting",
    description: "All boosts and content are specifically optimised for Nigerian and African audiences for maximum impact.",
    color: "from-[#F97316] to-[#4F46E5]",
  },
  {
    icon: "📧",
    title: "Email Marketing Automation",
    description: "Automated welcome sequences, weekly newsletters and blog notifications sent to your email subscribers.",
    color: "from-[#10B981] to-[#F97316]",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">Everything Included</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Your complete <span className="text-[#4F46E5]">marketing team</span> — automated
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything a full marketing team does, running 24/7 on autopilot for a fraction of the cost.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={i} className="relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4F46E5]/50 transition-all group hover:-translate-y-1">
              {f.badge && (
                <span className="absolute -top-3 left-4 px-3 py-1 bg-[#F97316] text-white text-xs font-bold rounded-full">
                  {f.badge}
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
