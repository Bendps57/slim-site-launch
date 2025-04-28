
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Design Premium Sur Mesure",
    description: "Une identité visuelle qui vous démarque immédiatement de vos concurrents"
  },
  {
    title: "100% Responsive",
    description: "Une expérience utilisateur parfaite sur tous les appareils, même en mobilité"
  },
  {
    title: "Optimisé pour Google",
    description: "Un positionnement stratégique pour attirer vos clients idéaux naturellement"
  },
  {
    title: "Chargement Ultra-Rapide",
    description: "Une performance optimale qui conserve l'attention de vos visiteurs"
  },
  {
    title: "Tout Inclus Sans Surprise",
    description: "Domaine et hébergement premium offerts pendant toute la première année"
  },
  {
    title: "Livraison Express 7 Jours",
    description: "Un site opérationnel en un temps record, ou c'est offert !"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Le Site Web Premium Que Votre Entreprise Mérite
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Nous fusionnons esthétique soignée et technologie performante pour créer un site qui transforme vos visiteurs en clients fidèles.
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
