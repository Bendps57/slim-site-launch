
import React from 'react';
import FAQItem from '@/components/FAQItem';

const FAQSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Questions <span className="gradient-text">fréquentes</span>
        </h2>
        <div className="space-y-4">
          <FAQItem 
            question="Combien de temps faut-il pour créer mon site web ?"
            answer="Notre délai moyen de livraison est de 5 à 7 jours ouvrés après validation du brief. Pour des projets plus complexes, nous vous communiquerons un délai précis lors de notre premier échange."
          />
          <FAQItem 
            question="Est-ce que je serai propriétaire de mon site web ?"
            answer="Absolument ! Vous êtes 100% propriétaire de votre site web. Nous vous fournissons tous les accès nécessaires. Il n'y a pas d'abonnement caché ni de frais récurrents pour utiliser votre site."
          />
          <FAQItem 
            question="Quels sont les frais supplémentaires à prévoir ?"
            answer="Le prix de 249,90€ inclut la création complète de votre site. Les seuls frais supplémentaires concernent l'hébergement et le nom de domaine (environ 50-80€/an) que nous pouvons mettre en place pour vous ou vous guider dans ces démarches."
          />
          <FAQItem 
            question="Est-ce que je pourrai modifier mon site moi-même ?"
            answer="Oui ! Nous créons votre site sur des plateformes simples à utiliser et nous vous fournissons un guide pour effectuer des modifications basiques. Si vous préférez, nous pouvons également vous proposer une formule de maintenance à petit prix."
          />
          <FAQItem 
            question="Et si je ne suis pas satisfait du résultat ?"
            answer="Votre satisfaction est notre priorité. Nous travaillons avec vous jusqu'à ce que vous soyez pleinement satisfait du résultat. Si malgré nos efforts, le site ne correspond pas à vos attentes, nous proposons une garantie satisfait ou remboursé sous conditions."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
