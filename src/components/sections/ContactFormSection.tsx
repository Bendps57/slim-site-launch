
import React, { useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import useFacebookPixel from '@/hooks/useFacebookPixel';

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const { trackLead, trackFormSubmission } = useFacebookPixel();

  // Cette fonction gère uniquement le tracking et n'empêche pas la soumission
  const handleSubmitTracking = () => {
    // Récupérer les valeurs du formulaire
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    
    const name = nameInput?.value;
    const email = emailInput?.value;
    const phone = phoneInput?.value;

    if (name && email && phone) {
      console.log("Tracking contact form submission for:", email, name);
      
      // Suivre le lead
      trackLead({ 
        email_address: email,
        first_name: name,
        phone_number: phone
      });
      
      // Suivre la soumission du formulaire
      trackFormSubmission("Contact Form", {
        currency: "EUR",
        value: 0.00,
        form_name: "Contact Form"
      });

      // Définir comme soumis et laisser le formulaire se soumettre naturellement
      setSubmitted(true);
      console.log("Formulaire de contact (sections) soumis avec succès à FormSubmit");
    }
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
          {submitted ? (
            <div className="py-10 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Message envoyé avec succès!</h3>
              <p className="text-muted-foreground">Nous vous recontacterons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form 
              action="https://formsubmit.co/rlacy376@gmail.com" 
              method="POST" 
              className="space-y-6"
              onSubmit={handleSubmitTracking}
            >
              {/* Configuration FormSubmit */}
              <input type="hidden" name="_subject" value="Nouveau contact depuis le site" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_replyto" value="" />
              <input type="hidden" name="_autoresponse" value="Merci pour votre demande de contact" />
              
              {/* Champ pour empêcher le spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
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
              >
                Profitez de l'offre maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          )}
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
