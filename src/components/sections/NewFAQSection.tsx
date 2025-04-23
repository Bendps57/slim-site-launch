
import React from 'react';
import FAQItem from '@/components/FAQItem';

const faqs = [
  {
    question: "Pourquoi votre offre est-elle si abordable comparée à d'autres agences ?",
    answer: "Notre approche innovante et notre processus de création optimisé nous permettent de vous proposer un site web premium à un prix juste. Nous croyons que chaque entreprise mérite une présence en ligne professionnelle, quelle que soit sa taille."
  },
  {
    question: "Puis-je modifier le contenu de mon site après sa livraison ?",
    answer: "Absolument ! Nous vous fournissons un accès complet à votre site et une formation rapide pour effectuer les modifications courantes. Pour des changements plus complexes, nous proposons des forfaits de maintenance très abordables."
  },
  {
    question: "Comment se déroule le processus de création de mon site ?",
    answer: "Après votre commande, nous vous envoyons un questionnaire pour comprendre vos besoins. Nous créons ensuite une première version en 3-4 jours, puis effectuons les ajustements selon vos retours pour une livraison en 7 jours maximum. Simple, rapide et efficace."
  },
  {
    question: "Que se passe-t-il après la première année d'hébergement offert ?",
    answer: "L'hébergement et le nom de domaine sont offerts la première année. Ensuite, vous ne payez que 9,90€/mois pour l'hébergement premium, les mises à jour de sécurité et l'assistance technique - sans engagement. Vous restez propriétaire de votre nom de domaine."
  },
  {
    question: "Et si je ne suis pas satisfait du résultat final ?",
    answer: "Votre satisfaction est notre priorité absolue. Nous offrons une garantie 'satisfait ou remboursé' de 14 jours. Si vous n'êtes pas pleinement satisfait, nous vous remboursons intégralement, sans condition ni question."
  },
  {
    question: "Mon site sera-t-il optimisé pour les moteurs de recherche (SEO) ?",
    answer: "Oui ! Tous nos sites sont créés avec les meilleures pratiques SEO : structure technique optimisée, vitesse de chargement rapide, responsive design, balises méta personnalisées, et contenus optimisés pour les mots-clés pertinents de votre activité."
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
