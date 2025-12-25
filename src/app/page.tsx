import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import AboutProfessional from "@/components/home/AboutProfessional";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutSpace from "@/components/home/AboutSpace";
import CTASection from "@/components/home/CTASection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import HomeCareSection from "@/components/home/HomeCareSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      <RevealOnScroll>
        <ServicesPreview />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutProfessional />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutSpace />
      </RevealOnScroll>

      <RevealOnScroll>
        <HomeCareSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <CTASection />
      </RevealOnScroll>
    </>
  );
}
