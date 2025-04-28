
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import { useToast } from "@/hooks/use-toast";

const EbookForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { trackLead, trackEbookDownload } = useFacebookPixel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    try {
      // Utilisation directe de l'email dans l'URL FormSubmit pour une meilleure délivrabilité
      const response = await fetch(`https://formsubmit.co/rlacy376@gmail.com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email,
          _subject: "Téléchargement Ebook Site Vitrine",
          _captcha: "false", 
          _template: "table", 
          message: `Nouveau téléchargement d'ebook:
          Email: ${email}
          Source: Formulaire ebook`
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');
      
      trackLead({ email_address: email });
      
      trackEbookDownload("Guide premier clients site vitrine", { 
        currency: "EUR", 
        value: 0.00,
        status: "complete" 
      });
      
      setSubmitted(true);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      });
      console.error("Erreur d'envoi du formulaire ebook:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return submitted ? (
    <div className="py-6 px-4 bg-white shadow-lg rounded-lg text-center font-semibold text-green-600 animate-scale-in">
      🎉 Merci ! Le guide arrive dans votre boîte mail.
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md bg-white shadow-lg rounded-lg p-4 animate-fade-in">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        className="flex-1 border-2 border-primary/30 bg-white placeholder:text-gray-500 text-foreground"
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
