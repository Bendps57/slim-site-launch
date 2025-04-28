
import React, { useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import useFacebookPixel from "@/hooks/useFacebookPixel";

const ContactFormSection = () => {
  const { toast } = useToast();
  const { trackLead } = useFacebookPixel();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Give the browser time to send the form data
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Track lead event
      trackLead({ 
        content_name: 'Contact Form Submission',
        content_category: 'Contact'
      });
      
      toast({
        title: "Merci pour votre message",
        description: "Nous vous recontacterons très rapidement.",
      });
    }, 1000);
    
    // Form will be submitted normally since we're using the native form action
    return true;
  };

  return (
    <section id="contact-form" className="py-16 px-4 bg-card animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Prêt à <span className="gradient-text">démarrer votre projet</span> ?
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Remplissez le formulaire ci-dessous ou appelez-nous directement pour profiter de notre offre limitée.
        </p>
        <div className="bg-background p-8 rounded-lg shadow-lg">
          <form 
            className="space-y-6"
            action="https://formsubmit.co/de6f1460387106439bcf91723d37902d" 
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="Nouvelle demande de site vitrine à 249,90€" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Nom *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">Entreprise</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
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
                  name="email"
                  required 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Téléphone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  required 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Votre projet en quelques mots</label>
              <textarea 
                id="message" 
                name="message"
                rows={4} 
                className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Profitez de l'offre maintenant"} <ArrowRight className="ml-2 h-5 w-5" />
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
  );
};

export default ContactFormSection;
