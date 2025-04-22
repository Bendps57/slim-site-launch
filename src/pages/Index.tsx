
import React from 'react';
import useFacebookPixel from '@/hooks/useFacebookPixel';
import PricingHeroSection from '@/components/sections/PricingHeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import VideoTestimonialsSection from '@/components/sections/VideoTestimonialsSection';
import BonusSection from '@/components/sections/BonusSection';
import NewFAQSection from '@/components/sections/NewFAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

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
      <PricingHeroSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <VideoTestimonialsSection />
      <BonusSection />
      <NewFAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
