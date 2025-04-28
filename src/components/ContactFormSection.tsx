
import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const formAction = "https://formsubmit.co/ajax/rlacy376@gmail.com";
      
      // Afficher les données envoyées pour le débogage
      console.log("Données du formulaire envoyées:", formData);

      // Envoi en JSON
      const response = await fetch(formAction, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Nouvelle demande de contact site vitrine',
          _captcha: 'false',
          _template: 'table'
        })
      });

      console.log("Statut de la réponse FormSubmit (JSON):", response.status);
      const responseData = await response.json();
      console.log("Données de réponse:", responseData);

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');
      
      setSubmitted(true);
      toast({
        title: "Succès",
        description: "Votre message a bien été envoyé. Nous vous recontacterons rapidement.",
      });
      
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Détails complets de l'erreur:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
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
          <form onSubmit={handleSubmit} className="space-y-6" id="contactForm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Nom *</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">Entreprise</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isLoading}
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
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Téléphone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Votre projet en quelques mots</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? "Envoi en cours..." : "Profitez de l'offre maintenant"} <ArrowRight className="ml-2 h-5 w-5" />
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
