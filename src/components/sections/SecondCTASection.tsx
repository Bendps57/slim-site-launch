
import React from "react";

interface SecondCTASectionProps {
  onScrollToForm: () => void;
}

const SecondCTASection: React.FC<SecondCTASectionProps> = ({ onScrollToForm }) => (
  <section className="py-16 px-4 text-center bg-secondary/30">
    <div className="max-w-2xl mx-auto rounded-xl shadow-lg p-10 bg-background">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Prêt à accélérer votre présence en ligne ?
      </h3>
      <p className="mb-8 text-muted-foreground">
        Ensemble, donnons vie à votre présence en ligne.
      </p>
      <button
        onClick={onScrollToForm}
        className="bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg shadow pulse-animation"
      >
        Prenez rendez-vous pour discuter de votre projet
      </button>
    </div>
  </section>
);

export default SecondCTASection;
