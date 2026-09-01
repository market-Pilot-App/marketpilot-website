import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhoIsItFor from "@/components/WhoIsItFor";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Testimonial from "@/components/Testimonial";
import Affiliate from "@/components/Affiliate";
import FAQ from "@/components/FAQ";
import LeadMagnet from "@/components/LeadMagnet";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "MarketPilot",
            url: "https://www.marketpiloting.com",
            description: "Africa's first autonomous marketing engine. AI content generation, multi-platform auto-posting, audience boosting and analytics — all on autopilot.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "NGN",
              lowPrice: "5999",
              highPrice: "550000",
            },
            provider: {
              "@type": "Organization",
              name: "MarketPilot",
              url: "https://www.marketpiloting.com",
            },
          }),
        }}
      />
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <WhoIsItFor />
      <Pricing />
      <Guarantee />
      <Testimonial />
      <Affiliate />
      <FAQ />
      <LeadMagnet />
      <CTABanner />
      <Footer />
    </main>
  );
}
