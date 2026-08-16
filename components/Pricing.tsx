"use client";
import { useState } from "react";

const YEARLY_DISCOUNT = 0.30;

const plans = [
  {
    name: "Solo",
    monthlyNaira: 29999,
    monthlyUSD: 19,
    description: "For solo entrepreneurs and micro-businesses taking their first step into automated marketing.",
    features: [
      "2 platforms (Facebook + X/Twitter)",
      "*X/Twitter: requires optional Twitter API ($100/mo from developer.x.com) — without it, captions saved to Content Library",
      "📅 3 posts/day — 90 posts/month",
      "🤖 AI content generation (Brand DNA)",
      "🚀 AI-Optimized Organic Reach (likes + views)",
      "🎬 4 video posts/month",
      "📰 1 blog post/week",
      "🌐 1 AI landing page",
      "💡 3 news hijacks/week",
      "📊 Analytics dashboard",
      "📧 Weekly email report",
      "First post live within 48hrs",
    ],
    registerHref: "https://dashboard.marketpiloting.com/register?plan=solo",
    color: "border-white/10",
    popular: false,
  },
  {
    name: "Starter",
    monthlyNaira: 75000,
    monthlyUSD: 47,
    description: "For small businesses ready to build a consistent presence across multiple platforms.",
    features: [
      "6 platforms (Facebook, X/Twitter, Instagram, Telegram, TikTok, Blog)",
      "📅 5 posts/day — 150 posts/month",
      "🤖 AI content generation (Brand DNA)",
      "🚀 Smart Engagement Scheduling",
      "👥 Followers/subscribers boost (all platforms)",
      "🎬 8 video posts/month",
      "▶️ YouTube: 1 video/week + views boost",
      "📰 2 blog posts/week",
      "🌐 1 AI landing page",
      "💡 5 news hijacks/week",
      "📊 Analytics dashboard",
      "📧 Weekly email report",
      "First post live within 24hrs",
    ],
    registerHref: "https://dashboard.marketpiloting.com/register?plan=starter",
    color: "border-white/10",
    popular: false,
  },
  {
    name: "Growth",
    monthlyNaira: 150000,
    monthlyUSD: 94,
    description: "For growing brands that want full multi-platform automation and aggressive audience growth.",
    features: [
      "7 platforms (Facebook, X/Twitter, Instagram, LinkedIn, Telegram, TikTok, Blog)",
      "*TikTok: AI content + organic boost only",
      "*X/Twitter: connect via OAuth — auto-post + boost included",
      "📅 8 posts/day — 240 posts/month",
      "🤖 AI content + Brand DNA evolution",
      "🚀 AI-Optimized Organic Reach across all platforms",
      "👥 Followers/subscribers boost (all platforms)",
      "🎬 20 video posts/month",
      "▶️ YouTube: 3 videos/week + views & subscriber boost",
      "📰 3 blog posts/week",
      "🌐 Unlimited AI landing pages",
      "💡 Daily news hijacking",
      "🔍 Competitor monitoring (3 competitors)",
      "👥 Full CRM + lead capture",
      "📊 Advanced analytics + platform breakdown",
      "⚡ Priority WhatsApp support",
      "First post live within 12hrs",
    ],
    registerHref: "https://dashboard.marketpiloting.com/register?plan=growth",
    color: "border-[#4F46E5]",
    popular: true,
  },
  {
    name: "Pro",
    monthlyNaira: 250000,
    monthlyUSD: 156,
    description: "For serious single-brand businesses that want agency-level power without managing multiple accounts.",
    features: [
      "1 brand — full agency-level automation",
      "9 platforms (Facebook, X/Twitter, Instagram, LinkedIn, Telegram, TikTok, Blog, YouTube, Website)",
      "*TikTok: AI content + organic boost only",
      "*X/Twitter: connect via OAuth — auto-post + boost included",
      "📅 12 posts/day — 360 posts/month",
      "🤖 AI content + daily Brand DNA evolution",
      "🚀 Maximum AI-Optimized Organic Reach",
      "👥 Followers/subscribers boost (all platforms)",
      "🎬 Unlimited video posts",
      "📰 Daily blog posts",
      "🌐 Unlimited AI landing pages",
      "💡 News hijacking every 4 hours",
      "🔍 Unlimited competitor monitoring",
      "👥 Full CRM + AI broadcast",
      "🌍 Website & YouTube traffic boost",
      "📊 Full analytics",
      "⚡ Dedicated WhatsApp support",
      "First post live within 6hrs",
    ],
    registerHref: "https://dashboard.marketpiloting.com/register?plan=pro",
    color: "border-[#F97316]",
    popular: false,
  },
  {
    name: "Agency",
    monthlyNaira: 450000,
    monthlyUSD: 281,
    description: "For marketing agencies and multi-brand businesses. Manage up to 11 brands under one account.",
    features: [
      "11 brands/sub-campaigns under 1 account",
      "9 platforms per brand (Facebook, X/Twitter, Instagram, LinkedIn, Telegram, TikTok, Blog, YouTube, Website)",
      "*TikTok: AI content + organic boost only",
      "*X/Twitter: connect via OAuth — auto-post + boost included",
      "📅 12 posts/day — 360 posts/month per brand",
      "🤖 AI content + daily Brand DNA evolution",
      "🚀 Maximum AI-Optimized Organic Reach per brand",
      "👥 Followers/subscribers boost (all platforms)",
      "🎬 Unlimited video posts",
      "📰 Daily blog posts per brand",
      "🌐 Unlimited AI landing pages",
      "💡 News hijacking every 4 hours",
      "🔍 Unlimited competitor monitoring",
      "👥 Full CRM + AI broadcast",
      "🌍 Website & YouTube traffic boost",
      "📊 Full analytics per brand",
      "⚡ Dedicated WhatsApp support",
      "First post live within 6hrs",
    ],
    registerHref: "https://dashboard.marketpiloting.com/register?plan=agency",
    color: "border-[#10B981]",
    popular: false,
  },
];

