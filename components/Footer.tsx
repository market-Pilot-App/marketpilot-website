import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0F172A] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image src="/Marketpilot Logo.png" alt="MarketPilot" width={130} height={36} className="h-8 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Africa's first autonomous marketing engine. Powering brand growth across Nigeria and the continent.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/2348060658537" target="_blank"
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-white transition-colors">
                💬 WhatsApp
              </a>
              <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 hover:text-white transition-colors">
                📅 Book Demo
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Book a Demo", href: "https://calendly.com/marketpilot2026/30min" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-gray-400 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-xs text-gray-500 leading-relaxed">
                MarketPilot is a product of<br />
                <span className="text-gray-300 font-medium">Tradilink Africa Solution Limited</span><br />
                RC: 8949081
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 MarketPilot. A product of Tradilink Africa Solution Limited. RC: 8949081
          </p>
          <p className="text-gray-600 text-xs">Built for African businesses 🌍</p>
        </div>
      </div>
    </footer>
  );
}
