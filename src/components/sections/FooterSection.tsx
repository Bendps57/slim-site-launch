
import React from 'react';

const FooterSection = () => {
  return (
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
  );
};

export default FooterSection;
