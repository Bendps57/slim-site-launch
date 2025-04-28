
import React from "react";
import { useState } from "react";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import EbookSuccess from "../EbookSuccess";

const EbookForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { trackLead, trackEbookDownload } = useFacebookPixel();

  // Cette fonction gère uniquement le tracking avant la soumission du formulaire
  const handleSubmitTracking = (e: React.FormEvent) => {
    // Récupérer l'email depuis le formulaire
    const emailInput = document.getElementById("email-input") as HTMLInputElement;
    const email = emailInput?.value;

    if (email) {
      console.log("Tracking ebook form submission for:", email);
      
      // Suivre le lead
      trackLead({ email_address: email });
      
      // Suivre le téléchargement de l'ebook
      trackEbookDownload("Guide premier clients site vitrine", { 
        currency: "EUR", 
        value: 0.00,
        status: "complete" 
      });

      // Afficher message de succès mais laisser le formulaire se soumettre
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <EbookSuccess />;
  }

  return (
    <form 
      action="https://formsubmit.co/rlacy376@gmail.com" 
      method="POST"
      className="flex flex-col sm:flex-row gap-2 w-full max-w-md bg-white shadow-lg rounded-lg p-4 animate-fade-in"
      onSubmit={handleSubmitTracking}
    >
      {/* Configuration FormSubmit */}
      <input type="hidden" name="_subject" value="Téléchargement Ebook Site Vitrine" />
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={window.location.href} />
      
      {/* Champ pour empêcher le spam */}
      <input type="text" name="_honey" style={{ display: 'none' }} />
      
      <input
        type="email"
        name="email"
        id="email-input"
        required
        placeholder="Votre adresse email"
        className="flex-1 border-2 border-primary/30 bg-white placeholder:text-gray-500 text-foreground p-2 rounded"
      />
      
      <button 
        type="submit" 
        className="font-bold px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-all duration-300 pulse-animation"
      >
        Recevoir le guide gratuitement
      </button>
    </form>
  );
};

export default EbookForm;
