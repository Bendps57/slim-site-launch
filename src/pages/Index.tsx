import React from "react";
import EbookHeroSection from "@/components/sections/EbookHeroSection";
import EbookBenefitsSection from "@/components/sections/EbookBenefitsSection";
import EbookTestimonialsSection from "@/components/sections/EbookTestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import EbookForm from "@/components/sections/EbookForm";
import OfficialSiteSection from "@/components/sections/OfficialSiteSection";
import VideoTestimonialsSection from "@/components/sections/VideoTestimonialsSection";

const Index = () => {
  // 2e CTA : scroll to "ebook-second-cta"
  const handleScrollToForm = () => {
    document.getElementById("ebook-second-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <EbookHeroSection />
      <OfficialSiteSection />
      <VideoTestimonialsSection />
      <EbookBenefitsSection />
      <EbookTestimonialsSection />
      <FAQSection />
      <section id="ebook-second-cta" className="py-12 px-3 text-center bg-secondary/30">
        <div className="max-w-xl mx-auto rounded-xl shadow-lg p-8 bg-background">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Prêt à éviter les erreurs que 80% des entrepreneurs font&nbsp;?
          </h3>
          <EbookForm />
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Index;
