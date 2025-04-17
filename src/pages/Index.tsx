
import React from 'react';
import { ArrowRight, Check, MessageSquare, Code, Send, Phone, Mail, Zap, PenTool } from 'lucide-react';
import Testimonial from '@/components/Testimonial';
import StepCard from '@/components/StepCard';
import FAQItem from '@/components/FAQItem';

const Index = () => {
  const handleScrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 px-4 hero-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-3/5">
              <img 
                src="/lovable-uploads/97ddbd67-b8b1-44b2-acd2-196d4e12a3a2.png" 
                alt="eLimyt Logo" 
                className="w-48 h-auto mb-8 mx-auto md:mx-0"
              />
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Votre site web professionnel</span> prêt en quelques jours
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                à seulement <span className="gradient-text">249,90€</span> <span className="line-through text-muted-foreground">499€</span>
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Une solution clé en main pensée pour les indépendants, artisans, commerçants et TPE qui souhaitent développer leur présence en ligne sans se ruiner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleScrollToForm}
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center pulse-animation"
                >
                  Profitez de l'offre maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                  onClick={handleScrollToForm}
                >
                  Réservez votre appel gratuit <Phone className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="w-full md:w-2/5 bg-card p-6 rounded-lg shadow-lg">
              <div className="pricing-badge text-white font-bold py-2 px-4 rounded-lg inline-block mb-4">
                Offre limitée dans le temps
              </div>
              <h3 className="text-2xl font-bold mb-4">Site web professionnel tout inclus</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Design responsive (mobile, tablette, PC)",
                  "Identité visuelle personnalisée",
                  "Jusqu'à 5 pages (accueil, services, contact, etc.)",
                  "Optimisation pour les moteurs de recherche",
                  "Formulaire de contact",
                  "Carte Google Maps intégrée",
                  "Liens vers vos réseaux sociaux",
                  "Sans abonnement",
                  "Livraison rapide en quelques jours",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-3xl font-bold mr-2">249,90€</span>
                <span className="text-xl line-through text-muted-foreground">499€</span>
              </div>
              <button 
                onClick={handleScrollToForm}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
              >
                Profitez de l'offre maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir <span className="gradient-text">eLimyt</span> pour votre site web ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: "Rapide et efficace",
                description: "Site livré en quelques jours seulement, sans temps perdu en allers-retours inutiles."
              },
              {
                icon: <PenTool className="h-6 w-6 text-primary" />,
                title: "Design sur mesure",
                description: "Une identité visuelle personnalisée qui reflète parfaitement votre activité et vos valeurs."
              },
              {
                icon: <Check className="h-6 w-6 text-primary" />,
                title: "Prix fixe, sans surprise",
                description: "Un tarif unique de 249,90€ sans abonnement ni frais cachés. Vous restez propriétaire de votre site."
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg card-hover">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              onClick={handleScrollToForm}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center mx-auto pulse-animation"
            >
              Démarrer mon projet maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              name="Marie Dupont"
              role="Fleuriste indépendante"
              text="Je cherchais un site pro sans me ruiner. eLimyt a créé exactement ce que je voulais en moins d'une semaine. Mes clients adorent et je reçois des commandes directement via le site !"
            />
            <Testimonial 
              name="Thomas Leroy"
              role="Artisan menuisier"
              text="Travailler avec eLimyt a été un plaisir. Service efficace, prix fixe sans surprise et le résultat est à la hauteur. Mon site attire de nouveaux clients chaque semaine."
            />
            <Testimonial 
              name="Sophie Martin"
              role="Consultante RH"
              text="Je recommande eLimyt à 100% ! J'ai été bluffée par la rapidité et la qualité. Mon site est élégant, professionnel et parfaitement adapté à mon image de marque."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <section id="contact-form" className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Prêt à <span className="gradient-text">démarrer votre projet</span> ?
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Remplissez le formulaire ci-dessous ou appelez-nous directement pour profiter de notre offre limitée.
          </p>
          <div className="bg-background p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Nom *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 font-medium">Entreprise</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Téléphone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Votre projet en quelques mots</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
              >
                Profitez de l'offre maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
              <a href="tel:+33600000000" className="flex items-center text-primary hover:text-primary/80">
                <Phone className="h-5 w-5 mr-2" /> +33 6 00 00 00 00
              </a>
              <a href="mailto:contact@elimyt.com" className="flex items-center text-primary hover:text-primary/80">
                <Mail className="h-5 w-5 mr-2" /> contact@elimyt.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">eLimyt</h3>
            <p className="text-muted-foreground">Sites web professionnels à prix fixe</p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} eLimyt.com - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
