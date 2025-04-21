
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EbookForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Simule l'appel API d'inscription
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // TODO : Connexion à votre service de sauvegarde d'email (Mailerlite, Mailjet, etc)
  };

  return submitted ? (
    <div className="py-6 px-4 bg-card rounded-lg text-center shadow font-semibold text-green-600 animate-scale-in">
      🎉 Merci&nbsp;! Le guide arrive dans votre boîte mail.
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        className="flex-1"
      />
      <Button type="submit" className="font-bold px-6">
        Recevoir le guide gratuitement
      </Button>
    </form>
  );
};

export default EbookForm;
