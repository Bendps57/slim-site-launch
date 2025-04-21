
import React from "react";
import FAQItem from "@/components/FAQItem";

const faqs = [
  {
    question: "Quels sont les délais de réalisation ?",
    answer: "Le délai habituel de réalisation est de 5 à 10 jours ouvrés, selon la complexité de votre projet."
  },
  {
    question: "Proposez-vous des services de maintenance ?",
    answer: "Oui, nous proposons des forfaits de maintenance adaptés à vos besoins : sécurité, mises à jour, évolutions."
  },
  {
    question: "Puis-je modifier mon site moi-même après sa création ?",
    answer: "Bien sûr. Nous créons des sites faciles à prendre en main et vous formons pour les modifications courantes."
  }
];

const FAQSection = () => (
  <section className="py-16 px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Questions <span className="gradient-text">fréquentes</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <FAQItem key={i} question={f.question} answer={f.answer} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
