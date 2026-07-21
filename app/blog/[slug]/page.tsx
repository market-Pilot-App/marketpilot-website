import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "../page";

const postContent: Record<string, { intro: string; sections: { heading: string; body: string }[] }> = {
  "why-african-businesses-need-social-media-automation": {
    intro: "In Nigeria and across Africa, millions of small businesses have social media pages — but most post once a week at best, or go silent for months. The result? Low reach, low trust, and lost customers. Social media automation changes that entirely.",
    sections: [
      { heading: "The Consistency Problem", body: "Algorithms on Facebook, Instagram, and TikTok reward consistency. Pages that post daily get 3–5x more organic reach than those that post weekly. But hiring a social media manager costs ₦80,000–₦200,000/month — out of reach for most SMEs." },
      { heading: "What Automation Actually Does", body: "Automation tools like MarketPilot generate AI-written content tailored to your brand, schedule posts at peak engagement times, and publish across all platforms simultaneously — without you lifting a finger." },
      { heading: "The ROI Is Clear", body: "Businesses using consistent social media posting see 40–60% more website traffic and 2–3x more inbound leads within 90 days. Automation makes this achievable at a fraction of the cost of a human team." },
      { heading: "Getting Started", body: "You don't need to overhaul your entire marketing strategy. Start by automating your daily posts on Facebook and Instagram. Once you see the results, expand to LinkedIn, TikTok, and WhatsApp broadcasts." },
    ],
  },
  "how-to-grow-your-facebook-page-in-nigeria": {
    intro: "Facebook has over 33 million users in Nigeria — more than any other social platform. Yet most business pages struggle to grow past 1,000 followers. Here's what actually works.",
    sections: [
      { heading: "Post at the Right Times", body: "Nigerian Facebook users are most active between 7–9am, 12–2pm, and 7–10pm. Posting during these windows can double your organic reach compared to off-peak hours." },
      { heading: "Content That Works in Nigeria", body: "Educational content (tips, how-tos), relatable humor, and success stories perform best. Avoid overly polished corporate content — authenticity wins on Nigerian Facebook." },
      { heading: "Use Audience Boosting Strategically", body: "Buying followers from reputable SMM panels (like JustAnotherPanel) gives your page social proof. A page with 5,000 followers gets taken more seriously than one with 200, even if the content is identical." },
      { heading: "Engage Within the First Hour", body: "Reply to every comment within 60 minutes of posting. Facebook's algorithm heavily weights early engagement and will push your post to more people if it sees activity." },
    ],
  },
  "ai-content-generation-for-small-businesses": {
    intro: "A decade ago, creating daily social media content required a copywriter, a designer, and a strategist. Today, AI can do all three in seconds. Here's how small businesses are using it to compete with big brands.",
    sections: [
      { heading: "What AI Content Generation Actually Looks Like", body: "Modern AI models like Groq's Llama 3.3 can generate platform-specific posts, captions, hashtags, and even full blog articles — all tailored to your brand voice and industry." },
      { heading: "The Quality Is Good Enough", body: "AI-generated content isn't perfect, but it's 80% of the way there. A quick human review and edit takes 2 minutes per post. Compare that to 30–60 minutes to write from scratch." },
      { heading: "How MarketPilot Uses AI", body: "MarketPilot feeds your brand details, content angles, and target audience into the AI. It then generates a week's worth of posts in one batch, schedules them, and publishes automatically." },
      { heading: "The Competitive Advantage", body: "Big brands have marketing teams of 10–20 people. With AI automation, a solo founder can match their output. The playing field has never been more level." },
    ],
  },
  "tiktok-marketing-for-nigerian-brands": {
    intro: "TikTok crossed 10 million users in Nigeria in 2024 and is growing fast. But most Nigerian businesses are still sleeping on it. Here's how to use TikTok to drive real business results.",
    sections: [
      { heading: "You Don't Need to Dance", body: "The most successful business TikToks are educational, behind-the-scenes, or storytelling content. Show your process, share tips, or tell your brand story. No dancing required." },
      { heading: "TikTok's Algorithm Is Generous", body: "Unlike Facebook or Instagram, TikTok shows your content to non-followers. A single good video can reach 10,000–100,000 people organically — something that's nearly impossible on other platforms without paid ads." },
      { heading: "Consistency Is Everything", body: "Post at least once a day. TikTok rewards creators who post frequently. Use automation to repurpose your existing content into short-form videos." },
      { heading: "Combine Organic With Boosting", body: "Pair organic posting with follower and view boosting from SMM panels to accelerate growth. Social proof (high view counts) makes people more likely to follow and engage." },
    ],
  },
  "whatsapp-marketing-strategy-nigeria": {
    intro: "WhatsApp is the most used app in Nigeria — over 90% of smartphone users have it. Yet most businesses use it only for customer service. Here's how to turn WhatsApp into a marketing channel.",
    sections: [
      { heading: "Build a Subscriber List First", body: "Use a keyword-based opt-in system. Tell your audience to send 'JOIN' to your WhatsApp number to subscribe to updates. This builds a permission-based list you own completely." },
      { heading: "Broadcast vs. Groups", body: "WhatsApp Broadcast lists send messages to subscribers individually — they receive it as a personal message, not a group chat. This dramatically increases open rates (often 80–90% vs. 20% for email)." },
      { heading: "What to Send", body: "Weekly news updates, exclusive offers, new blog posts, and event announcements all perform well. Keep messages short, personal, and valuable. Never spam." },
      { heading: "Automate With a Bot", body: "A simple WhatsApp bot can handle subscriptions, send welcome messages, and answer FAQs automatically. MarketPilot includes a built-in WhatsApp bot for exactly this purpose." },
    ],
  },
  "social-media-posting-schedule-that-works": {
    intro: "Posting at the wrong time is like opening your shop at 3am. The content might be great, but nobody's there to see it. Here's the optimal posting schedule for West African audiences.",
    sections: [
      { heading: "Facebook: 3x Per Day", body: "Best times: 7:30am, 12:30pm, 8:00pm. Morning posts catch commuters, lunch posts catch office workers, evening posts catch the largest audience relaxing at home." },
      { heading: "Instagram: 2x Per Day", body: "Best times: 8:00am and 7:00pm. Instagram's algorithm favors recency, so posting twice daily keeps you visible. Use Stories in between to maintain presence." },
      { heading: "LinkedIn: 1x Per Day (Weekdays)", body: "Best time: 8:00am Monday–Friday. LinkedIn is a professional network — weekday mornings when people are in work mode get the most engagement." },
      { heading: "TikTok: 1–2x Per Day", body: "Best times: 6:00am and 9:00pm. Early morning catches people before work; evening catches the largest leisure audience. Consistency matters more than timing on TikTok." },
    ],
  },
};

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | MarketPilot Blog`,
    description: post.excerpt,
    keywords: `${post.category}, social media marketing Nigeria, digital marketing Africa, MarketPilot`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://marketpiloting.online/blog/${post.slug}`,
      siteName: "MarketPilot",
      type: "article",
      publishedTime: post.date,
    },
    alternates: { canonical: `https://marketpiloting.online/blog/${post.slug}` },
  };
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = postContent[post.slug];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "MarketPilot" },
    publisher: { "@type": "Organization", name: "MarketPilot", url: "https://marketpiloting.online" },
    url: `https://marketpiloting.online/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="min-h-screen bg-[#0F172A] pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-400 truncate">{post.title}</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block px-3 py-1 bg-[#4F46E5]/20 text-[#818CF8] rounded-full text-xs font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>✍️ MarketPilot Team</span>
              <span>📅 {post.date}</span>
              <span>⏱ {post.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{content.intro}</p>
            {content.sections.map((s, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-xl font-bold text-white mb-3">{s.heading}</h2>
                <p className="text-gray-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#4F46E5]/20 to-[#10B981]/20 border border-white/10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Want MarketPilot to handle this for you?</h3>
            <p className="text-gray-400 text-sm mb-5">We automate your entire social media presence — content, posting, boosting, and reporting.</p>
            <a href="https://calendly.com/marketpilot2026/30min" target="_blank"
              className="inline-block px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-xl transition-all">
              📅 Book a Free Demo
            </a>
          </div>

          {/* Related posts */}
          <div className="mt-14">
            <h3 className="text-lg font-bold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#4F46E5]/50 transition-all">
                  <p className="text-white text-sm font-semibold leading-snug mb-2">{p.title}</p>
                  <p className="text-gray-500 text-xs">{p.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
