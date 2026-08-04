import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhoIsItFor from "@/components/WhoIsItFor";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import LeadMagnet from "@/components/LeadMagnet";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <WhoIsItFor />
      <Pricing />
      <Testimonial />
      <FAQ />
      <LeadMagnet />
      <CTABanner />
      <Footer />
    </main>
  );
}
