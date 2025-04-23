
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
    <section className="py-20 px-4 bg-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à transformer votre présence en ligne ?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez les entrepreneurs qui ont déjà boosté leur activité avec un site web professionnel pour seulement <span className="font-bold text-primary">249,90€</span>.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-xl mb-8 max-w-lg mx-auto">
          <ul className="text-left space-y-3 mb-6">
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-3">✓</span>
              <span>Design premium sur mesure</span>
            </li>
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-3">✓</span>
              <span>Livraison en 7 jours garantie</span>
            </li>
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-3">✓</span>
              <span>Hébergement & nom de domaine offerts 1ère année</span>
            </li>
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-3">✓</span>
              <span>Satisfait ou remboursé sous 14 jours</span>
            </li>
          </ul>
          <Button
            size="lg"
            onClick={handleContactRedirect}
            className="w-full text-lg px-8 py-6 h-auto bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start animate-gradient-x text-white font-bold rounded-xl shadow-lg"
          >
            Je lance mon projet maintenant
            <ArrowRight className="ml-2" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Offre limitée dans le temps - Seulement 5 places disponibles ce mois-ci
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
