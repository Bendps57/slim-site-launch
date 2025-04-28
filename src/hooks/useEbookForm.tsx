
import { useState } from "react";
import useFacebookPixel from "./useFacebookPixel";
import { useToast } from "./use-toast";

export const useEbookForm = () => {
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
      // Tracking events
      trackLead({ email_address: email });
      
      trackEbookDownload("Guide premier clients site vitrine", { 
        currency: "EUR", 
        value: 0.00,
        status: "complete" 
      });
      
      // Assurez-vous que l'email est correctement formaté et envoyé
      const response = await fetch("https://formsubmit.co/1af96ee36446d1694daab4b1c6791dd2", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: new URLSearchParams({
          email: email,
          _subject: "Téléchargement Ebook Site Vitrine",
          _captcha: "false",
          _next: window.location.href, // Ajout d'un retour à la page actuelle
          message: `Nouveau téléchargement d'ebook: Email: ${email}`
        })
      });
      
      console.log("Réponse FormSubmit pour ebook:", response);
      
      if (!response.ok) {
        throw new Error(`Erreur FormSubmit: ${response.status}`);
      }
      
      toast({
        title: "Succès",
        description: "Le guide a été envoyé à votre email.",
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Erreur d'envoi du formulaire:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    submitted,
    isLoading,
    handleSubmit
  };
};
