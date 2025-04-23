
import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bonus Exclusifs Offerts
          <span className="text-muted-foreground ml-2">(valeur 449€)</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Des compléments stratégiques pour maximiser l'impact de votre site et accélérer votre réussite
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">
              Audit SEO personnalisé
            </h3>
            <p className="text-muted-foreground mb-3">
              Décryptage complet de votre positionnement actuel et stratégie sur mesure pour améliorer votre visibilité sur Google et attirer plus de clients qualifiés.
            </p>
            <p className="text-primary font-semibold">valeur 350€</p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3">
              Guide Premium de Conversion
            </h3>
            <p className="text-muted-foreground mb-3">
              Techniques avancées et exclusives pour transformer vos visiteurs en prospects puis en clients fidèles grâce à des stratégies d'engagement éprouvées.
            </p>
            <p className="text-primary font-semibold">valeur 99€</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
