
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import useFacebookPixel from "@/hooks/useFacebookPixel";

const LeadCaptureDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    if (!email) return;

    trackLead({ email_address: email });
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
          <DialogTitle className="text-2xl font-bold text-center">
            🚀 Décuplez Votre Succès En Ligne !
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            Recevez gratuitement notre guide expert pour transformer votre présence web et attirer plus de clients.
          </DialogDescription>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-6 text-center text-green-600 font-semibold animate-fade-in">
            ✨ Merci ! Votre guide arrive dans votre boîte mail.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <Input
                type="email"
                placeholder="Votre email professionnel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-primary/30 focus:border-primary"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
            >
              Recevoir Mon Guide Gratuit
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Nous respectons votre vie privée. Désabonnement en un clic.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
