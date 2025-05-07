
import React from "react";

const FooterSection = () => (
  <footer className="py-10 px-4 bg-secondary text-center">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold">eLimyt</h3>
          <p className="text-muted-foreground">Agence web – Sites sur mesure</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row gap-3 mb-2 md:mb-0">
          <a href="/mentions-legales" className="underline hover:text-primary">Mentions légales</a>
          <a href="/politique-confidentialite" className="underline hover:text-primary">Politique de confidentialité</a>
        </div>
        <div>
          Contact&nbsp;: <a href="mailto:contact@elimyt.com" className="hover:underline text-primary pl-1">contact@elimyt.com</a>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()} eLimyt.com — Tous droits réservés
      </p>
    </div>
  </footer>
);

export default FooterSection;
