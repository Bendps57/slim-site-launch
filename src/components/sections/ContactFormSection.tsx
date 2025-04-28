
import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const ContactFormSection = () => {
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
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Nom *</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">Entreprise</label>
                <input 
                  type="text" 
                  id="company" 
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
                  required 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Téléphone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Votre projet en quelques mots</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
            >
              Profitez de l'offre maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="tel:+33600000000" className="flex items-center text-primary hover:text-primary/80">
              <Phone className="h-5 w-5 mr-2" /> +33 6 00 00 00 00
            </a>
            <a href="mailto:rlacy376@gmail.com" className="flex items-center text-primary hover:text-primary/80">
              <Mail className="h-5 w-5 mr-2" /> rlacy376@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
