
import React from "react";
import { CheckCircle, HelpCircle } from "lucide-react";

const benefits = [
  { title: "Design personnalisé", description: "Adapté à votre marque pour vous différencier." },
  { title: "Optimisation SEO", description: "Une meilleure visibilité sur Google." },
  { title: "Site responsive", description: "Parfaitement adapté à tous les appareils." },
  { title: "Accompagnement dédié", description: "De la conception à la mise en ligne." }
];

const objections = [
  {
    question: "Et si je n'ai pas de contenu prêt ?",
    answer: "Nous vous accompagnons dans la création de contenus pour un site cohérent et efficace."
  }
];

const BenefitsObjectionsSection = () => (
  <section className="py-16 px-4 bg-secondary/20">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Pourquoi <span className="gradient-text">choisir eLimyt ?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {benefits.map((b, idx) => (
          <div key={idx} className="flex items-start">
            <CheckCircle className="h-7 w-7 text-primary mr-3 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-1">{b.title}</h3>
              <p className="text-muted-foreground">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-background rounded-lg p-6 border shadow flex items-center gap-4">
        <HelpCircle className="text-primary w-8 h-8 shrink-0" />
        <div>
          <h4 className="font-semibold mb-1">Objection fréquente</h4>
          <p className="text-foreground">{objections[0].question}</p>
          <p className="text-muted-foreground">{objections[0].answer}</p>
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsObjectionsSection;
