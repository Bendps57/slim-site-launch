
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Design Premium Sur Mesure",
    description: "Démarquez-vous de vos concurrents avec une identité visuelle unique qui reflète vos valeurs"
  },
  {
    title: "Optimisé pour les Ventes",
    description: "Structure pensée pour transformer vos visiteurs en clients avec des appels à l'action stratégiques"
  },
  {
    title: "100% Responsive",
    description: "Une expérience parfaite sur tous les appareils pour ne perdre aucune opportunité"
  },
  {
    title: "Référencement Naturel",
    description: "Optimisé pour Google afin d'attirer naturellement vos clients idéaux"
  },
  {
    title: "Hébergement Premium Offert",
    description: "Domaine et hébergement inclus la 1ère année, aucun frais caché"
  },
  {
    title: "Livraison Express 7 Jours",
    description: "Votre site opérationnel en un temps record, ou remboursé !"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Un Site Web Qui Travaille pour Vous 24/7
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Transformez votre présence en ligne en véritable machine à vendre avec un site web optimisé pour les conversions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex items-center justify-center rounded-full w-8 h-8 bg-primary/10 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
