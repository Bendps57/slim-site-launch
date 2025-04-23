
import React from 'react';
import useFacebookPixel from '@/hooks/useFacebookPixel';
import PricingHeroSection from '@/components/sections/PricingHeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import VideoTestimonialsSection from '@/components/sections/VideoTestimonialsSection';
import BonusSection from '@/components/sections/BonusSection';
import NewFAQSection from '@/components/sections/NewFAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import SecondCTASection from '@/components/sections/SecondCTASection';
import AuthenticTestimonialSection from '@/components/sections/AuthenticTestimonialSection';
import LeadCaptureDialog from '@/components/LeadCaptureDialog';

const Index = () => {
  const { trackEvent } = useFacebookPixel();
  
  React.useEffect(() => {
    trackEvent('ViewContent', {
      content_name: 'Landing Page',
      content_category: 'Website',
      value: 249.90,
      currency: 'EUR'
    });
  }, [trackEvent]);

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="animate-fade-in">
        <LeadCaptureDialog />
        <PricingHeroSection />
        <FeaturesSection />
        <BeforeAfterSection />
        <AuthenticTestimonialSection />
        <VideoTestimonialsSection />
        <BonusSection />
        <SecondCTASection />
        <NewFAQSection />
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Index;
