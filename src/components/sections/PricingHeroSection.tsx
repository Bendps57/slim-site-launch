
import React from 'react';
import { Check, Clock, Package, ShieldCheck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useFacebookPixel from '@/hooks/useFacebookPixel';

const featureItems = [
  {
    title: "Livré en 7 jours",
    description: "Votre site prêt à propulser votre image rapidement.",
    icon: <Clock className="h-6 w-6 text-primary" />,
    style: "from-[#FDE68A] to-[#F59E42]"
  },
  {
    title: "Satisfait ou remboursé 14 jours",
    description: "Essayez sans risque, remboursement garanti.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    style: "from-[#A7F3D0] to-[#38BDF8]"
  },
  {
    title: "Hébergement & nom de domaine offerts 1ère année",
    description: "Tout inclus, pas de frais cachés la première année.",
    icon: <Package className="h-6 w-6 text-primary" />,
    style: "from-[#E0E7FF] to-[#C7D2FE]"
  },
];

const PricingHeroSection = () => {
  const { trackEvent } = useFacebookPixel();

  const handleContactRedirect = () => {
    // Changement de l'URL ici
    window.open('https://elimyt.com/contact', '_blank');
    
    trackEvent('Lead', {
      content_name: 'Contact Button Click',
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
          alt="eLimyt Logo" 
          className="mx-auto mb-8 w-64 h-auto animate-scale-in"
        />
        <div className="mt-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transformez Votre Image Professionnelle
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Avec un Site Web Premium livré en 7 jours
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
                  Offre limitée - Seulement 5 places disponibles ce mois-ci
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featureItems.map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-gradient-to-tr ${item.style} p-[2px] rounded-xl shadow-lg hover:scale-105 transition-transform duration-200`}
              >
                <div className="flex flex-col h-full items-center text-center bg-card rounded-[10px] p-6 relative z-10 animate-fade-in">
                  <div className="flex items-center justify-center mb-2">
                    <span className="flex items-center justify-center bg-primary/10 rounded-full w-12 h-12 shadow">
                      {item.icon}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        
          <Button
            size="lg"
            onClick={handleContactRedirect}
            className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start animate-gradient-x text-white"
          >
            Je profite de l'offre à 249,90€
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroSection;
