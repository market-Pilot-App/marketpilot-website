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
        <p className="text-gray-400 text-sm mb-10">Last updated: August 2026</p>

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
            <h2 className="text-xl font-bold text-white mb-3">4b. Facebook &amp; Instagram Data</h2>
            <p>When you connect your Facebook Page or Instagram Business account to MarketPilot, we access the following data on your behalf:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Facebook Page name, ID, and access tokens</li>
              <li>Instagram Business account ID and media</li>
              <li>Facebook Page messages and comments (for auto-reply feature)</li>
              <li>Page insights and engagement metrics</li>
            </ul>
            <p className="mt-3">This data is used solely to provide the MarketPilot service — automated posting, auto-reply, and analytics. We do not share this data with any third party. You can revoke MarketPilot&apos;s access at any time by visiting <strong>Facebook Settings → Apps and Websites → MarketPilot → Remove</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Security &amp; NDPR Compliance</h2>
            <p>In compliance with the Nigeria Data Protection Regulation (NDPR) and the Nigeria Data Protection Act 2023 (NDPA), Tradilink Africa Solution Limited collects and processes personal data solely for the purpose of providing and improving the MarketPilot service. We employ industry-standard encryption. We do not sell, rent, or share your data with third parties for marketing purposes. Clients retain the right to request data access, correction, or deletion by contacting <a href="mailto:marketpilot2026@gmail.com" className="text-[#10B981] hover:underline">marketpilot2026@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5b. Data Retention</h2>
            <p>We retain your personal data for as long as your account is active or as needed to provide services. Upon account deletion, personal data is purged within 30 days, except where retention is required by Nigerian law. Anonymised analytics data may be retained indefinitely.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5c. Consent &amp; Legal Basis</h2>
            <p>By creating an account and checking the Terms of Service checkbox at registration, you provide explicit consent for MarketPilot to collect and process your personal data as described in this policy. You may withdraw consent at any time by deleting your account or contacting support. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Services</h2>
            <p>We use the following third-party services to operate MarketPilot: Facebook/Meta API, Instagram API, LinkedIn API, Telegram API, Twitter/X API, Resend (email), Twilio (WhatsApp), Groq (AI), Cloudinary (media storage), Neon (database).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6b. Affiliate Programme Data</h2>
            <p>If you participate in the MarketPilot Affiliate Programme, we collect and process the following additional data:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Your name and email address (used to create and manage your affiliate account)</li>
              <li>Your unique referral link click and conversion data (to calculate commissions accurately)</li>
              <li>Payment details you provide for commission payouts (e.g. bank account or mobile money number)</li>
            </ul>
            <p className="mt-3">This data is used solely to operate the affiliate programme — tracking referrals, calculating commissions, and processing payouts. We do not share affiliate payout details with any third party. You may request deletion of your affiliate account and associated data at any time by emailing <a href="mailto:marketpilot2026@gmail.com" className="text-[#10B981] hover:underline">marketpilot2026@gmail.com</a>. Note that transaction records may be retained for up to 7 years as required by Nigerian financial regulations.</p>
          </section>

          <section id="data-deletion">
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights &amp; Data Deletion</h2>
            <p>You have the right to access, update, or delete your personal information at any time. To exercise these rights, contact us at the details below.</p>
            <p className="mt-3">To request deletion of your Facebook or Instagram data specifically, email <a href="mailto:marketpilot2026@gmail.com" className="text-[#10B981] hover:underline">marketpilot2026@gmail.com</a> with the subject line <strong>&quot;Data Deletion Request&quot;</strong>. We will process your request within 30 days and confirm deletion by email.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
            <p>Tradilink Africa Solution Limited<br />RC: 8949081<br />WhatsApp: +2348023131379<br />Email: marketpilot2026@gmail.com</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-[#10B981] hover:underline text-sm">← Back to MarketPilot</Link>
        </div>
      </div>
    </div>
  );
}
