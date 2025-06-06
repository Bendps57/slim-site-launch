
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useFacebookPixel from '@/hooks/useFacebookPixel';
import { openContactPopup } from '@/utils/popupUtils';

const FinalCTASection = () => {
  const { trackEvent } = useFacebookPixel();
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactPopup();
    
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
          Prêt à propulser votre entreprise avec un site d'exception ?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez les entrepreneurs visionnaires qui ont déjà transformé leur présence en ligne avec un site web professionnel pour seulement <span className="font-bold text-primary">249,90€</span>.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-xl mb-8 max-w-lg mx-auto">
          <ul className="text-left space-y-3 mb-6">
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-3">✓</span>
              <span>Design premium unique à votre image</span>
            </li>
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-3">✓</span>
              <span>Livraison express en 7 jours garantie</span>
            </li>
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-3">✓</span>
              <span>Domaine & hébergement premium offerts 1ère année</span>
            </li>
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 mr-3">✓</span>
              <span>Garantie 14 jours satisfait ou remboursé</span>
            </li>
          </ul>
          <Button
            size="lg"
            onClick={handleContactClick}
            className="w-full text-sm sm:text-base px-4 sm:px-8 py-6 h-auto bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start animate-gradient-x text-white font-bold rounded-xl shadow-lg"
          >
            <span className="truncate">Transformer ma présence en ligne</span>
            <ArrowRight className="ml-2 flex-shrink-0" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Offre exceptionnelle à durée limitée - Seulement 5 places disponibles ce mois-ci
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
