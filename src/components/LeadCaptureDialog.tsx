
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFacebookPixel from "@/hooks/useFacebookPixel";

const LeadCaptureDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { trackLead } = useFacebookPixel();

  useEffect(() => {
    // Afficher le pop-up après 5 secondes de présence sur la page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;

    trackLead({ 
      email_address: email,
      first_name: firstName 
    });
    setSubmitted(true);
    
    // Fermer le dialog après 2 secondes
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            🚨 Il reste 5 sites vitrine à 249,90 € ce mois-ci !
          </DialogTitle>
          <DialogDescription className="text-center pt-4 space-y-4">
            <p>
              Profite de notre offre exclusive avant qu'elle disparaisse :
              Un site pro, rapide, optimisé pour Google… livré en 5 jours, sans que tu aies à t'en occuper.
            </p>
            <p className="font-medium">
              🔒 Aucun engagement – Juste ton email pour qu'on te réserve ta place 😉
            </p>
          </DialogDescription>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-6 text-center text-green-600 font-semibold animate-fade-in">
            ✨ Merci {firstName} ! Nous vous recontactons très vite.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <Input
              type="text"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
            />
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
            >
              Je veux mon site pro à 249,90 €
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
