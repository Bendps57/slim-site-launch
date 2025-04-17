
import React from 'react';
import { ArrowRight, MessageSquare, Code, Send } from 'lucide-react';
import StepCard from '@/components/StepCard';

interface ProcessSectionProps {
  onScrollToForm: () => void;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comment ça marche ? <span className="gradient-text">Simple comme bonjour</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <StepCard 
            number={1}
            title="Brief rapide"
            description="Un court entretien pour comprendre vos besoins, votre activité et vos préférences esthétiques."
            icon={<MessageSquare className="h-6 w-6 text-primary" />}
          />
          <StepCard 
            number={2}
            title="Création"
            description="Nos designers et développeurs créent votre site sur mesure en se basant sur vos besoins."
            icon={<Code className="h-6 w-6 text-primary" />}
          />
          <StepCard 
            number={3}
            title="Livraison"
            description="Votre site est livré prêt à l'emploi avec un guide simple pour le mettre à jour si besoin."
            icon={<Send className="h-6 w-6 text-primary" />}
          />
        </div>
        <div className="mt-12 text-center">
          <button 
            onClick={onScrollToForm}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center mx-auto pulse-animation"
          >
            Démarrer mon projet maintenant <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
