
import React from 'react';
import { Zap, PenTool, Check } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Pourquoi choisir <span className="gradient-text">eLimyt</span> pour votre site web ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-6 w-6 text-primary" />,
              title: "Rapide et efficace",
              description: "Site livré en quelques jours seulement, sans temps perdu en allers-retours inutiles."
            },
            {
              icon: <PenTool className="h-6 w-6 text-primary" />,
              title: "Design sur mesure",
              description: "Une identité visuelle personnalisée qui reflète parfaitement votre activité et vos valeurs."
            },
            {
              icon: <Check className="h-6 w-6 text-primary" />,
              title: "Prix fixe, sans surprise",
              description: "Un tarif unique de 249,90€ sans abonnement ni frais cachés. Vous restez propriétaire de votre site."
            },
          ].map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg card-hover animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
