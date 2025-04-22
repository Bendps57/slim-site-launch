
import React from 'react';
import { Check, X } from 'lucide-react';

const BeforeAfterSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Avant / Après</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-destructive/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <X className="h-6 w-6 text-destructive" />
              AVANT
            </h3>
            <ul className="space-y-3">
              {[
                "Crédibilité limitée",
                "Opportunités manquées",
                "Visibilité faible"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <X className="h-5 w-5 text-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Check className="h-6 w-6 text-primary" />
              APRÈS (avec eLimyt)
            </h3>
            <ul className="space-y-3">
              {[
                "Image pro et rassurante",
                "Plus de prospects qualifiés",
                "Présence 24h/24",
                "Meilleur référencement"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
