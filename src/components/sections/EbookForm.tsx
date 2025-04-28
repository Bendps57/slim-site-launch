
import React from "react";
import { useState } from "react";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import EbookSuccess from "../EbookSuccess";

const EbookForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { trackLead, trackEbookDownload } = useFacebookPixel();

  // This function will handle the tracking before form submission
  const handleSubmitTracking = (e: React.FormEvent) => {
    // Get the email from the form
    const emailInput = document.getElementById("email-input") as HTMLInputElement;
    const email = emailInput?.value;

    if (email) {
      // Track the lead
      trackLead({ email_address: email });
      
      // Track the ebook download
      trackEbookDownload("Guide premier clients site vitrine", { 
        currency: "EUR", 
        value: 0.00,
        status: "complete" 
      });

      // Show success message but allow form submission to continue
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <EbookSuccess />;
  }

  return (
    <form 
      action="https://formsubmit.co/1af96ee36446d1694daab4b1c6791dd2" 
      method="POST"
      className="flex flex-col sm:flex-row gap-2 w-full max-w-md bg-white shadow-lg rounded-lg p-4 animate-fade-in"
      onSubmit={handleSubmitTracking}
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={window.location.href} />
      <input type="hidden" name="_subject" value="Téléchargement Ebook Site Vitrine" />
      
      {/* Honeypot field to prevent spam */}
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
