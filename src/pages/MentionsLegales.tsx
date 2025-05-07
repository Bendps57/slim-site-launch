
import React from 'react';
import FooterSection from '@/components/sections/FooterSection';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">1. Informations légales</h2>
          <p className="mb-4">Le site web www.elimyt.com est édité par:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Nom de la société</strong>: eLimyt</li>
            <li><strong>Forme juridique</strong>: Micro-entreprise</li>
            <li><strong>Siège social</strong>: 37000 Tours, France</li>
            <li><strong>Email</strong>: contact@elimyt.com</li>
            <li><strong>Directeur de la publication</strong>: Olivier Belliot</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">2. Hébergement</h2>
          <p className="mb-4">Le site www.elimyt.com est hébergé par:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Nom</strong>: Vercel Inc.</li>
            <li><strong>Adresse</strong>: 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
            <li><strong>Site web</strong>: vercel.com</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble du site www.elimyt.com, y compris sa structure, son design, ses textes, images, photographies, 
            illustrations, et autres éléments, est protégé par le droit d'auteur et plus généralement par le droit de la 
            propriété intellectuelle.
          </p>
          <p className="mb-4">
            Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie 
            des éléments du site incluant les textes, les images et les concepts, sans l'autorisation écrite préalable 
            de eLimyt, est strictement interdite et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">4. Limitation de responsabilité</h2>
          <p className="mb-4">
            eLimyt s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur son site. 
            Toutefois, eLimyt ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à 
            disposition sur son site. En conséquence, eLimyt décline toute responsabilité pour tout dommage résultant 
            notamment d'imprécisions, inexactitudes, omissions ou d'informations incomplètes.
          </p>
          <p className="mb-4">
            eLimyt ne peut être tenu responsable de tout dommage direct ou indirect résultant de l'utilisation 
            des informations et/ou services offerts par ce site.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">5. Liens hypertextes</h2>
          <p className="mb-4">
            Le site www.elimyt.com peut contenir des liens hypertextes vers d'autres sites internet ou d'autres sources d'informations. 
            eLimyt n'exerce aucun contrôle sur ces sites et sources externes, et ne peut être tenu responsable de leur contenu.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">6. Modification des mentions légales</h2>
          <p className="mb-4">
            eLimyt se réserve le droit de modifier les présentes mentions légales à tout moment. L'utilisateur est donc 
            invité à les consulter régulièrement.
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default MentionsLegales;
