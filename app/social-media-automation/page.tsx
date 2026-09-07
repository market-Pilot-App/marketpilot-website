import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Social Media Automation for African SMEs — MarketPilot",
  description: "Automate your social media posting across Facebook, Instagram, LinkedIn, Telegram, TikTok, YouTube and more. AI writes and publishes daily content for your brand — no agency needed.",
  keywords: "social media automation Nigeria, auto-post Facebook Instagram Africa, AI social media manager Nigerian SME, automated posting tool Africa",
  alternates: { canonical: "/social-media-automation" },
  openGraph: {
    title: "Social Media Automation for African SMEs — MarketPilot",
    description: "AI writes and auto-posts daily content across 9 platforms. No agency. No hiring. Just consistent growth on autopilot.",
    url: "https://www.marketpiloting.com/social-media-automation",
    siteName: "MarketPilot",
    type: "website",
  },
};

const platforms = [
  { icon: "📘", name: "Facebook", detail: "3–12 posts/day" },
  { icon: "📸", name: "Instagram", detail: "Posts + Stories" },
  { icon: "💼", name: "LinkedIn", detail: "Professional content" },
  { icon: "✈️", name: "Telegram", detail: "Channel broadcasts" },
  { icon: "🐦", name: "X / Twitter", detail: "Auto-tweet + boost" },
  { icon: "🎵", name: "TikTok", detail: "AI captions + boost" },
  { icon: "▶️", name: "YouTube", detail: "Video publishing" },
  { icon: "📝", name: "Blog", detail: "SEO articles weekly" },
  { icon: "🌐", name: "Website", detail: "Traffic boost" },
];

const benefits = [
  { stat: "240+", label: "Posts published per month on Growth plan" },
  { stat: "9", label: "Platforms posted to simultaneously" },
  { stat: "24/7", label: "Runs without breaks, sick days, or holidays" },
  { stat: "72hrs", label: "First post live after signup on Micro plan" },
];

const faqs = [
  {
    q: "Do I need to write any content myself?",
    a: "No. MarketPilot's AI generates all content using your Brand DNA — your tone, keywords, and audience. You review and approve, or let it post automatically.",
  },
  {
    q: "Which platforms does it post to?",
    a: "Facebook, Instagram, LinkedIn, Telegram, X/Twitter, TikTok, YouTube, Blog, and your AI-generated website. Up to 9 platforms depending on your plan.",
  },
  {
    q: "How is this different from hiring a social media manager?",
    a: "A social media manager costs ₦80,000–₦200,000/month and works 8 hours a day. MarketPilot costs from ₦5,999/month and runs 24/7 — generating more posts, on more platforms, with zero management overhead.",
  },
  {
    q: "Can I approve posts before they go live?",
    a: "Yes. Enable the Post Approval setting in your dashboard and every post goes to your inbox for review before publishing.",
  },
];

export default function SocialMediaAutomationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4F46E5]/20 rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#4F46E5]/20 border border-[#4F46E5]/40 rounded-full text-sm text-[#818CF8] mb-6">
              📅 Social Media Automation
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Social Media Automation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#10B981]">
                Built for African SMEs
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              MarketPilot's AI writes brand-specific content daily and auto-posts across 9 platforms simultaneously.
              No agency. No hiring. No stress. Your brand stays visible 24/7 — while you run your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://dashboard.marketpiloting.com/register"
                className="px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-[#10B981]/25">
                🚀 Start Automating — From ₦5,999/mo
              </a>
              <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg rounded-xl transition-all">
                📅 Book a Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 border-y border-white/10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.stat} className="text-center">
                <p className="text-4xl font-black text-[#10B981] mb-2">{b.stat}</p>
                <p className="text-gray-400 text-sm">{b.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Posts to 9 Platforms Simultaneously</h2>
              <p className="text-gray-400 max-w-xl mx-auto">One piece of content, adapted and published across every platform your audience uses — automatically.</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4">
              {platforms.map((p) => (
                <div key={p.name} className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-[#4F46E5]/50 transition-all">
                  <span className="text-3xl">{p.icon}</span>
                  <p className="text-white text-xs font-semibold">{p.name}</p>
                  <p className="text-gray-500 text-xs">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How the Automation Works</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Set Up Your Brand DNA", body: "Tell MarketPilot your business name, niche, tone, and target audience. The AI learns your brand voice in minutes." },
                { step: "2", title: "AI Generates Daily Content", body: "Every day, the engine creates fresh posts tailored to your brand — captions, hashtags, and images — ready to publish." },
                { step: "3", title: "Auto-Posts Across All Platforms", body: "Posts go live on your connected platforms at optimal times. You get a weekly report showing reach, likes, and growth." },
              ].map((s) => (
                <div key={s.step} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-[#4F46E5] flex items-center justify-center text-white font-bold text-lg mb-4">{s.step}</div>
                  <h3 className="text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* vs Hiring */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">MarketPilot vs. Hiring a Social Media Manager</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-red-950/30 border border-red-800/40 rounded-2xl">
                <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">Hiring a Manager</p>
                <ul className="space-y-3">
                  {["₦80,000–₦200,000/month salary", "Posts 1–2x per day at most", "Takes weekends and public holidays off", "Covers 1–2 platforms only", "Needs constant briefing and approval", "Quits, gets sick, or loses motivation"].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-red-400 mt-0.5">✗</span>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-[#4F46E5]/10 border border-[#4F46E5]/40 rounded-2xl">
                <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-4">MarketPilot Automation</p>
                <ul className="space-y-3">
                  {["From ₦5,999/month", "Up to 12 posts/day across 9 platforms", "Runs 24/7 — no breaks, no holidays", "Covers all 9 platforms simultaneously", "AI generates content from your Brand DNA", "Never quits, never gets sick"].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-[#10B981] mt-0.5">✓</span>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-r from-[#4F46E5]/20 to-[#10B981]/20 border border-white/10 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Social Media?</h2>
            <p className="text-gray-400 mb-8">Join hundreds of African businesses growing on autopilot. <Link href="/#pricing" className="text-[#10B981] hover:underline">View all pricing plans</Link> or start today.</p>
            <a href="https://dashboard.marketpiloting.com/register"
              className="inline-block px-10 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg rounded-xl transition-all">
              🚀 Get Started — From ₦5,999/mo
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
