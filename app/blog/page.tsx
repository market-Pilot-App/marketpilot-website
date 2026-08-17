import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "./posts-data";

export const metadata: Metadata = {
  title: "Blog & Insights | MarketPilot — Social Media Automation Africa",
  description: "Tips, strategies and insights on social media automation, digital marketing, and growing your brand in Africa and Nigeria.",
  keywords: "social media marketing Africa, digital marketing Nigeria, brand growth, content automation, marketing tips",
  openGraph: {
    title: "Blog & Insights | MarketPilot",
    description: "Tips and strategies on social media automation and brand growth in Africa.",
    url: "https://marketpiloting.online/blog",
    siteName: "MarketPilot",
    type: "website",
  },
  alternates: { canonical: "https://marketpiloting.online/blog" },
};

const categoryColors: Record<string, string> = {
  Strategy: "bg-[#4F46E5]/20 text-[#818CF8]",
  Facebook: "bg-blue-500/20 text-blue-400",
  "AI & Content": "bg-[#10B981]/20 text-[#10B981]",
  TikTok: "bg-pink-500/20 text-pink-400",
  WhatsApp: "bg-green-500/20 text-green-400",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0F172A] pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#4F46E5]/20 border border-[#4F46E5]/40 rounded-full text-sm text-[#818CF8] mb-6">
              📝 Insights & Strategies
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog & Insights</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Practical marketing strategies for African businesses — from social media automation to audience growth.
            </p>
          </div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#4F46E5]/50 transition-all">
                {/* Cover image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] ?? "bg-white/10 text-gray-400"}`}>
                    {post.category}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#818CF8] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-10 bg-gradient-to-r from-[#4F46E5]/20 to-[#10B981]/20 border border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to automate your marketing?</h3>
            <p className="text-gray-400 mb-6">Let MarketPilot handle your social media while you focus on your business.</p>
            <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
              className="inline-block px-8 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-xl transition-all">
              📅 Book a Free Demo
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
