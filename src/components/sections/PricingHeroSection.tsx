import React from 'react';
import { Clock, ShieldCheck, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useFacebookPixel from '@/hooks/useFacebookPixel';
import { openContactPopup } from '@/utils/popupUtils';

const featureItems = [
  {
    title: "Livré en 7 jours",
    description: "Votre site web professionnel prêt en un temps record, sans compromis sur la qualité.",
    icon: <Clock className="h-7 w-7 text-[#F59E42] animate-spin-slow" />,
    badge: "Express",
    grad: "from-[#FFF5E0] to-[#FFEFD0]",
    titleColor: "text-[#F59E42]"
  },
  {
    title: "Satisfaction garantie",
    description: "100% remboursé sous 14 jours si vous n'êtes pas entièrement satisfait de votre site.",
    icon: <ShieldCheck className="h-7 w-7 text-[#5BE49B] animate-pulse" />,
    badge: "Garanti",
    grad: "from-[#D0FBEA] to-[#D0F3FB]",
    titleColor: "text-[#2DB887]"
  },
  {
    title: "Tout inclus pour démarrer",
    description: "Domaine & hébergement inclus la 1ère année, sans aucuns frais cachés.",
    icon: <Package className="h-7 w-7 text-[#4E60CE] animate-bounce" />,
    badge: "Tout inclus",
    grad: "from-[#E0E7FF] to-[#C7D2FE]",
    titleColor: "text-[#4E60CE]"
  },
];

const PricingHeroSection = () => {
  const { trackEvent } = useFacebookPixel();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactPopup();
    
    trackEvent('Lead', {
      content_name: 'Hero Section Button Click',
      content_category: 'CTA',
      value: 249.90,
      currency: 'EUR'
    });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-6xl mx-auto text-center">
        <img 
          src="/lovable-uploads/e0efda63-50ee-4d5e-bace-82a438cb3313.png" 
          alt="eLimyt - Création de sites web professionnels" 
          className="mx-auto mb-8 w-64 h-auto animate-scale-in"
        />
        <div className="mt-14 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Démarquez-vous avec un Site Web Professionnel qui Convertit vos Visiteurs en Clients
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Un site web clé en main livré en 7 jours, optimisé pour les conversions, avec hébergement inclus la 1ère année
          </h2>

          <div className="bg-primary/5 border border-primary/10 p-6 rounded-xl mb-8 mx-auto max-w-2xl">
            <p className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-primary">249,90€</span>{' '}
              <span className="text-red-500 line-through text-2xl">2000€</span>
            </p>
            <p className="text-lg font-medium text-primary/80">
              Offre limitée - 5 places disponibles ce mois-ci
            </p>
          </div>

          <Button
            size="lg"
            onClick={handleContactClick}
            className="text-xs sm:text-base px-3 sm:px-10 py-2 sm:py-6 h-auto bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start animate-gradient-x text-white shadow-xl shadow-primary/10 rounded-xl font-bold mb-8 truncate flex items-center justify-center"
          >
            Transformer ma présence en ligne
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-12">
            {featureItems.map((item, idx) => (
              <div
                key={idx}
                className={`relative p-1 bg-gradient-to-tr ${item.grad} rounded-2xl shadow-lg overflow-hidden group hover:scale-[1.02] transition-transform duration-200`}
              >
                <div className="flex flex-col h-full items-center text-center bg-card rounded-2xl p-6 relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <span className="flex items-center justify-center rounded-full w-12 h-12 bg-white/90 shadow">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className={`font-bold text-lg mb-2 ${item.titleColor}`}>{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroSection;
