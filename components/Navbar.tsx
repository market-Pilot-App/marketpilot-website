"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const featureLinks = [
  { href: "/social-media-automation", label: "📅 Social Media Automation" },
  { href: "/ai-website-builder", label: "🌐 AI Website Builder" },
  { href: "/brand-dna-engine", label: "🧬 Brand DNA Engine" },
  { href: "/whatsapp-marketing", label: "💬 WhatsApp Marketing" },
  { href: "/lead-generation", label: "👥 Lead Generation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/Marketpilot Logo.png" alt="MarketPilot" width={200} height={56} className="h-12 w-auto rounded-full" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>

            {/* Features dropdown */}
            <div className="relative" onMouseEnter={() => setFeaturesOpen(true)} onMouseLeave={() => setFeaturesOpen(false)}>
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                Features <span className="text-xs">▾</span>
              </a>
              {featuresOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1E293B] border border-white/10 rounded-xl shadow-xl py-2 z-50">
                  {featureLinks.map((l) => (
                    <Link key={l.href} href={l.href}
                      className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                      {l.label}
                    </Link>
                  ))}
                  <div className="border-t border-white/10 mt-2 pt-2">
                    <a href="#features" className="block px-4 py-2.5 text-sm text-[#818CF8] hover:text-white transition-colors">View all features →</a>
                  </div>
                </div>
              )}
            </div>

            {["Pricing", "Blog", "FAQ"].map((item) => (
              <a key={item} href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <a href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            <a
              href="https://affiliates.marketpiloting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
            >
              💸 Affiliate
            </a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              📅 Book a Demo
            </a>
            <a href="https://wa.me/2349018622185" target="_blank"
              className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold rounded-lg transition-colors">
              💬 WhatsApp
            </a>
            <a href="https://dashboard.marketpiloting.com/login"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold rounded-lg transition-colors">
              Login
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-400">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10 px-4 py-4 space-y-3">
          <a href="/" onClick={() => setOpen(false)} className="block text-sm text-gray-400 hover:text-white py-2">Home</a>
          <div className="border-l-2 border-[#4F46E5]/40 pl-3 space-y-2">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Features</p>
            {featureLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block text-sm text-gray-400 hover:text-white py-1">
                {l.label}
              </Link>
            ))}
          </div>
          {["Pricing", "Blog", "FAQ"].map((item) => (
            <a key={item} href={item === "Blog" ? "/blog" : `#${item.toLowerCase()}`} onClick={() => setOpen(false)}
              className="block text-sm text-gray-400 hover:text-white py-2">
              {item}
            </a>
          ))}
          <a href="/contact" onClick={() => setOpen(false)} className="block text-sm text-gray-400 hover:text-white py-2">Contact</a>
          <a
            href="https://affiliates.marketpiloting.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block text-sm font-bold text-[#F97316] hover:text-[#EA6C0A] py-2"
          >
            💸 Affiliate Programme
          </a>
          <a href="https://wa.me/2349018622185" target="_blank" onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-2.5 bg-[#10B981] text-white text-sm font-semibold rounded-lg">
            💬 WhatsApp
          </a>
          <a href="https://dashboard.marketpiloting.com/login"
            className="block w-full text-center px-4 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-lg">
            Login to Dashboard
          </a>
          <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
            className="block text-center text-xs text-gray-500 hover:text-gray-300 py-2">
            📅 Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
}
