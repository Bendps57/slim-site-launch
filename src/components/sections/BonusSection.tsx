
import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bonus Offerts
          <span className="text-muted-foreground ml-2">(valeur 449€)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Gift className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Audit SEO personnalisé
            </h3>
            <p className="text-muted-foreground">valeur 350€</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <Gift className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Guide Premium
            </h3>
            <p className="text-muted-foreground">
              Stratégies pour convertir vos visiteurs (valeur 99€)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
