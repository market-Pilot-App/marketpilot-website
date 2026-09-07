import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WhatsApp Marketing Automation for Nigerian Businesses — MarketPilot",
  description: "Automate WhatsApp marketing for your business. AI auto-replies to customer messages, broadcasts to your lead list, and captures new leads — all via WhatsApp Business API.",
  keywords: "WhatsApp marketing automation Nigeria, WhatsApp Business API Africa, WhatsApp broadcast Nigerian SME, auto-reply WhatsApp business Nigeria",
  alternates: { canonical: "/whatsapp-marketing" },
  openGraph: {
    title: "WhatsApp Marketing Automation for Nigerian Businesses — MarketPilot",
    description: "AI auto-replies to WhatsApp messages, broadcasts to your leads, and captures new contacts — 24/7.",
    url: "https://www.marketpiloting.com/whatsapp-marketing",
    siteName: "MarketPilot",
    type: "website",
  },
};

const features = [
  { icon: "🤖", title: "AI Auto-Reply", body: "The AI reads incoming WhatsApp messages and replies instantly in your brand voice — answering FAQs, sharing payment details, and qualifying leads 24/7." },
  { icon: "📢", title: "Broadcast to Your Leads", body: "Send a single message to all your opted-in WhatsApp leads at once. Promotions, announcements, and updates delivered directly to their chat." },
  { icon: "👤", title: "Automatic Lead Capture", body: "Every person who messages your WhatsApp number is automatically saved as a lead in your CRM — name, phone number, and conversation history." },
  { icon: "🚨", title: "Human Escalation Alerts", body: "When a customer asks something the AI can't handle, you get an instant WhatsApp alert on your personal number so you can step in." },
  { icon: "💬", title: "Conversation Threads", body: "Full conversation history for every lead — see what they asked, what the AI replied, and where they are in the buying journey." },
  { icon: "🔒", title: "Meta-Compliant", body: "Built on the official WhatsApp Business Cloud API. Only sends to opted-in contacts. Fully compliant with Meta's messaging policies." },
];

const faqs = [
  { q: "Do I need a WhatsApp Business account?", a: "Yes. You need a WhatsApp Business Account (WABA) connected via Meta's Embedded Signup. MarketPilot walks you through the connection in Settings — it takes about 5 minutes." },
  { q: "Can the AI answer product questions automatically?", a: "Yes. Add your products to the Product Catalog and your FAQs to Brand DNA. The AI uses both to answer customer questions accurately." },
  { q: "Who receives the broadcast messages?", a: "Only leads who have previously messaged your WhatsApp number (opted-in contacts). MarketPilot never sends to numbers that haven't initiated contact — this keeps you compliant with Meta's policy." },
  { q: "What happens when the AI doesn't know the answer?", a: "The message is flagged for human review in your inbox, and if you've set an escalation number, you receive an instant WhatsApp alert with the customer's message." },
];

export default function WhatsAppMarketingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#10B981]/15 rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#10B981]/20 border border-[#10B981]/40 rounded-full text-sm text-[#10B981] mb-6">
              💬 WhatsApp Marketing
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
              WhatsApp Marketing<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#4F46E5]">
                That Runs on Autopilot
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
              WhatsApp has 90%+ penetration in Nigeria. MarketPilot turns it into your most powerful marketing channel —
              AI replies to every message, broadcasts to your leads, and captures new contacts automatically.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm mb-10">
              ⚡ Available on Starter plan and above
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://dashboard.marketpiloting.com/register?plan=starter"
                className="px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-[#10B981]/25">
                💬 Start WhatsApp Automation
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
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "90%+", label: "WhatsApp penetration in Nigeria" },
              { stat: "80–90%", label: "Average WhatsApp message open rate" },
              { stat: "24/7", label: "AI replies without breaks" },
              { stat: "100%", label: "Meta Business API compliant" },
            ].map((s) => (
              <div key={s.stat}>
                <p className="text-4xl font-black text-[#10B981] mb-2">{s.stat}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Everything in One WhatsApp Automation Suite</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#10B981]/40 transition-all">
                  <span className="text-3xl mb-4 block">{f.icon}</span>
                  <h3 className="text-white font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
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
          <div className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-r from-[#10B981]/20 to-[#4F46E5]/20 border border-white/10 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Turn WhatsApp Into Your #1 Sales Channel</h2>
            <p className="text-gray-400 mb-8">Available on Starter plan and above. <Link href="/#pricing" className="text-[#10B981] hover:underline">Compare all plans</Link>.</p>
            <a href="https://dashboard.marketpiloting.com/register?plan=starter"
              className="inline-block px-10 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg rounded-xl transition-all">
              💬 Get Started — From ₦42,900/mo
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
