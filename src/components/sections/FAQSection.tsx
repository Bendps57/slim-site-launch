
import React from "react";
import FAQItem from "@/components/FAQItem";

const faqs = [
  {
    question: "En combien de temps vais-je voir les premiers résultats ?",
    answer: "Avec les stratégies détaillées dans l'ebook, vous pouvez commencer à attirer vos premiers prospects qualifiés en quelques semaines. Le guide vous donne une feuille de route claire pour maximiser la visibilité de votre site dès son lancement."
  },
  {
    question: "Je n'ai aucune expérience en création de site, est-ce que ce guide est fait pour moi ?",
    answer: "Absolument ! L'ebook a été conçu spécialement pour les entrepreneurs débutants. Vous y trouverez des conseils pratiques et des exemples concrets, sans jargon technique complexe."
  },
  {
    question: "Comment ce guide va m'aider à convertir plus de visiteurs en clients ?",
    answer: "Le guide vous révèle les techniques éprouvées pour créer un site qui convertit : structure optimale des pages, éléments de confiance à mettre en avant, et surtout comment créer des appels à l'action efficaces qui poussent les visiteurs à passer à l'action."
  }
];

const FAQSection = () => (
  <section className="py-16 px-4 bg-background text-foreground">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Questions <span className="text-foreground/80">fréquentes</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <FAQItem 
            key={i} 
            question={f.question} 
            answer={f.answer}
            variant="light"
          />
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
