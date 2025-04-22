
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EbookForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return submitted ? (
    <div className="py-6 px-4 bg-white/10 backdrop-blur-md rounded-lg text-center shadow-lg font-semibold text-green-400 animate-scale-in">
      🎉 Merci ! Le guide arrive dans votre boîte mail.
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md bg-white/10 p-4 rounded-lg backdrop-blur-md shadow-lg animate-fade-in">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        className="flex-1 border-2 border-white/30 bg-white/5 placeholder:text-white/70 text-white"
      />
      <Button 
        type="submit" 
        className="font-bold px-6 bg-white text-background hover:bg-white/90 transition-all duration-300 pulse-animation"
      >
        Recevoir le guide gratuitement
      </Button>
    </form>
  );
};

export default EbookForm;
