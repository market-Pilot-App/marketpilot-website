import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Website Builder for African Businesses — MarketPilot",
  description: "Build a full multi-page business website in under 60 seconds with AI. Home, About, Services, Contact, FAQ, and Blog — published instantly. No coding. No designer. Custom domain on Pro/Agency plans.",
  keywords: "AI website builder Nigeria, free business website Africa, build website automatically Nigerian SME, no-code website builder Africa",
  alternates: { canonical: "/ai-website-builder" },
  openGraph: {
    title: "AI Website Builder for African Businesses — MarketPilot",
    description: "Full multi-page website built by AI in 60 seconds. Published instantly. No coding, no designer needed.",
    url: "https://www.marketpiloting.com/ai-website-builder",
    siteName: "MarketPilot",
    type: "website",
  },
};

const pages = ["Home", "About", "Services", "Contact", "FAQ", "Blog"];

const features = [
  { icon: "⚡", title: "Live in 60 Seconds", body: "Describe your business and the AI generates a complete multi-page website instantly — no templates to fill, no drag-and-drop required." },
  { icon: "✏️", title: "Edit Every Section", body: "Change headlines, descriptions, images, and colours directly from your dashboard. No code knowledge needed." },
  { icon: "🎨", title: "5 Professional Themes", body: "Choose from Indigo, Dark, Minimal, Green, or Orange themes. Switch themes instantly without losing your content." },
  { icon: "🔗", title: "Custom Domain", body: "Connect your own domain (e.g. yourbrand.com) on Pro and Agency plans. Free subdomain included on all plans." },
  { icon: "📊", title: "Built-in Analytics", body: "See page views, visitor counts, and conversion events directly in your MarketPilot dashboard." },
  { icon: "🛍️", title: "Leads Flow to Your CRM", body: "Every contact form submission and landing page signup goes straight into your MarketPilot leads database." },
];

const faqs = [
  { q: "Do I need any technical skills to build a website?", a: "None at all. You describe your business in plain English and the AI builds the entire website. You can edit any section from a simple dashboard." },
  { q: "Can I use my own domain name?", a: "Yes. Custom domains are available on Pro and Agency plans. All other plans get a free subdomain at yourname.marketpiloting.com." },
  { q: "How many websites can I have?", a: "Solo plan: 1 website. Starter: 1 website. Growth: up to 3 websites. Pro and Agency: unlimited websites." },
  { q: "Will the website show up on Google?", a: "Yes. Every AI-generated website includes SEO title tags, meta descriptions, and a sitemap. The Blog section auto-publishes SEO articles weekly." },
];

export default function AIWebsiteBuilderPage() {
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
              🌐 AI Website Builder
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Your Business Website,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#4F46E5]">
                Built by AI in 60 Seconds
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              No designer. No developer. No waiting weeks. MarketPilot's AI generates your complete multi-page business website
              instantly — and keeps it updated with fresh blog content every week.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://dashboard.marketpiloting.com/register"
                className="px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-[#10B981]/25">
                🌐 Build My Website Now
              </a>
              <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg rounded-xl transition-all">
                📅 See a Live Demo
              </a>
            </div>
          </div>
        </section>

        {/* Pages included */}
        <section className="py-16 px-4 border-y border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Every website includes these pages</p>
            <div className="flex flex-wrap justify-center gap-3">
              {pages.map((p) => (
                <span key={p} className="px-5 py-2.5 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full text-[#10B981] font-semibold text-sm">
                  ✓ {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Everything Your Website Needs</h2>
              <p className="text-gray-400 max-w-xl mx-auto">Not just a landing page — a full business website that grows with you.</p>
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

        {/* vs Hiring */}
        <section className="py-20 px-4 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">AI Website Builder vs. Hiring a Web Designer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-red-950/30 border border-red-800/40 rounded-2xl">
                <p className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">Hiring a Web Designer</p>
                <ul className="space-y-3">
                  {["₦150,000–₦500,000 one-time build cost", "2–6 weeks to deliver", "₦30,000–₦60,000/month for updates", "You wait for every small change", "No built-in blog or CRM", "Goes offline if you stop paying hosting"].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-red-400 mt-0.5">✗</span>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-[#10B981]/10 border border-[#10B981]/40 rounded-2xl">
                <p className="text-[#10B981] text-xs font-semibold uppercase tracking-widest mb-4">MarketPilot AI Builder</p>
                <ul className="space-y-3">
                  {["Included in your MarketPilot plan", "Live in under 60 seconds", "Edit any section yourself instantly", "AI publishes new blog posts weekly", "Leads flow directly to your CRM", "Hosted and maintained automatically"].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-[#10B981] mt-0.5">✓</span>{i}</li>
                  ))}
                </ul>
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
          <div className="max-w-3xl mx-auto text-center p-12 bg-gradient-to-r from-[#10B981]/20 to-[#4F46E5]/20 border border-white/10 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Get Your Business Online Today</h2>
            <p className="text-gray-400 mb-8">The AI Website Builder is included in every MarketPilot plan. <Link href="/#pricing" className="text-[#10B981] hover:underline">Compare plans and pricing</Link>.</p>
            <a href="https://dashboard.marketpiloting.com/register"
              className="inline-block px-10 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-lg rounded-xl transition-all">
              🌐 Build My Website — From ₦19,500/mo
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
