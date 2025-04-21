
import React from "react";
import EbookForm from "./EbookForm";
import SocialProofSection from "./SocialProofSection";
import OfficialSiteSection from "./OfficialSiteSection";

const EbookHeroSection = () => (
  <section className="w-full pt-16 pb-10 bg-background px-3 md:px-0">
    <div className="max-w-4xl mx-auto flex flex-col items-start">
      <img
        src="https://i.imgur.com/r31D71Y.png"
        alt="Logo eLimyt"
        className="w-36 h-auto mb-2"
      />
      <div style={{ height: "48px" }} />
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug w-full">
        Offert&nbsp;: Le guide des <span className="gradient-text">7 erreurs à éviter</span> pour réussir son site web.
      </h1>
      <h2 className="text-lg md:text-2xl font-medium mb-6 text-muted-foreground w-full">
        Recevez gratuitement notre ebook pour éviter les pièges les plus courants lors de la création de votre site, et découvrez comment en faire un outil de conversion puissant.
      </h2>
      <SocialProofSection />
      <div className="my-6 w-full">
        <EbookForm />
        <div className="text-xs text-muted-foreground mt-2 text-center md:text-left">Aucune pub. Juste de la valeur.</div>
      </div>
      <OfficialSiteSection />
    </div>
  </section>
);

export default EbookHeroSection;
