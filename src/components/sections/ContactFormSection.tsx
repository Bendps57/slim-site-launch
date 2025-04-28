
import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { openContactPopup } from "@/utils/popupUtils";
import useFacebookPixel from "@/hooks/useFacebookPixel";

const ContactFormSection = () => {
  const { trackEvent } = useFacebookPixel();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openContactPopup();
    
    trackEvent('Lead', { 
      content_name: 'Contact Form Section Button Click',
      content_category: 'Contact'
    });
  };

  return (
    <section id="contact-form" className="py-16 px-4 bg-card animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Prêt à <span className="gradient-text">démarrer votre projet</span> ?
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Cliquez sur le bouton ci-dessous ou appelez-nous directement pour profiter de notre offre limitée.
        </p>
        <div className="bg-background p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <button 
              onClick={handleSubmit}
              className="w-full max-w-md mx-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
            >
              Profitez de l'offre maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
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
  );
};

export default ContactFormSection;
