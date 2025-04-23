
import React from "react";
import { openContactPopup } from "@/utils/popupUtils";

interface HeroESectionProps {
  onScrollToForm: () => void;
}

const HeroESection: React.FC<HeroESectionProps> = ({ onScrollToForm }) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault(); // S'assurer que l'événement par défaut est empêché
    openContactPopup();
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-background animate-fade-in">
      <div className="max-w-5xl mx-auto flex flex-col items-start">
        <img
          src="https://i.imgur.com/r31D71Y.png"
          alt="Logo eLimyt"
          className="w-52 h-auto mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text w-full">
          Des sites web sur mesure qui reflètent votre identité et convertissent vos visiteurs en clients.
        </h1>
        <h2 className="text-xl md:text-2xl mb-4 font-semibold text-foreground w-full">
          Chez <span className="text-primary font-bold">eLimyt</span>, nous concevons des sites web personnalisés, alliant design moderne et fonctionnalités optimisées pour répondre aux besoins spécifiques de votre entreprise.
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-3 mb-4">
          <button
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg shadow pulse-animation"
          >
            Demandez votre devis gratuit
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          Sans engagement et réponse sous 24h.
        </p>
      </div>
    </section>
  );
};

export default HeroESection;
