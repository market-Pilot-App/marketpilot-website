"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do I get a real website or just a landing page?",
    a: "From Solo plan upwards, you get a full AI-generated multi-page website — Home, About, Services, Contact, FAQ, and Blog pages — published instantly at your own link (e.g. dashboard.marketpiloting.com/sites/yourbrand). Pro and Agency plans include a custom domain so it shows as www.yourbusiness.com. The Micro plan includes a single AI landing page. Every section is editable from your dashboard, and you can revert to the original AI version at any time.",
  },
  {
    q: "What happens to my website if I cancel or my plan expires?",
    a: "Your website stays live — your customers can still visit it and submit leads. We never take your site offline. However, editing your website (content, theme, domain, SEO) is locked until you renew. This means your online presence is always protected, but you need an active plan to make changes.",
  },
  {
    q: "Is my social media account safe?",
    a: "Yes. We use official API access tokens — the same method used by major social media management tools. We never store your passwords. You can revoke access at any time from your social media settings.",
  },
  {
    q: "Do I need any technical skills?",
    a: "None at all. The dashboard is built for business owners, not developers. You connect your social accounts via a simple OAuth button (like logging in with Google), fill in your brand details, and the engine takes over. If you can use WhatsApp, you can set up MarketPilot.",
  },
  {
    q: "How long does setup take?",
    a: "Most clients are fully set up and live within 30 minutes to a few hours. You connect your accounts, configure your Brand DNA, and the engine starts generating and scheduling posts immediately. Your first post goes live within 6–48 hours depending on your plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. You can cancel your subscription at any time with no cancellation fees. We operate on a monthly basis.",
  },
  {
    q: "What platforms do you support?",
    a: "We post organically to Facebook, Instagram, LinkedIn, Telegram and X/Twitter. YouTube is supported via our Video Queue — upload a video and it auto-posts to your YouTube channel at the scheduled time (Starter plan and above). X/Twitter full auto-posting requires an optional Twitter API account ($100/month from developer.x.com) — without it, AI-generated captions are saved to your Content Library for manual posting. TikTok is supported for AI content generation and audience boosting (likes, views, followers) via our SMM system. Blog auto-publishing is also included on Growth and Agency plans.",
  },
  {
    q: "Will the content sound like my brand?",
    a: "Yes. During setup our Brand DNA Engine analyses your business and extracts your tone of voice, target audience, key messages and words to always use or avoid. Every post, blog and email is then generated through this Brand DNA layer — so the content sounds like you, not a generic AI.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Common <span className="text-[#4F46E5]">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`border rounded-xl overflow-hidden transition-colors ${open === i ? "border-[#4F46E5]/50 bg-white/5" : "border-white/10 bg-white/[0.02]"}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
                <span className={`text-[#4F46E5] text-xl transition-transform flex-shrink-0 ml-4 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
