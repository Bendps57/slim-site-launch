
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Site Web Premium",
    description: "Design élégant et professionnel, à l'image de votre marque"
  },
  {
    title: "100% Responsive",
    description: "Compatible ordinateurs, tablettes, smartphones"
  },
  {
    title: "SEO Optimisé",
    description: "Pour mieux ressortir sur Google"
  },
  {
    title: "Performance Maximale",
    description: "Chargement rapide pour une meilleure expérience utilisateur"
  },
  {
    title: "Nom de Domaine + Hébergement",
    description: "Offerts la première année"
  },
  {
    title: "Livraison Express",
    description: "En 7 jours garantie, ou c'est offert !"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Une Solution Complète
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Check className="h-5 w-5 text-primary" />
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
