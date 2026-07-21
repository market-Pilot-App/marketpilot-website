"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/Icon Logo Marketpilot.png" alt="MarketPilot Icon" width={44} height={44} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#4F46E5]/50" />
            <Image src="/Marketpilot Logo.png" alt="MarketPilot" width={180} height={50} className="h-11 w-auto" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Pricing", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/2348060658537" target="_blank"
              className="text-sm text-gray-400 hover:text-white transition-colors">
              💬 WhatsApp
            </a>
            <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
              className="px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold rounded-lg transition-colors">
              Book a Free Demo
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
          {["Features", "Pricing", "FAQ"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}
              className="block text-sm text-gray-400 hover:text-white py-2">
              {item}
            </a>
          ))}
          <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
            className="block w-full text-center px-4 py-2.5 bg-[#10B981] text-white text-sm font-semibold rounded-lg">
            Book a Free Demo
          </a>
        </div>
      )}
    </nav>
  );
}
