
import React from "react";
import { Check } from "lucide-react";

const benefits = [
  "Comprendre ce qui fait fuir (ou retient) vos visiteurs",
  "Éviter les erreurs qui coûtent cher dès le démarrage",
  "Adopter les bonnes pratiques pour générer des prospects",
  "Optimiser votre site pour le SEO et la conversion",
  "Bonus : Ressources et modèles concrets inclus",
];
const objections = [
  {
    question: "Je n’y connais rien en technique",
    answer: "Aucune compétence nécessaire. Le guide est conçu pour les débutants et les non-tech.",
  },
  {
    question: "Est-ce réservé à un profil précis ?",
    answer: "Ce guide s’adresse à tous les entrepreneurs, freelances, coachs, PME, et porteurs de projet numérique.",
  },
];

const EbookBenefitsSection = () => (
  <section className="py-12 px-3 bg-secondary/10">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold mb-4">Ce que vous allez apprendre :</h3>
        <ul className="space-y-3">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start">
              <Check className="text-primary mr-2 mt-1 w-5 h-5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Questions fréquentes :</h3>
        {objections.map((obj, i) => (
          <div key={i} className="mb-4">
            <div className="font-bold text-primary mb-1">{obj.question}</div>
            <div className="text-muted-foreground">{obj.answer}</div>
          </div>
        ))}
        <div>
          <span className="font-bold text-primary">Pour qui&nbsp;?</span> <br />
          <span>
            Entrepreneurs, freelances, coachs, PME… Toute personne souhaitant comprendre les bonnes pratiques web, sans jargon ni prise de tête.
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default EbookBenefitsSection;
