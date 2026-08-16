"use client";
import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "https://marketpiloting-engine-backend.onrender.com";

const PLATFORM_EMOJI: Record<string, string> = {
  facebook: "📘",
  instagram: "📸",
  linkedin: "💼",
};

interface GeneratedPost {
  platform: string;
  text: string;
  hook: string;
}

export default function LeadMagnet() {
  const [form, setForm] = useState({ business_name: "", what_you_sell: "", target_audience: "" });
  const [posts, setPosts] = useState<GeneratedPost[]>([]);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "saved" | "error">("idle");
  const [emailSent, setEmailSent] = useState(false);

  const generate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.business_name || !form.what_you_sell || !form.target_audience) return;
    setStatus("loading");
    try {
      const res = await fetch(`${API}/public/generate-posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPosts(data.posts);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const saveEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch(`${API}/public/lead-magnet-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, business_name: form.business_name }),
      });
    } catch {}
    setEmailSent(true);
  };

  return (
    <section className="py-20 px-4 border-t border-white/10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#10B981] text-sm font-semibold uppercase tracking-widest">Free Tool</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-3">
            Generate <span className="text-[#4F46E5]">3 Free Posts</span> for Your Business
          </h2>
          <p className="text-gray-400 text-sm">See exactly what MarketPilot would post for you — no signup required.</p>
        </div>

        {status === "idle" || status === "loading" || status === "error" ? (
          <form onSubmit={generate} className="space-y-4">
            <input
              required
              placeholder="Business name (e.g. Mama Titi's Kitchen)"
              value={form.business_name}
              onChange={(e) => setForm((f) => ({ ...f, business_name: e.target.value }))}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4F46E5]/60"
            />
            <input
              required
              placeholder="What do you sell? (e.g. Homemade Nigerian food, catering services)"
              value={form.what_you_sell}
              onChange={(e) => setForm((f) => ({ ...f, what_you_sell: e.target.value }))}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4F46E5]/60"
            />
            <input
              required
              placeholder="Target audience (e.g. Lagos professionals aged 25-45)"
              value={form.target_audience}
              onChange={(e) => setForm((f) => ({ ...f, target_audience: e.target.value }))}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4F46E5]/60"
            />
            {status === "error" && (
              <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#4F46E5] hover:bg-[#4338CA] disabled:opacity-50 text-white font-bold text-sm rounded-xl transition"
            >
              {status === "loading" ? "✨ Generating your posts…" : "✨ Generate My 3 Free Posts →"}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="space-y-4">
              {posts.map((p, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{PLATFORM_EMOJI[p.platform] || "📄"}</span>
                    <span className="text-xs font-semibold text-white capitalize">{p.platform}</span>
                    <span className="ml-auto text-xs text-[#10B981] italic">{p.hook}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{p.text}</p>
                </div>
              ))}
            </div>

            {!emailSent ? (
              <div className="bg-[#4F46E5]/10 border border-[#4F46E5]/30 rounded-2xl p-6 mt-6">
                <p className="text-white font-bold mb-1">Want MarketPilot to post these for you — automatically?</p>
                <p className="text-gray-400 text-sm mb-4">Drop your email and we&apos;ll send you your 3 posts + a special setup offer.</p>
                <form onSubmit={saveEmail} className="flex gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4F46E5]/60"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm rounded-xl transition whitespace-nowrap"
                  >
                    Send Me the Guide →
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-2xl p-6 text-center mt-6">
                <p className="text-2xl mb-2">🎉</p>
                <p className="text-white font-bold mb-1">Got it! We&apos;ll be in touch.</p>
                <p className="text-gray-400 text-sm mb-4">Ready to put your marketing on autopilot?</p>
                <a
                  href="https://dashboard.marketpiloting.com/register"
                  className="inline-block px-6 py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-sm rounded-xl transition"
                >
                  Start My Plan →
                </a>
              </div>
            )}

            <button
              onClick={() => { setStatus("idle"); setPosts([]); setEmailSent(false); }}
              className="w-full text-gray-500 hover:text-gray-300 text-xs py-2 transition"
            >
              ← Generate different posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
