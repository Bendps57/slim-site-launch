
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useFacebookPixel from '@/hooks/useFacebookPixel';

const FinalCTASection = () => {
  const { trackEvent } = useFacebookPixel();
  
  const handleContactRedirect = () => {
    // Changement de l'URL et ouverture dans un nouvel onglet
    window.open('https://elimyt.com/contact', '_blank');
    
    // Track the click event
    trackEvent('Lead', {
      content_name: 'Final CTA Button Click',
      content_category: 'CTA',
      value: 249.90,
      currency: 'EUR'
    });
  };

  return (
    <section className="py-16 px-4 bg-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à transformer votre présence en ligne ?
        </h2>
        <p className="text-xl mb-8">
          Commandez votre site vitrine pour <span className="font-bold text-primary">249,90€</span> maintenant – Offre limitée !
        </p>
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

export default FinalCTASection;
