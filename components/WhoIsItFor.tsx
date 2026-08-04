const cards = [
  {
    emoji: "🏪",
    audience: "Small & Medium Businesses",
    pain: "You know you need to post consistently, but you're too busy running your business to create content every day.",
    solution: "MarketPilot posts for you — every single day — across all your platforms. No agency. No hiring. No stress.",
    cta: "Start Automating →",
    href: "https://dashboard.marketpiloting.online/register",
    color: "from-[#4F46E5]/20 to-[#10B981]/10",
    border: "border-[#4F46E5]/30",
  },
  {
    emoji: "🏢",
    audience: "Marketing Agencies",
    pain: "Managing 10+ client social accounts manually is burning out your team and eating into your margins.",
    solution: "White-label MarketPilot under your brand. Manage all client campaigns from one dashboard with built-in approval workflows.",
    cta: "Explore Agency Plan →",
    href: "https://dashboard.marketpiloting.online/register?plan=agency",
    color: "from-[#7C3AED]/20 to-[#F97316]/10",
    border: "border-[#7C3AED]/30",
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">Built For You</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Who is <span className="text-[#4F46E5]">MarketPilot</span> for?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div
              key={c.audience}
              className={`relative p-8 bg-gradient-to-br ${c.color} border ${c.border} rounded-2xl`}
            >
              <p className="text-4xl mb-4">{c.emoji}</p>
              <h3 className="text-xl font-bold text-white mb-3">{c.audience}</h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                <span className="text-red-400 font-medium">The problem: </span>{c.pain}
              </p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                <span className="text-[#10B981] font-medium">The fix: </span>{c.solution}
              </p>
              <a
                href={c.href}
                className="inline-block px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold rounded-xl transition"
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
