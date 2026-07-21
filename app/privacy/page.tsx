import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <Image src="/Marketpilot Logo.png" alt="MarketPilot" width={120} height={32} className="h-8 w-auto" />
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: July 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>MarketPilot ("we", "our", "us") is a product of Tradilink Africa Solution Limited (RC: 8949081). We are committed to protecting your personal information and your right to privacy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Name and email address when you subscribe or book a demo</li>
              <li>WhatsApp number if provided voluntarily</li>
              <li>Social media credentials (stored securely, used only for posting)</li>
              <li>Business information provided during onboarding</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide and operate the MarketPilot service</li>
              <li>To send you service updates and weekly reports</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Social Media Credentials</h2>
            <p>We store your social media API tokens securely to enable automated posting. We never store your social media passwords. You can revoke our access at any time through your social media platform settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. All data is stored on secure, encrypted servers. We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Services</h2>
            <p>We use the following third-party services to operate MarketPilot: Facebook/Meta API, Instagram API, LinkedIn API, Telegram API, Twitter/X API, Resend (email), Twilio (WhatsApp), Groq (AI), Cloudinary (media storage), Neon (database).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information at any time. To exercise these rights, contact us at the details below.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
            <p>Tradilink Africa Solution Limited<br />RC: 8949081<br />WhatsApp: +2348060658537<br />Email: marketpilot2026@gmail.com</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-[#10B981] hover:underline text-sm">← Back to MarketPilot</Link>
        </div>
      </div>
    </div>
  );
}
