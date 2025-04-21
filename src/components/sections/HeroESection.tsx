
import React from "react";

interface HeroESectionProps {
  onScrollToForm: () => void;
}

const HeroESection: React.FC<HeroESectionProps> = ({ onScrollToForm }) => (
  <section className="relative py-16 md:py-24 px-4 bg-background animate-fade-in">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <img
          src="/lovable-uploads/56490a21-2262-4aa9-87ed-d2cc23be530c.png"
          alt="Logo eLimyt"
          className="w-40 md:w-52 h-auto mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
          Des sites web sur mesure qui reflètent votre identité et convertissent vos visiteurs en clients.
        </h1>
        <h2 className="text-xl md:text-2xl mb-4 font-semibold text-foreground">
          Chez <span className="text-primary font-bold">eLimyt</span>, nous concevons des sites web personnalisés, alliant design moderne et fonctionnalités optimisées pour répondre aux besoins spécifiques de votre entreprise.
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-3 mb-4">
          <button
            onClick={onScrollToForm}
            className="bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg shadow pulse-animation"
          >
            Demandez votre devis gratuit
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          Sans engagement et réponse sous 24h.
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        {/* Remplacez l'image par un visuel de qualité ou une capture d'écran (ici un placeholder) */}
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
          alt="Exemple de site réalisé par eLimyt"
          className="rounded-xl shadow-lg w-full max-w-md border"
        />
      </div>
    </div>
  </section>
);

export default HeroESection;
