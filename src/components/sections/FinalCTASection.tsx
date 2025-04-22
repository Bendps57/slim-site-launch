import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTASection = () => {
  const handleContactRedirect = () => {
    window.location.href = 'https://elimyt.com/contact';
  };

  return (
    <section className="py-16 px-4 bg-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à transformer votre présence en ligne ?
        </h2>
        <p className="text-xl mb-8">
          Commandez votre site vitrine pour 249,90€ maintenant – Offre limitée !
        </p>
        <Button
          size="lg"
          onClick={handleContactRedirect}
          className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-button-start to-button-end hover:from-button-end hover:to-button-start animate-gradient-x text-white"
        >
          Je profite de l'offre à 249,90€
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
