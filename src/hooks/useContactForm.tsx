
import { useState } from "react";
import useFacebookPixel from "./useFacebookPixel";
import { useToast } from "./use-toast";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { trackLead, trackFormSubmission } = useFacebookPixel();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsLoading(true);

    try {
      // Tracking events
      trackLead({ 
        email_address: formData.email,
        first_name: formData.name,
        phone_number: formData.phone
      });
      
      trackFormSubmission("Contact Form", {
        currency: "EUR",
        value: 0.00,
        form_name: "Contact Form"
      });
      
      // FormSubmit avec la chaîne d'activation au lieu de l'email nu
      const response = await fetch("https://formsubmit.co/1af96ee36446d1694daab4b1c6791dd2", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: new URLSearchParams({
          name: formData.name,
          company: formData.company || "Non fourni",
          email: formData.email,
          phone: formData.phone,
          message: formData.message || "Pas de message",
          _subject: "Nouveau contact depuis le site",
          _captcha: "false",
          _next: window.location.href, // Ajout d'un retour à la page actuelle
        })
      });
      
      console.log("Réponse FormSubmit (contact):", response);
      
      if (!response.ok) {
        throw new Error(`Erreur FormSubmit: ${response.status}`);
      }
      
      toast({
        title: "Succès",
        description: "Votre message a bien été envoyé. Nous vous recontacterons très vite.",
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Erreur d'envoi du formulaire de contact:", error);
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
    formData,
    isLoading,
    submitted,
    handleChange,
    handleSubmit
  };
};
