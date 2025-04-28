
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
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row gap-2 w-full max-w-md bg-white shadow-lg rounded-lg p-4 animate-fade-in"
    >
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
