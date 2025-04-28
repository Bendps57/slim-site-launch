
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
      // Log what we're sending for debugging
      console.log("Envoi du formulaire de contact avec les données:", formData);
      
      // FormSubmit direct POST submission
      const response = await fetch("https://formsubmit.co/rlacy376@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: new URLSearchParams({
          name: formData.name,
          company: formData.company || 'Non fourni',
          email: formData.email,
          phone: formData.phone,
          message: formData.message || 'Pas de message',
          _subject: "Nouvelle demande de contact site vitrine",
          _captcha: "false"
        })
      });
      
      console.log("Réponse FormSubmit (contact):", response);
      
      if (!response.ok) {
        throw new Error(`Erreur FormSubmit: ${response.status}`);
      }
      
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
          {submitted ? (
            <div className="py-10 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Message envoyé avec succès!</h3>
              <p className="text-muted-foreground">Nous vous recontacterons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Nom *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
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
                    name="company"
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
                    name="email"
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
                    name="phone"
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
                  name="message"
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
          )}
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
