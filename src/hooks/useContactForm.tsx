
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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
      
      // FormSubmit with activation string instead of naked email
      const response = await fetch("https://formsubmit.co/1af96ee36446d1694daab4b1c6791dd2", {
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

  return {
    formData,
    isLoading,
    submitted,
    handleChange,
    handleSubmit
  };
};
