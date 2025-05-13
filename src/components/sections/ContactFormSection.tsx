
import React, { useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { openContactPopup } from "@/utils/popupUtils";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import { useNavigate } from "react-router-dom";
import { PhoneInput, phonePrefixes } from "@/components/ui/phone-input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+33"); // France par défaut
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { trackEvent } = useFacebookPixel();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) return;
    
    setIsLoading(true);
    
    try {
      const fullPhoneNumber = phone ? `${phonePrefix}${phone.startsWith('0') ? phone.substring(1) : phone}` : '';
      
      const response = await fetch(`https://formsubmit.co/ajax/contact@elimyt.com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone: fullPhoneNumber,
          message,
          _subject: "Nouvelle demande de contact depuis le site",
          _captcha: "false",
          _template: "table"
        }),
      });
      
      if (!response.ok) throw new Error('Erreur lors de l\'envoi');
      
      trackEvent('ClickButton', { 
        content_name: 'Contact Form Section Button Click',
        content_category: 'Contact'
      });
      
      setSubmitted(true);
      
      // Redirection après un court délai
      setTimeout(() => {
        navigate('/merci');
      }, 1000);
      
    } catch (error) {
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
            <div className="py-6 text-center text-green-600 font-semibold animate-fade-in">
              ✨ Merci ! Nous avons bien reçu votre message et vous recontacterons très vite.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-2 border-primary/30 focus:border-primary"
                disabled={isLoading}
              />
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-primary/30 focus:border-primary"
                disabled={isLoading}
              />
              <PhoneInput
                prefix={phonePrefix}
                setPrefix={setPhonePrefix}
                placeholder="Votre numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 border-primary/30 focus:border-primary"
                disabled={isLoading}
              />
              <Textarea
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-2 border-primary/30 focus:border-primary min-h-[100px]"
                disabled={isLoading}
              />
              <Button 
                type="submit"
                className="w-full max-w-md mx-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? "Envoi en cours..." : "Envoyer ma demande"} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
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
