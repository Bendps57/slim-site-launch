
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useFacebookPixel from '@/hooks/useFacebookPixel';

const PricingHeroSection = () => {
  const { trackEvent } = useFacebookPixel();

  const handleOrderClick = () => {
    trackEvent('InitiateCheckout', {
      value: 249.90,
      currency: 'EUR'
    });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transformez Votre Image Professionnelle
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Avec un Site Web Premium livré en 7 jours – Pour seulement{' '}
          <span className="text-primary">249,90€</span>{' '}
          <span className="line-through text-muted-foreground">2000€</span>
        </h2>
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
          onClick={handleOrderClick}
          className="text-lg px-8 py-6 h-auto animate-pulse"
        >
          Je veux mon site maintenant
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default PricingHeroSection;
