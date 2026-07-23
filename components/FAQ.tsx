"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is my social media account safe?",
    a: "Yes. We use official API access tokens — the same method used by major social media management tools. We never store your passwords. You can revoke access at any time from your social media settings.",
  },
  {
    q: "Do I need any technical skills?",
    a: "None at all. You just provide your brand details and social media credentials. We handle the entire setup and ongoing operation. You only need to check your weekly report email.",
  },
  {
    q: "How long does setup take?",
    a: "Standard setup is completed within 24 hours of receiving your credentials. Agency plan clients get same-day setup.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. You can cancel your subscription at any time with no cancellation fees. We operate on a monthly basis.",
  },
  {
    q: "What platforms do you support?",
    a: "We post organically to Facebook, Instagram, LinkedIn, Telegram and X/Twitter. TikTok is supported for audience boosting (likes, views, followers) via our SMM system. Blog auto-publishing is also included on Growth and Agency plans.",
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
