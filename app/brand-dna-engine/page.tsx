import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brand DNA Engine — AI That Learns Your Brand Voice | MarketPilot",
  description: "MarketPilot's Brand DNA Engine learns your business tone, keywords, and audience. Every post, blog, and email sounds exactly like your brand — not a generic AI robot.",
  keywords: "AI brand voice Nigeria, brand DNA marketing tool Africa, AI content that sounds like my brand, brand consistency automation Nigerian business",
  alternates: { canonical: "/brand-dna-engine" },
  openGraph: {
    title: "Brand DNA Engine — AI That Learns Your Brand Voice | MarketPilot",
    description: "AI learns your tone, keywords, and audience. Every post sounds like you — not a generic robot.",
    url: "https://www.marketpiloting.com/brand-dna-engine",
    siteName: "MarketPilot",
    type: "website",
  },
};

const dnaComponents = [
  { icon: "🎯", title: "Tone of Voice", body: "Professional, casual, bold, friendly — you define it. The AI writes every post in your exact tone, consistently." },
  { icon: "🔑", title: "Brand Keywords", body: "Words and phrases that define your brand. The AI weaves them naturally into every piece of content." },
  { icon: "🚫", title: "Words to Avoid", body: "Competitors' names, off-brand phrases, or anything that doesn't fit your image — the AI never uses them." },
  { icon: "👥", title: "Target Audience", body: "Define who you're speaking to. The AI tailors every post to resonate with your specific customer profile." },
  { icon: "💎", title: "Value Proposition", body: "What makes your business unique. The AI highlights your differentiators in every piece of content." },
  { icon: "📈", title: "Brand Evolution", body: "The DNA evolves as your brand grows. Every change is logged with a reason and date — full audit trail." },
];

const faqs = [
  { q: "How does the Brand DNA Engine learn my brand?", a: "During setup, you fill in your business name, niche, tone of voice, target audience, key phrases, and words to avoid. The AI uses this as the foundation for every piece of content it generates." },
  { q: "Can I update my Brand DNA after setup?", a: "Yes, at any time. Go to Brand DNA in your dashboard, make changes, and all future content will reflect the update. Every change is logged with a timestamp." },
  { q: "What if the AI generates content that doesn't sound like me?", a: "Refine your Brand DNA — add more specific keywords, adjust the tone, or add phrases to avoid. The more detail you provide, the more accurate the output." },
  { q: "Does Brand DNA affect blog posts and emails too?", a: "Yes. Every piece of content MarketPilot generates — social posts, blog articles, email newsletters, and auto-replies — uses your Brand DNA as the source of truth." },
];

export default function BrandDNAEnginePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#7C3AED]/20 rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7C3AED]/20 border border-[#7C3AED]/40 rounded-full text-sm text-[#A78BFA] mb-6">
              🧬 Brand DNA Engine
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
              AI That Learns<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#10B981]">
                Your Exact Brand Voice
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Most AI tools generate generic content that sounds like every other brand. MarketPilot's Brand DNA Engine
              learns your tone, keywords, audience, and values — so every post, blog, and email sounds unmistakably like <em>you</em>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://dashboard.marketpiloting.com/register"
                className="px-8 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-[#7C3AED]/25">
                🧬 Set Up My Brand DNA
              </a>
              <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg rounded-xl transition-all">
                📅 Book a Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* DNA Components */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Your Brand DNA Contains</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Six components that define your brand — the AI uses all of them every time it generates content.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dnaComponents.map((c) => (
                <div key={c.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#7C3AED]/40 transition-all">
                  <span className="text-3xl mb-4 block">{c.icon}</span>
                  <h3 className="text-white font-bold mb-2">{c.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-20 px-4 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Generic AI vs. Brand DNA AI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-red-950/30 border border-red-800/40 rounded-2xl">
                <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">Generic AI Output</p>
                <p className="text-gray-300 text-sm italic leading-relaxed">"Exciting news! Our amazing products are now available. Check out our website for more information. Like and share this post!"</p>
                <p className="text-red-400 text-xs mt-4">— Sounds like every other brand. Zero personality. Zero trust.</p>
              </div>
              <div className="p-8 bg-[#7C3AED]/10 border border-[#7C3AED]/40 rounded-2xl">
                <p className="text-[#A78BFA] text-xs font-semibold uppercase tracking-widest mb-4">Brand DNA AI Output</p>
                <p className="text-gray-300 text-sm italic leading-relaxed">"Lagos business owners — tired of chasing customers? Our handcrafted leather bags sell themselves. DM 'LEATHER' to see this week's collection before it sells out. 🔥"</p>
                <p className="text-[#10B981] text-xs mt-4">— Specific tone, specific audience, specific CTA. Sounds like a real brand.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
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
          <div className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-r from-[#7C3AED]/20 to-[#10B981]/20 border border-white/10 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Make Your Brand Unmistakable</h2>
            <p className="text-gray-400 mb-8">Brand DNA is included in every MarketPilot plan. <Link href="/#pricing" className="text-[#10B981] hover:underline">See pricing</Link> and get started today.</p>
            <a href="https://dashboard.marketpiloting.com/register"
              className="inline-block px-10 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-lg rounded-xl transition-all">
              🧬 Set Up My Brand DNA — From ₦5,999/mo
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
