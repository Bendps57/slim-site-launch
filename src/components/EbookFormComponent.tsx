
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface EbookFormComponentProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const EbookFormComponent = ({ email, setEmail, handleSubmit, isLoading }: EbookFormComponentProps) => {
  return (
    <form 
      action="https://formsubmit.co/rlacy376@gmail.com" 
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 w-full max-w-md bg-white shadow-lg rounded-lg p-4 animate-fade-in"
    >
      {/* Configuration FormSubmit */}
      <input type="hidden" name="_subject" value="Téléchargement Ebook Site Vitrine" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={window.location.href} />
      <input type="hidden" name="_replyto" value="" />
      <input type="hidden" name="_autoresponse" value="Merci pour votre demande de téléchargement de notre ebook" />
      
      {/* Champ pour empêcher le spam */}
      <input type="text" name="_honey" style={{ display: 'none' }} />
      
      <Input
        type="email"
        name="email"
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

export default EbookFormComponent;
