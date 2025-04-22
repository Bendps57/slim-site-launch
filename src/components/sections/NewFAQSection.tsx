
import React from 'react';
import FAQItem from '@/components/FAQItem';

const faqs = [
  {
    question: "Pourquoi votre offre est-elle si abordable ?",
    answer: "Notre approche innovante et nos processus optimisés nous permettent de vous proposer un service premium à un prix accessible. Nous croyons que chaque entreprise mérite une présence en ligne professionnelle."
  },
  {
    question: "Peut-on modifier le site après livraison ?",
    answer: "Oui, nous pouvons effectuer des modifications après la livraison."
  },
  {
    question: "Comment se passe la création du site ?",
    answer: "Après votre commande, nous vous envoyons un questionnaire pour comprendre vos besoins. Nous créons ensuite une première version en 3-4 jours, puis effectuons les ajustements selon vos retours pour une livraison en 7 jours maximum."
  },
  {
    question: "Que se passe-t-il après la première année ?",
    answer: "L'hébergement et le nom de domaine sont offerts la première année. Ensuite, vous ne payez que 9,90€/mois pour l'hébergement premium, les mises à jour de sécurité et l'assistance. Vous restez propriétaire de votre nom de domaine."
  },
  {
    question: "Et si je ne suis pas satisfait ?",
    answer: "Nous offrons une garantie satisfait ou remboursé de 14 jours. Si vous n'êtes pas satisfait, nous vous remboursons intégralement, sans condition."
  }
];

const NewFAQSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              variant="light"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFAQSection;

