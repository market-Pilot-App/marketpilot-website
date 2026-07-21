"use client";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$97",
    naira: "₦150,000",
    period: "/month",
    description: "Perfect for small businesses ready to automate their social media presence.",
    features: [
      "3 platforms (Facebook, Instagram, LinkedIn)",
      "AI content generation daily",
      "Basic audience boost",
      "Weekly email report",
      "WhatsApp bot setup",
      "Analytics dashboard",
      "24h setup time",
    ],
    cta: "Book a Demo",
    color: "border-white/10",
    popular: false,
  },
  {
    name: "Growth",
    price: "$197",
    naira: "₦300,000",
    period: "/month",
    description: "For growing brands that need full multi-platform presence and aggressive audience growth.",
    features: [
      "6 platforms (all supported)",
      "AI content + video posting",
      "Daily audience boost (Nigerian targeted)",
      "Blog auto-publishing weekly",
      "Email marketing automation",
      "WhatsApp broadcast list",
      "Advanced analytics + A/B testing",
      "Priority setup (12h)",
    ],
    cta: "Book a Demo",
    color: "border-[#4F46E5]",
    popular: true,
  },
  {
    name: "Agency",
    price: "$497",
    naira: "₦750,000",
    period: "/month",
    description: "For agencies and large brands that need maximum reach and white-glove service.",
    features: [
      "Everything in Growth",
      "Unlimited platform posting",
      "Maximum daily boost budget",
      "Competitor monitoring",
      "Lead capture + CRM",
      "Custom content angles",
      "Dedicated account manager",
      "Same-day setup",
    ],
    cta: "Book a Demo",
    color: "border-[#10B981]",
    popular: false,
  },
];

function CustomBudgetCard() {
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!budget.trim()) return;
    const msg = encodeURIComponent(
      `Hi MarketPilot! My name is ${name || "there"} and my monthly marketing budget is ${budget}. I'd like to discuss what you can do for me.`
    );
    window.open(`https://wa.me/2348060658537?text=${msg}`, "_blank");
  };

  return (
    <div className="relative p-8 bg-gradient-to-br from-[#F97316]/10 to-[#4F46E5]/10 border-2 border-[#F97316]/50 rounded-2xl flex flex-col">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#F97316] text-white text-xs font-bold rounded-full whitespace-nowrap">
        💬 Let's Negotiate
      </div>

      <div className="mb-6 mt-2">
        <h3 className="text-xl font-bold text-white mb-1">Custom Plan</h3>
        <p className="text-gray-400 text-sm">
          Have a different budget? Tell us what you can afford and we'll build a plan around it.
        </p>
      </div>

      <div className="flex-1 space-y-4 mb-6">
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
            placeholder="e.g. ₦50,000 or $30"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#F97316]/60"
          />
        </div>
        <ul className="space-y-2 pt-2">
          {["We work with any budget", "Custom features for your needs", "Flexible payment options", "No pressure, just a conversation"].map((f, i) => (
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
        💬 Tell Us Your Budget →
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">Simple Pricing</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Invest in <span className="text-[#4F46E5]">guaranteed growth</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">No hidden fees. No long-term contracts. Cancel anytime. All plans include a free demo call before you pay.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-8 bg-white/5 border-2 ${plan.color} rounded-2xl flex flex-col ${plan.popular ? "shadow-2xl shadow-[#4F46E5]/20" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#4F46E5] text-white text-xs font-bold rounded-full whitespace-nowrap">
                  ⭐ Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                </div>
                <p className="text-[#10B981] text-sm font-medium mt-1">{plan.naira}/month</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-[#10B981] mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
                className={`block text-center py-3 px-6 rounded-xl font-bold text-sm transition-all ${
                  plan.popular
                    ? "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-lg shadow-[#4F46E5]/30"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}>
                {plan.cta} →
              </a>
            </div>
          ))}
          <CustomBudgetCard />
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Not sure which plan? <a href="https://wa.me/2348060658537" target="_blank" className="text-[#10B981] hover:underline">Chat with us on WhatsApp</a> and we'll recommend the best fit.
        </p>
      </div>
    </section>
  );
}
