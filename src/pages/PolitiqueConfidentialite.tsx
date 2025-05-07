
import React from 'react';
import FooterSection from '@/components/sections/FooterSection';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            La présente politique de confidentialité a pour objectif d'informer les utilisateurs du site www.elimyt.com 
            de la manière dont leurs informations personnelles sont collectées, utilisées et protégées.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">2. Collecte des données personnelles</h2>
          <p className="mb-4">
            Nous collectons les informations suivantes lorsque vous utilisez nos formulaires de contact ou d'inscription:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone (le cas échéant)</li>
            <li>Informations relatives à votre projet (le cas échéant)</li>
          </ul>
          <p className="mb-4">
            Ces données sont collectées uniquement avec votre consentement explicite, lorsque vous remplissez volontairement 
            un formulaire sur notre site.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">3. Utilisation des données</h2>
          <p className="mb-4">
            Les données personnelles que nous collectons sont utilisées pour:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Répondre à vos demandes d'information</li>
            <li>Vous contacter concernant votre projet</li>
            <li>Améliorer nos services et notre site web</li>
            <li>Vous envoyer des informations sur nos services (uniquement avec votre consentement explicite)</li>
          </ul>
          <p className="mb-4">
            Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers, sauf si nous avons 
            votre autorisation ou si nous sommes légalement tenus de le faire.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">4. Protection des données</h2>
          <p className="mb-4">
            Nous mettons en œuvre diverses mesures de sécurité pour préserver la sécurité de vos informations personnelles. 
            Nous utilisons des protocoles de sécurité avancés pour protéger vos données contre tout accès non autorisé.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">5. Cookies</h2>
          <p className="mb-4">
            Notre site utilise des cookies pour améliorer votre expérience en ligne. Les cookies sont de petits fichiers 
            texte stockés sur votre ordinateur qui nous aident à analyser la façon dont les utilisateurs naviguent sur notre site.
          </p>
          <p className="mb-4">
            Nous utilisons principalement:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Des cookies techniques, nécessaires au fonctionnement du site</li>
            <li>Des cookies d'analyse pour comprendre comment les visiteurs utilisent notre site</li>
            <li>Des cookies de marketing (via Facebook Pixel) pour mesurer l'efficacité de nos campagnes</li>
          </ul>
          <p className="mb-4">
            Vous pouvez choisir de désactiver les cookies dans les paramètres de votre navigateur, mais certaines fonctionnalités 
            de notre site pourraient ne plus fonctionner correctement.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">6. Vos droits</h2>
          <p className="mb-4">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant 
            vos données personnelles:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (droit à l'oubli)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition</li>
          </ul>
          <p className="mb-4">
            Pour exercer l'un de ces droits, veuillez nous contacter à l'adresse email: contact@elimyt.com
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">7. Modifications de notre politique de confidentialité</h2>
          <p className="mb-4">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Tout changement sera 
            immédiatement publié sur cette page. Nous vous encourageons à consulter régulièrement cette page pour rester 
            informé de tout changement.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">8. Contact</h2>
          <p className="mb-4">
            Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à:
          </p>
          <p className="mb-4">
            Email: contact@elimyt.com
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default PolitiqueConfidentialite;
