export default function Affiliate() {
  return (
    <section className="py-24 px-4 bg-white/[0.02] border-t border-white/10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Earn With Us</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Turn referrals into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#4F46E5]">
              real cash
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Know a business that needs consistent marketing? Refer them to MarketPilot and earn a 10% commission
            on their first payment — every time someone signs up through your link.
          </p>
        </div>

        {/* How it works — 3 steps */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {[
            {
              step: "01",
              icon: "🔗",
              title: "Get your unique link",
              desc: "Sign up free in 60 seconds. You'll get a personal referral link to share anywhere — WhatsApp, social media, email, or your website.",
            },
            {
              step: "02",
              icon: "📣",
              title: "Share with businesses",
              desc: "Share your link with entrepreneurs, SMEs, agencies, or anyone who needs automated marketing. No selling required — MarketPilot sells itself.",
            },
            {
              step: "03",
              icon: "💰",
              title: "Earn on every signup",
              desc: "Earn 10% commission on the first payment of every customer you refer. The more businesses you refer, the more you earn.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#F97316]/40 transition-colors group"
            >
              <div className="absolute top-4 right-4 text-4xl font-black text-white/5 group-hover:text-[#F97316]/10 transition-colors select-none">
                {item.step}
              </div>
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Perks strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            { icon: "💸", label: "10% per first payment" },
            { icon: "⚡", label: "Instant dashboard access" },
            { icon: "🌍", label: "Open to anyone, anywhere" },
            { icon: "🆓", label: "100% free to join" },
          ].map((perk) => (
            <div key={perk.label} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl">
              <span className="text-xl flex-shrink-0">{perk.icon}</span>
              <span className="text-gray-300 text-xs font-semibold">{perk.label}</span>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#F97316]/40 bg-gradient-to-br from-[#F97316]/15 via-[#4F46E5]/10 to-[#10B981]/10 p-10 text-center">
          {/* Glow blobs */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F97316]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#4F46E5]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-5xl mb-5">🤝</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to start earning?
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
              Join our affiliate programme today — it takes less than a minute to sign up.
              No experience needed. No upfront cost. Just share and earn.
            </p>

            <a
              href="https://affiliates.marketpiloting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#F97316] to-[#EA6C0A] hover:from-[#EA6C0A] hover:to-[#D45F00] text-white font-black text-lg rounded-2xl transition-all shadow-2xl shadow-[#F97316]/40 hover:scale-105 hover:shadow-[#F97316]/60"
            >
              💸 Join Affiliate Programme →
            </a>

            <p className="text-gray-500 text-xs mt-5">
              Already a member?{" "}
              <a
                href="https://affiliates.marketpiloting.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F97316] hover:underline font-semibold"
              >
                Log in to your dashboard →
              </a>
            </p>

            <p className="text-gray-600 text-xs mt-6 max-w-md mx-auto leading-relaxed">
              Commissions are paid on confirmed, non-refunded subscriptions only. Earnings are not guaranteed.
              Programme terms may be updated with 14 days&apos; notice. Affiliates are responsible for their own tax obligations.
              See our{" "}
              <a href="/terms#affiliate" className="text-gray-500 hover:text-gray-400 underline">Affiliate Terms</a>{" "}
              for full details.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
