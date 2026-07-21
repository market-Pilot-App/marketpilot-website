import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarketPilot — Automate Your Social Media. Guarantee Your Growth.",
  description: "Africa's first autonomous marketing engine. AI content generation, multi-platform auto-posting, audience boosting and analytics — all on autopilot.",
  keywords: "social media automation, Africa, Nigeria, marketing, AI content, auto-posting, audience growth",
  openGraph: {
    title: "MarketPilot — Automate Your Social Media. Guarantee Your Growth.",
    description: "Africa's first autonomous marketing engine. AI content, auto-posting, audience boosting — all on autopilot.",
    url: "https://marketpiloting.online",
    siteName: "MarketPilot",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "MarketPilot" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketPilot — Automate Your Social Media",
    description: "Africa's first autonomous marketing engine.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/Icon Logo Marketpilot.png",
    apple: "/Icon Logo Marketpilot.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0F172A] text-[#F8FAFC] antialiased">{children}</body>
    </html>
  );
}
