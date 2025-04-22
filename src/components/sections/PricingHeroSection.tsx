
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useFacebookPixel from '@/hooks/useFacebookPixel';

const PricingHeroSection = () => {
  const { trackEvent } = useFacebookPixel();

  const handleContactRedirect = () => {
    // Use window.open to open in a new tab or window.location.href for same tab
    window.location.href = 'https://elimyt.com/contact';
    
    // Track the click event
    trackEvent('Lead', {
      content_name: 'Contact Button Click',
      content_category: 'CTA',
      value: 249.90,
      currency: 'EUR'
    });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-6xl mx-auto text-center">
        <img 
          src="/lovable-uploads/e0efda63-50ee-4d5e-bace-82a438cb3313.png" 
          alt="eLimyt Logo" 
          className="mx-auto mb-8 w-52 h-auto animate-scale-in"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transformez Votre Image Professionnelle
        </h1>
        
        {/* Make pricing more visible with animation and larger font */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Avec un Site Web Premium livré en 7 jours
        </h2>
        <div className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-button-start p-4 rounded-lg inline-block text-white shadow-lg pulse-animation">
          Pour seulement <span className="text-white">249,90€</span>{' '}
          <span className="line-through text-white/70 text-2xl">2000€</span>
        </div>
        
        <div className="bg-destructive/10 text-destructive font-semibold p-4 rounded-lg mb-8 inline-block">
          Offre limitée : seulement 5 places disponibles ce mois-ci.
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            'Livré en 7 jours',
            'Satisfaction garantie (remboursement sous 14 jours)',
            'Hébergement offert pendant 1 an'
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-left bg-card p-4 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      
        <Button
          size="lg"
          onClick={handleContactRedirect}
          className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start animate-gradient-x text-white"
        >
          Je profite de l'offre à 249,90€
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default PricingHeroSection;
