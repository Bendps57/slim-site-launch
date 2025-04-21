
import React from "react";
import EbookForm from "./EbookForm";
import SocialProofSection from "./SocialProofSection";

const EbookHeroSection = () => (
  <section className="w-full pt-16 pb-10 bg-background px-3 md:px-0">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <img
          src="/lovable-uploads/97ddbd67-b8b1-44b2-acd2-196d4e12a3a2.png"
          alt="Logo eLimyt"
          className="w-36 h-auto mb-2"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug">
          Offert&nbsp;: Le guide des <span className="gradient-text">7 erreurs à éviter</span> pour réussir son site web.
        </h1>
        <h2 className="text-lg md:text-2xl font-medium mb-6 text-muted-foreground">
          Recevez gratuitement notre ebook pour éviter les pièges les plus courants lors de la création de votre site, et découvrez comment en faire un outil de conversion puissant.
        </h2>
        <SocialProofSection />
        <div className="my-6 w-full">
          <EbookForm />
          <div className="text-xs text-muted-foreground mt-2 text-center md:text-left">Aucune pub. Juste de la valeur.</div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        {/* Mockup du ebook, vous pouvez changer l'image selon votre visuel réel */}
        <img
          src="/lovable-uploads/ebook-mockup.png"
          alt="Mockup du ebook offert"
          className="w-64 md:w-80 rounded-xl shadow-lg border-2 border-primary/30 bg-white"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  </section>
);

export default EbookHeroSection;
