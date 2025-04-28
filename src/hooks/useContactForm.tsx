
import { useState } from "react";
import useFacebookPixel from "./useFacebookPixel";

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
  const { trackLead, trackFormSubmission } = useFacebookPixel();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Ne pas empêcher la soumission du formulaire
    if (!formData.name || !formData.email || !formData.phone) return;

    console.log("Tracking contact form submission for:", formData.email, formData.name);
    
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
    
    // On définit comme soumis et on laisse le formulaire se soumettre naturellement
    setSubmitted(true);
    
    console.log("Formulaire contact hook soumis avec succès");
  };

  return {
    formData,
    isLoading,
    submitted,
    handleChange,
    handleSubmit
  };
};
