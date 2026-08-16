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
    title: "Daily AI Content, Written for Your Brand",
    description: "Our proprietary AI engine generates fresh, engaging content daily — tailored to your brand voice and target audience.",
    color: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    icon: "📅",
    title: "Auto-Post to 9 Platforms, Every Single Day",
    description: "Posts automatically to Facebook, Instagram, LinkedIn, Telegram, X/Twitter, YouTube and more on a smart schedule. TikTok audience boosting included. X/Twitter requires optional Twitter API access.",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    icon: "🚀",
    title: "Grow Your Audience Without Spending on Ads",
    description: "We strategically schedule and optimize your content to maximize organic visibility and authentic engagement, strictly adhering to all platform community guidelines.",
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
    title: "Capture Leads While You Sleep",
    description: "Capture leads from your AI landing page and referral links. View, filter and export your leads. Send broadcast emails to your list via Resend.",
    color: "from-[#10B981] to-[#4F46E5]",
  },
  {
    icon: "🎬",
    title: "YouTube & Multi-Platform Video Publishing",
    description: "Upload one video — MarketPilot posts it to YouTube, Facebook, Instagram, LinkedIn and Telegram simultaneously at your scheduled time. AI generates captions automatically. Views, likes and subscriber boosts applied per your plan.",
    color: "from-[#F97316] to-[#7C3AED]",
    badge: "✨ New",
  },
  {
    icon: "📰",
    title: "Blog Auto-Publishing",
    description: "AI writes and publishes SEO-optimised blog articles to your website automatically every week.",
    color: "from-[#7C3AED] to-[#4F46E5]",
  },
  {
    icon: "💬",
    title: "Auto-Reply Inbox",
    description: "AI automatically responds to comments and DMs across your platforms — keeping your audience engaged 24/7 without lifting a finger.",
    color: "from-[#F97316] to-[#4F46E5]",
  },
  {
    icon: "🛍️",
    title: "Product Catalog",
    description: "Showcase your products or services in a clean, shareable catalog. AI auto-generates promotional posts for each item.",
    color: "from-[#4F46E5] to-[#10B981]",
  },
  {
    icon: "📄",
    title: "PDF Monthly Reports",
    description: "A professionally formatted PDF report delivered to your inbox every month — covering reach, growth, posts published and boost activity.",
    color: "from-[#10B981] to-[#7C3AED]",
  },
  {
    icon: "📧",
    title: "Automated Email Reports",
    description: "Weekly performance reports delivered automatically to your inbox — reach, posts published, boost activity and growth summary.",
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
