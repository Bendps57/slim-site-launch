
import React from 'react';
import FooterSection from '@/components/sections/FooterSection';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">1. Informations légales</h2>
          <p className="mb-4">Le site eLimyt est édité par eLimyt, entreprise individuelle dont le siège social est situé rue de Verdun, 57700 Hayange, France.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Responsable de publication</strong>: Benoit Wemmert</li>
            <li><strong>WhatsApp</strong>: +33 7 89 02 68 90</li>
            <li><strong>Email</strong>: contact@elimyt.com</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">2. Hébergement</h2>
          <p className="mb-4">Le site eLimyt est hébergé par HOSTINGER, dont le siège social est situé à HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre.</p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble du contenu du site eLimyt (textes, graphismes, logos, images, vidéos, etc.) est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
          </p>
          <p className="mb-4">
            Toute reproduction totale ou partielle de ce contenu est strictement interdite sans autorisation préalable.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">4. Limitation de responsabilité</h2>
          <p className="mb-4">
            eLimyt s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur son site, 
            dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. eLimyt décline toute responsabilité :
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Pour toute interruption du site</li>
            <li>Pour toute survenance de bogues</li>
            <li>Pour tout dommage résultant d'une intrusion frauduleuse d'un tiers</li>
            <li>Et plus généralement pour tout dommage, direct ou indirect, quelles qu'en soient les causes, origines, natures ou conséquences</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">5. Liens hypertextes</h2>
          <p className="mb-4">
            Le site eLimyt peut contenir des liens hypertextes vers d'autres sites internet. 
            eLimyt n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">6. Droit applicable et juridiction compétente</h2>
          <p className="mb-4">
            Les présentes mentions légales sont soumises au droit français. 
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default MentionsLegales;
