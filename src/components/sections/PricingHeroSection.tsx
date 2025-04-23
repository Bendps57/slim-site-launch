
import React from 'react';
import { Clock, ShieldCheck, Package } from 'lucide-react';
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
    
    trackEvent('ClickButton', { 
      button_name: 'Contact Button - Hero',
      button_location: 'Pricing Hero Section' 
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
        <div className="mt-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Un Site Web Professionnel Qui Transforme Vos Visiteurs en Clients Fidèles
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Propulsez votre entreprise avec un site qui vous ressemble, en 7 jours seulement
          </h2>
          <div className="bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-300 p-1 rounded-lg mb-8 inline-block animate-[pulse_1.5s_ease-in-out_infinite]">
            <div className="bg-background/95 rounded-md p-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 animate-[pulse_2s_ease-in-out_infinite] opacity-50 rounded-md"></div>
              <div className="relative z-10">
                <p className="text-3xl md:text-4xl font-bold">
                  Pour seulement <span className="text-primary">249,90€</span>{' '}
                  <span className="text-red-500 line-through text-2xl animate-bounce">2000€</span>
                </p>
                <p className="text-yellow-600 font-bold mt-2 animate-pulse">
                  Offre exceptionnelle - 5 places seulement ce mois-ci
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-12">
            {featureItems.map((item, idx) => (
              <div
                key={idx}
                className={`relative p-1 bg-gradient-to-tr ${item.grad} rounded-2xl shadow-2xl overflow-hidden group hover:scale-[1.045] transition-transform duration-200`}
                style={{ minHeight: 168 }}
              >
                <div className="flex flex-col h-full items-center text-center bg-card rounded-2xl p-7 relative z-10 animate-fade-in">
                  <div className="absolute top-5 right-5">
                    <span className="bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-lg text-xs font-bold text-white shadow-lg uppercase tracking-wide drop-shadow filter blur-0 transition-all group-hover:scale-110">{item.badge}</span>
                  </div>
                  <div className="flex items-center justify-center mb-4 mt-3">
                    <span className="flex items-center justify-center rounded-full w-14 h-14 shadow bg-white/80 group-hover:shadow-xl transition-all">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className={`font-extrabold text-lg mb-2 ${item.titleColor}`}>{item.title}</h4>
                  <p className="text-base text-muted-foreground font-medium">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-80 pointer-events-none rounded-2xl"></div>
                <div className="absolute -bottom-8 right-0 w-36 h-36 bg-primary/20 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            onClick={handleContactClick}
            className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start animate-gradient-x text-white shadow-xl shadow-primary/10 rounded-xl font-bold"
          >
            Obtenez votre site web professionnel maintenant
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroSection;
