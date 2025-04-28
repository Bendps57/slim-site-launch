
import { useState } from "react";
import useFacebookPixel from "./useFacebookPixel";

export const useEbookForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { trackLead, trackEbookDownload } = useFacebookPixel();

  const handleSubmit = (e: React.FormEvent) => {
    // Ne pas empêcher la soumission du formulaire
    if (!email) return;
    
    console.log("Tracking ebook form submission for:", email);
    
    // Tracking events
    trackLead({ email_address: email });
    
    trackEbookDownload("Guide premier clients site vitrine", { 
      currency: "EUR", 
      value: 0.00,
      status: "complete" 
    });
    
    // On définit comme soumis et on laisse le formulaire se soumettre naturellement
    setSubmitted(true);
    
    console.log("Formulaire ebook hook soumis avec succès");
  };

  return {
    email,
    setEmail,
    submitted,
    isLoading,
    handleSubmit
  };
};
