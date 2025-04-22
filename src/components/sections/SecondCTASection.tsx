
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
          Prêt à accélérer votre présence en ligne ?
        </h3>
        <p className="mb-8 text-muted-foreground">
          Ensemble, donnons vie à votre présence en ligne.
        </p>
        <Button
          onClick={handleContactRedirect}
          className="bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg shadow pulse-animation"
        >
          Je profite de l'offre à 249,90€
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default SecondCTASection;
