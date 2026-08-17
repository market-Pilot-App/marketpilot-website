import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us — MarketPilot",
  description: "Get in touch with the MarketPilot team. We're available via WhatsApp, email, or book a free demo call.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <Image src="/Marketpilot Logo.png" alt="MarketPilot" width={120} height={32} className="h-8 w-auto" />
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-gray-400 text-sm mb-10">We typically respond within a few hours during business hours.</p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <a
            href="https://wa.me/2348023131379"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#10B981]/50 hover:bg-white/10 transition-all text-center"
          >
            <span className="text-3xl">💬</span>
            <div>
              <p className="text-white font-semibold text-sm">WhatsApp</p>
              <p className="text-gray-400 text-xs mt-1">+234 802 313 1379</p>
            </div>
          </a>

          <a
            href="mailto:support@marketpiloting.com"
            className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#10B981]/50 hover:bg-white/10 transition-all text-center"
          >
            <span className="text-3xl">✉️</span>
            <div>
              <p className="text-white font-semibold text-sm">Email</p>
              <p className="text-gray-400 text-xs mt-1">support@marketpiloting.com</p>
            </div>
          </a>

          <a
            href="https://calendly.com/marketpilot2026/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#10B981]/50 hover:bg-white/10 transition-all text-center"
          >
            <span className="text-3xl">📅</span>
            <div>
              <p className="text-white font-semibold text-sm">Book a Demo</p>
              <p className="text-gray-400 text-xs mt-1">Free 30-min call</p>
            </div>
          </a>
        </div>

        {/* Company Info */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-400 leading-relaxed">
          <p className="text-white font-semibold mb-3">MarketPilot</p>
          <p>A product of <span className="text-white">Tradilink Africa Solution Limited</span></p>
          <p className="mt-1">RC: 8949081</p>
          <p className="mt-1">Email: <a href="mailto:support@marketpiloting.com" className="text-[#10B981] hover:underline">support@marketpiloting.com</a></p>
          <p className="mt-1">WhatsApp: <a href="https://wa.me/2348023131379" className="text-[#10B981] hover:underline">+234 802 313 1379</a></p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-[#10B981] hover:underline text-sm">← Back to MarketPilot</Link>
        </div>
      </div>
    </div>
  );
}
