import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Automated Lead Generation for African Businesses — MarketPilot",
  description: "Capture, score, and manage leads automatically. AI landing pages, referral links, WhatsApp capture, and email sequences — all in one CRM built for Nigerian SMEs.",
  keywords: "lead generation Nigeria, automated lead capture Africa, CRM for Nigerian SME, AI lead scoring Africa, landing page lead capture Nigeria",
  alternates: { canonical: "/lead-generation" },
  openGraph: {
    title: "Automated Lead Generation for African Businesses — MarketPilot",
    description: "AI landing pages, referral links, WhatsApp capture, and email sequences — capture and convert leads on autopilot.",
    url: "https://www.marketpiloting.com/lead-generation",
    siteName: "MarketPilot",
    type: "website",
  },
};

const sources = [
  { icon: "📄", title: "AI Landing Pages", body: "Every MarketPilot account gets an AI-generated landing page with a lead capture form. Customise the headline, offer, and CTA — leads flow straight to your CRM." },
  { icon: "🔗", title: "Referral Links", body: "Create trackable referral links for campaigns, influencers, or partners. See exactly which link drove each lead." },
  { icon: "💬", title: "WhatsApp Capture", body: "Every person who messages your WhatsApp Business number is automatically saved as a lead — name, number, and conversation history." },
  { icon: "📘", title: "Facebook & Instagram", body: "Leads from Facebook comments and Instagram DMs are captured automatically when auto-reply is enabled." },
  { icon: "✈️", title: "Telegram", body: "Telegram channel members who message your bot are captured as leads with their username and message history." },
  { icon: "🌐", title: "AI Website Forms", body: "Contact forms on your AI-generated website feed directly into your leads database — no third-party form tool needed." },
];

const crmFeatures = [
  { icon: "🔥", title: "Lead Scoring", body: "Leads are automatically scored Hot, Warm, or Cold based on their engagement and message intent." },
  { icon: "📧", title: "Email Sequences", body: "Enrol leads in automated email sequences — welcome series, abandoned cart recovery, and custom drip campaigns." },
  { icon: "📊", title: "Filter & Segment", body: "Filter leads by source, score, platform, date, or WhatsApp opt-in status. Export to CSV at any time." },
  { icon: "🔔", title: "New Lead Notifications", body: "Get an instant in-app notification every time a new lead is captured — so you never miss a hot prospect." },
];

const faqs = [
  { q: "Where do the leads get stored?", a: "All leads are stored in your MarketPilot CRM — accessible from the Leads page in your dashboard. You can filter, search, and export at any time." },
  { q: "Can I send emails to my leads?", a: "Yes. MarketPilot includes email broadcast and automated sequence tools. Enrol leads in drip campaigns or send one-off broadcasts directly from the dashboard." },
  { q: "How does lead scoring work?", a: "The AI analyses the lead's source, message content, and engagement level to assign a Hot, Warm, or Cold score. You can also manually update scores." },
  { q: "Can I export my leads?", a: "Yes. Export your full leads list as a CSV file at any time from the Leads page." },
];

export default function LeadGenerationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F97316]/15 rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F97316]/20 border border-[#F97316]/40 rounded-full text-sm text-[#F97316] mb-6">
              👥 Lead Generation & CRM
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Capture Leads Automatically<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#4F46E5]">
                From Every Channel
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              MarketPilot captures leads from your landing pages, WhatsApp, Facebook, Instagram, Telegram, and referral links —
              scores them automatically, and lets you follow up with email sequences. All in one CRM built for African SMEs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://dashboard.marketpiloting.com/register"
                className="px-8 py-4 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-[#F97316]/25">
                👥 Start Capturing Leads
              </a>
              <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg rounded-xl transition-all">
                📅 Book a Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Lead Sources */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">6 Ways MarketPilot Captures Leads for You</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Every channel you're active on becomes a lead source — automatically.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sources.map((s) => (
                <div key={s.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#F97316]/40 transition-all">
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRM Features */}
        <section className="py-20 px-4 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built-In CRM — No Extra Tools Needed</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Manage, score, and follow up with every lead from one dashboard.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {crmFeatures.map((f) => (
                <div key={f.title} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#4F46E5]/40 transition-all">
                  <span className="text-3xl mb-4 block">{f.icon}</span>
                  <h3 className="text-white font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
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
          <div className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-r from-[#F97316]/20 to-[#4F46E5]/20 border border-white/10 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Stop Losing Leads. Start Capturing Them Automatically.</h2>
            <p className="text-gray-400 mb-8">Lead capture and CRM are included in every MarketPilot plan. <Link href="/#pricing" className="text-[#10B981] hover:underline">View all pricing plans</Link>.</p>
            <a href="https://dashboard.marketpiloting.com/register"
              className="inline-block px-10 py-4 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-lg rounded-xl transition-all">
              👥 Start Capturing Leads — From ₦5,999/mo
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
