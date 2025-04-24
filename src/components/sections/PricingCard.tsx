
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { openContactPopup } from '@/utils/popupUtils';
import useFacebookPixel from '@/hooks/useFacebookPixel';

interface PricingCardProps {
  onScrollToForm: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ onScrollToForm }) => {
  const { trackEvent } = useFacebookPixel();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactPopup();
    
    trackEvent('Lead', {
      content_name: 'Pricing Card Button Click',
      content_category: 'CTA',
      value: 249.90,
      currency: 'EUR'
    });
  };

  return (
    <div className="w-full md:w-2/5 bg-card p-6 rounded-lg shadow-lg">
      <div className="pricing-badge text-white font-bold py-2 px-4 rounded-lg inline-block mb-4">
        Offre limitée dans le temps
      </div>
      <h3 className="text-2xl font-bold mb-4">Site web professionnel tout inclus</h3>
      <ul className="space-y-3 mb-6">
        {[
          "Design responsive (mobile, tablette, PC)",
          "Identité visuelle personnalisée",
          "Jusqu'à 5 pages (accueil, services, contact, etc.)",
          "Optimisation pour les moteurs de recherche",
          "Formulaire de contact",
          "Carte Google Maps intégrée",
          "Liens vers vos réseaux sociaux",
          "Sans abonnement",
          "Livraison rapide en quelques jours",
        ].map((item, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-baseline justify-center mb-4">
        <span className="text-3xl font-bold mr-2">249,90€</span>
        <span className="text-xl line-through text-muted-foreground">499€</span>
      </div>
      <button 
        onClick={handleClick}
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center text-sm md:text-base"
      >
        Je veux mon site pro <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default PricingCard;