function formatNaira(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

function CustomNegotiateCard() {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `Hi MarketPilot! My name is ${name || "there"} and my marketing budget is ${budget || "flexible"}. I'd like to discuss what you can build for me.`
    );
    window.open(`https://wa.me/2348023131379?text=${msg}`, "_blank");
  };

  return (
    <div className="relative p-8 bg-gradient-to-br from-[#F97316]/10 to-[#4F46E5]/10 border-2 border-[#F97316]/50 rounded-2xl flex flex-col">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#F97316] text-white text-xs font-bold rounded-full whitespace-nowrap">
        💬 Let's Negotiate
      </div>
      <div className="mb-5 mt-2">
        <h3 className="text-xl font-bold text-white mb-1">Tailored Solution</h3>
        <p className="text-gray-400 text-sm">
          Need a tailored solution? Contact our team to build a custom package that aligns with your specific business goals, scale, and budget.
        </p>
      </div>
      <div className="flex-1 space-y-3 mb-6">
        <div>
          <label className="text-xs text-gray-400 mb-1.5 block">Your Name</label>
          <input
            type="text"
            placeholder="e.g. Chidi Okafor"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F97316]/60"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1.5 block">Your Monthly Budget</label>
          <input
            type="text"
            placeholder="e.g. ₦30,000 or $20"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F97316]/60"
          />
        </div>
        <ul className="space-y-2 pt-1">
          {[
            "We work with your budget",
            "Scaled package built around you",
            "No pressure — just a conversation",
            "Start small, upgrade as you grow",
          ].map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-[#F97316] mt-0.5 flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleSubmit}
        className="block w-full text-center py-3 px-6 rounded-xl font-bold text-sm bg-[#F97316] hover:bg-[#EA6C0A] text-white transition-all shadow-lg shadow-[#F97316]/30"
      >
        💬 Chat With Us on WhatsApp →
      </button>
    </div>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">Simple Pricing</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Invest in <span className="text-[#4F46E5]">consistent growth</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime. All plans include a free demo call before you pay.
          </p>

          {/* Scarcity notice */}
          <div className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full">
            <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse flex-shrink-0" />
            <span className="text-sm text-[#F97316] font-medium">
              We onboard a maximum of 10 new clients per week to maintain setup quality — slots are limited.
            </span>
          </div>

          {/* Monthly / Yearly toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!yearly ? "text-white" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${yearly ? "bg-[#4F46E5]" : "bg-gray-700"}`}
            >
              <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${yearly ? "translate-x-8" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-medium ${yearly ? "text-white" : "text-gray-500"}`}>
              Yearly
              <span className="ml-2 px-2 py-0.5 bg-[#10B981]/20 text-[#10B981] text-xs rounded-full font-bold">Save 30%</span>
            </span>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {plans.map((plan) => {
            const monthlyNaira = plan.monthlyNaira;
            const yearlyNaira = Math.round(monthlyNaira * 0.70);
            const yearlyTotal = yearlyNaira * 12;
            const saving = monthlyNaira * 12 - yearlyTotal;
            const displayNaira = yearly ? yearlyNaira : monthlyNaira;
            const displayUSD = yearly ? Math.round(plan.monthlyUSD * 0.70) : plan.monthlyUSD;
            const href = yearly
              ? `${plan.registerHref}&billing=yearly`
              : `${plan.registerHref}&billing=monthly`;

            return (
              <div
                key={plan.name}
                className={`relative p-6 bg-white/5 border-2 ${plan.color} rounded-2xl flex flex-col ${plan.popular ? "shadow-2xl shadow-[#4F46E5]/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#4F46E5] text-white text-xs font-bold rounded-full whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">{plan.description}</p>

                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-black text-white">{formatNaira(displayNaira)}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">${displayUSD}/month</p>

                  {yearly && (
                    <div className="mt-2 space-y-0.5">
                      <p className="text-[#10B981] text-xs font-medium">Billed {formatNaira(yearlyTotal)}/year</p>
                      <p className="text-gray-500 text-xs">You save {formatNaira(saving)}</p>
                    </div>
                  )}
                  {!yearly && (
                    <p className="text-gray-500 text-xs mt-1">
                      or {formatNaira(yearlyNaira)}/mo billed yearly
                    </p>
                  )}
                </div>

                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  className={`block text-center py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                    plan.popular
                      ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg shadow-[#4F46E5]/30"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  Get Started →
                </a>
                <a
                  href="https://calendly.com/marketpilot2026/30min"
                  target="_blank"
                  className="block text-center py-2 px-4 rounded-xl text-xs text-gray-500 hover:text-gray-300 transition-all mt-2"
                >
                  or Book a Demo
                </a>
              </div>
            );
          })}

          {/* Custom negotiate card */}
          <CustomNegotiateCard />
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Not sure which plan?{" "}
          <a href="https://wa.me/2348023131379" target="_blank" className="text-[#10B981] hover:underline">
            Chat with us on WhatsApp
          </a>{" "}
          and we'll recommend the best fit.
        </p>

        {/* Cost of Inaction */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-red-950/30 border border-red-800/40 rounded-2xl">
            <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-3">The Alternative</p>
            <h3 className="text-xl font-bold text-white mb-4">Hiring a social media team</h3>
            <ul className="space-y-3">
              {[
                "Social media manager: ₦100,000/month",
                "Content writer: ₦80,000/month",
                "Graphic designer: ₦70,000/month",
                "Blog writer: ₦50,000/month",
                "They still need your time to approve content",
                "They take sick days, public holidays, and breaks",
                "Total: ₦300,000+/month — and you're still managing them",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-[#4F46E5]/10 border border-[#4F46E5]/40 rounded-2xl">
            <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-3">MarketPilot Growth Plan</p>
            <h3 className="text-xl font-bold text-white mb-4">₦150,000/month — full AI marketing engine</h3>
            <ul className="space-y-3">
              {[
                "8 posts/day across 6 platforms — 240 posts/month",
                "AI generates every post using your Brand DNA",
                "AI-optimized scheduling maximizes organic reach across all platforms",
                "Writes and publishes 3 blog posts/week",
                "Captures leads and manages your CRM automatically",
                "Runs 24/7 — no sick days, no holidays, no drama",
                "Weekly performance reports delivered to your inbox",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 30-Day Guarantee */}
        <div className="mt-10 p-8 bg-gradient-to-r from-[#10B981]/10 to-[#4F46E5]/10 border border-[#10B981]/30 rounded-2xl text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h3 className="text-2xl font-bold text-white mb-3">The MarketPilot 30-Day Visibility Guarantee</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
            If you complete setup, connect your platforms within 48 hours of signup, and publish consistently using our AI recommendations,
            we guarantee a measurable increase in your total post reach and impressions within 30 days.
            If we miss this mark, we will provide an additional 30 days of strategy optimization at no extra cost.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            Applies to organic reach/impressions only. Does not cover third-party platform algorithm changes, account restrictions, or external follower purges.
          </p>
        </div>

      </div>
    </section>
  );
}
