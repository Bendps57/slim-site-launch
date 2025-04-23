
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import { openContactPopup } from "@/utils/popupUtils";

const SecondCTASection = () => {
  const { trackEvent } = useFacebookPixel();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactPopup();
    
    trackEvent('Lead', {
      content_name: 'Second CTA Button Click',
      content_category: 'CTA',
      value: 249.90,
      currency: 'EUR'
    });
  };

  return (
    <section className="py-16 px-4 text-center bg-secondary/30">
      <div className="max-w-2xl mx-auto rounded-xl shadow-lg p-10 bg-background">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ne laissez pas passer cette opportunité unique
        </h3>
        <p className="mb-8 text-muted-foreground">
          Un site web d'exception n'a jamais été aussi accessible. Démarquez-vous de vos concurrents et captez l'attention de vos clients idéaux dès aujourd'hui.
        </p>
        <Button
          onClick={handleContactClick}
          className="bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start text-white font-bold py-3 px-8 rounded-lg shadow-lg pulse-animation text-lg"
        >
          Je veux mon site professionnel à 249,90€
          <ArrowRight className="ml-2" />
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Garanti 14 jours satisfait ou remboursé. Sans aucun engagement.
        </p>
      </div>
    </section>
  );
};

export default SecondCTASection;
