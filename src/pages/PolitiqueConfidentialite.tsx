
import React from 'react';
import FooterSection from '@/components/sections/FooterSection';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">1. Collecte des informations</h2>
          <p className="mb-4">
            Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, 
            faites un achat, participez à un concours, et/ou lorsque vous vous déconnectez. Les informations recueillies incluent 
            votre nom, votre adresse e-mail, numéro de téléphone, et/ou carte de crédit.
          </p>
          <p className="mb-4">
            En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, 
            y compris votre adresse IP, vos logiciels et votre matériel, et la page que vous demandez.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">2. Utilisation des informations</h2>
          <p className="mb-4">
            Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
            <li>Fournir un contenu publicitaire personnalisé</li>
            <li>Améliorer notre site Web</li>
            <li>Améliorer le service client et vos besoins de prise en charge</li>
            <li>Vous contacter par e-mail</li>
            <li>Administrer un concours, une promotion, ou une enquête</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">3. Confidentialité du commerce en ligne</h2>
          <p className="mb-4">
            Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas 
            vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, 
            en dehors de ce qui est nécessaire pour répondre à une demande et/ou une transaction.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">4. Divulgation à des tiers</h2>
          <p className="mb-4">
            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. 
            Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, 
            tant que ces parties conviennent de garder ces informations confidentielles.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">5. Protection des informations</h2>
          <p className="mb-4">
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. 
            Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. 
            Nous protégeons également vos informations hors ligne.
          </p>
          <p className="mb-4">
            Toutes vos données personnelles sont cryptées et stockées de manière sécurisée conformément aux normes de l'industrie.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">6. Cookies</h2>
          <p className="mb-4">
            Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. En outre, nos cookies améliorent 
            l'expérience d'utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n'est 
            en aucune façon liée à des informations personnelles identifiables sur notre site.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">7. Se désabonner</h2>
          <p className="mb-4">
            Nous utilisons l'adresse e-mail que vous fournissez pour vous envoyer des informations et mises à jour relatives à votre 
            commande, des nouvelles de l'entreprise de façon occasionnelle, des informations sur des produits liés, etc. 
            Si à n'importe quel moment vous souhaitez vous désinscrire et ne plus recevoir d'e-mails, des instructions de 
            désabonnement détaillées sont incluses en bas de chaque e-mail.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">8. Consentement</h2>
          <p className="mb-4">
            En utilisant notre site, vous consentez à notre politique de confidentialité.
          </p>
          <p className="mb-4">
            Pour toute question concernant cette politique de confidentialité, n'hésitez pas à nous contacter à contact@elimyt.com
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default PolitiqueConfidentialite;
