
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  const handleScrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full">
      <HeroSection onScrollToForm={handleScrollToForm} />
      <BenefitsSection />
      <ProcessSection onScrollToForm={handleScrollToForm} />
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
};

export default Index;
