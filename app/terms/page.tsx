import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <Image src="/Marketpilot Logo.png" alt="MarketPilot" width={120} height={32} className="h-8 w-auto" />
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using MarketPilot, you agree to be bound by these Terms of Service. MarketPilot is operated by Tradilink Africa Solution Limited (RC: 8949081).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>MarketPilot is an autonomous social media marketing platform that provides AI content generation, automated posting, audience boosting, analytics, and related marketing services for businesses.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Subscription & Payment</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Subscriptions are billed monthly in advance</li>
              <li>Prices are as listed on our pricing page in USD and NGN</li>
              <li>Payment is due at the start of each billing period</li>
              <li>We reserve the right to change pricing with 30 days notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Cancellation Policy</h2>
            <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial months.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Client Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You must provide accurate social media credentials</li>
              <li>You are responsible for ensuring your social media accounts comply with platform terms</li>
              <li>You must not use MarketPilot for illegal, harmful or spam activities</li>
              <li>You are responsible for the content posted on your behalf</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Service Availability</h2>
            <p>We aim for 99% uptime but do not guarantee uninterrupted service. We are not liable for downtime caused by third-party platforms (Facebook, Instagram, etc.) or force majeure events.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Limitation of Liability</h2>
            <p>Tradilink Africa Solution Limited shall not be liable for any indirect, incidental, or consequential damages arising from the use of MarketPilot. Our total liability shall not exceed the amount paid in the last 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Intellectual Property</h2>
            <p>MarketPilot and all related technology is the intellectual property of Tradilink Africa Solution Limited. You retain ownership of your brand content and social media accounts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Governing Law</h2>
            <p>These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be resolved in Nigerian courts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
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
