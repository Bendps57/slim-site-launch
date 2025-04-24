
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import PricingCard from '@/components/sections/PricingCard';
import { openContactPopup } from '@/utils/popupUtils';

const HeroSection: React.FC<{ onScrollToForm: () => void }> = ({ onScrollToForm }) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactPopup();
  };

  return (
    <section className="relative py-16 md:py-20 px-4 hero-gradient animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-3/5">
            <img 
              src="/lovable-uploads/56490a21-2262-4aa9-87ed-d2cc23be530c.png" 
              alt="eLimyt Logo" 
              className="w-48 h-auto mb-8 mx-auto md:mx-0"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Votre site web professionnel</span> prêt en quelques jours
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              à seulement <span className="gradient-text">249,90€</span> <span className="line-through text-muted-foreground">499€</span>
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Une solution clé en main pensée pour les indépendants, artisans, commerçants et TPE qui souhaitent développer leur présence en ligne sans se ruiner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg flex items-center justify-center pulse-animation text-sm sm:text-base truncate"
              >
                Profitez de l'offre maintenant <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button 
                className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg flex items-center justify-center text-sm sm:text-base truncate"
                onClick={handleContactClick}
              >
                Réservez votre appel <Phone className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
          <PricingCard onScrollToForm={onScrollToForm} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

