
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useFacebookPixel from "@/hooks/useFacebookPixel";

const SecondCTASection = () => {
  const { trackEvent } = useFacebookPixel();

  const handleContactRedirect = () => {
    // Ouverture dans un nouvel onglet
    window.open('https://elimyt.com/contact', '_blank');
    
    // Track the click event
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
          Ne ratez pas cette opportunité exclusive
        </h3>
        <p className="mb-8 text-muted-foreground">
          Un site web professionnel n'a jamais été aussi accessible. Transformez votre présence en ligne dès aujourd'hui.
        </p>
        <Button
          onClick={handleContactRedirect}
          className="bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start text-white font-bold py-3 px-8 rounded-lg shadow-lg pulse-animation text-lg"
        >
          Je veux mon site à 249,90€
          <ArrowRight className="ml-2" />
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Satisfait ou remboursé sous 14 jours. Sans engagement.
        </p>
      </div>
    </section>
  );
};

export default SecondCTASection;
