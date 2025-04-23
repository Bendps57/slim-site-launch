
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Design Premium Sur Mesure",
    description: "Une identité visuelle unique qui reflète vos valeurs et attire votre clientèle cible"
  },
  {
    title: "100% Responsive",
    description: "Une expérience parfaite sur tous les appareils : ordinateurs, tablettes, smartphones"
  },
  {
    title: "Optimisé pour Google",
    description: "Structure technique et contenus pensés pour un meilleur référencement naturel"
  },
  {
    title: "Chargement Ultra-Rapide",
    description: "Performance optimale pour garder vos visiteurs et améliorer votre référencement"
  },
  {
    title: "Tout Inclus",
    description: "Nom de domaine et hébergement premium offerts la première année"
  },
  {
    title: "Livraison Express Garantie",
    description: "Votre site en ligne en 7 jours maximum ou c'est offert !"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Le Site Web Qu'il Vous Faut, Sans Compromis
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Nous combinons design premium et performances techniques pour créer un site qui convertit vos visiteurs en clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center rounded-full w-8 h-8 bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </span>
                <h3 className="font-semibold text-xl">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
