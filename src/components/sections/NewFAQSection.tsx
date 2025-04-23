
import React from 'react';
import FAQItem from '@/components/FAQItem';

const faqs = [
  {
    question: "Pourquoi votre offre est-elle si abordable par rapport aux autres agences ?",
    answer: "Grâce à notre méthodologie exclusive et nos processus optimisés, nous avons éliminé les coûts superflus sans sacrifier la qualité. Notre mission est de rendre accessible l'excellence digitale à tous les entrepreneurs, quelle que soit la taille de leur entreprise."
  },
  {
    question: "Comment vais-je pouvoir modifier mon site une fois terminé ?",
    answer: "Vous aurez un accès complet et intuitif à votre site. Nous vous formons gratuitement aux modifications courantes pour votre autonomie. Pour des changements plus complexes, nos forfaits maintenance sont parmi les plus compétitifs du marché."
  },
  {
    question: "Comment se déroule précisément le processus de création ?",
    answer: "Tout commence par un questionnaire ciblé pour comprendre votre activité et vos objectifs. Notre équipe crée ensuite une première version en 3-4 jours, puis nous affinons ensemble les détails pour une livraison finale en 7 jours maximum. Simple, efficace et sans stress pour vous."
  },
  {
    question: "Que se passe-t-il après la première année d'hébergement offerte ?",
    answer: "Après votre année offerte, l'hébergement premium et le nom de domaine ne vous coûteront que 9,90€/mois, sans engagement. Ce tarif inclut la sécurité, les mises à jour techniques et l'assistance. Vous restez bien sûr propriétaire de votre nom de domaine."
  },
  {
    question: "Et si le résultat ne correspond pas à mes attentes ?",
    answer: "Votre satisfaction est notre priorité absolue. Nous vous offrons une garantie 'satisfait ou remboursé' de 14 jours sans condition. Si votre site ne répond pas à vos attentes, nous vous remboursons intégralement, sans discussion ni question."
  },
  {
    question: "Mon site sera-t-il optimisé pour être bien référencé sur Google ?",
    answer: "Absolument ! Chaque site que nous créons intègre les meilleures pratiques SEO : structure technique optimisée, temps de chargement ultra-rapide, design responsive, balises méta personnalisées et contenus optimisés pour les mots-clés pertinents de votre secteur."
  }
];

const NewFAQSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Questions fréquentes
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Tout ce que vous devez savoir avant de commander votre site web professionnel
        </p>
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
