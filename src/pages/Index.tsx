
import React from "react";
import HeroESection from "@/components/sections/HeroESection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import BenefitsObjectionsSection from "@/components/sections/BenefitsObjectionsSection";
import AuthenticTestimonialSection from "@/components/sections/AuthenticTestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import SecondCTASection from "@/components/sections/SecondCTASection";
import FooterSection from "@/components/sections/FooterSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

const Index = () => {
  const handleScrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <HeroESection onScrollToForm={handleScrollToForm} />
      <SocialProofSection />
      <BenefitsObjectionsSection />
      <AuthenticTestimonialSection />
      <TestimonialsSection />
      <FAQSection />
      <SecondCTASection onScrollToForm={handleScrollToForm} />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
};

export default Index;
