
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { PhoneInput, phonePrefixes } from "@/components/ui/phone-input";

const EbookForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+33"); // France par défaut
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { trackEvent, trackEbookDownload } = useFacebookPixel();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
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
          _subject: "Téléchargement Ebook Site Vitrine",
          _captcha: "false", 
          _template: "table", 
          message: `Nouveau téléchargement d'ebook:
          Nom: ${name || "Non renseigné"}
          Email: ${email}
          Téléphone: ${fullPhoneNumber || "Non renseigné"}
          Source: Formulaire ebook`
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');
      
      trackEvent('CompleteRegistration', { email_address: email });
      
      trackEbookDownload("Guide premier clients site vitrine", { 
        currency: "EUR", 
        value: 0.00,
        status: "complete" 
      });
      
      setSubmitted(true);
      
      // Redirection vers la page de remerciement après un court délai
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

  return submitted ? (
    <div className="py-6 px-4 bg-white shadow-lg rounded-lg text-center font-semibold text-green-600 animate-scale-in">
      🎉 Merci ! Le guide arrive dans votre boîte mail.
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full max-w-md bg-white shadow-lg rounded-lg p-4 animate-fade-in">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Votre nom (optionnel)"
        className="border-2 border-primary/30 bg-white placeholder:text-gray-500 text-foreground"
        disabled={isLoading}
      />
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email *"
        className="border-2 border-primary/30 bg-white placeholder:text-gray-500 text-foreground"
        disabled={isLoading}
      />
      <PhoneInput
        prefix={phonePrefix}
        setPrefix={setPhonePrefix}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Votre numéro de téléphone (optionnel)"
        className="border-2 border-primary/30 bg-white"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className="font-bold px-6 bg-primary text-white hover:bg-primary/90 transition-all duration-300 pulse-animation"
        disabled={isLoading}
      >
        {isLoading ? "Envoi..." : "Recevoir le guide gratuitement"}
      </Button>
    </form>
  );
};

export default EbookForm;
