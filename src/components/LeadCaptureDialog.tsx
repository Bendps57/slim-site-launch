
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import { Phone } from "lucide-react";

let setIsOpenDialog: React.Dispatch<React.SetStateAction<boolean>> | null = null;

export const openLeadCaptureDialog = () => {
  if (setIsOpenDialog) {
    setIsOpenDialog(true);
  }
};

const LeadCaptureDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { trackLead } = useFacebookPixel();

  useEffect(() => {
    setIsOpenDialog = setIsOpen;
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
      setIsOpenDialog = null;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;

    setIsLoading(true);

    try {
      // Tracking event
      trackLead({ 
        email_address: email,
        first_name: firstName,
        phone_number: phone
      });
      
      // FormSubmit direct POST submission
      const response = await fetch("https://formsubmit.co/rlacy376@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        },
        body: new URLSearchParams({
          firstName: firstName,
          email: email,
          phone: phone || 'Non fourni',
          _subject: "Nouvelle demande de site vitrine à 249,90€",
          _captcha: "false",
          message: `Nouvelle demande de site vitrine: Prénom: ${firstName}, Email: ${email}, Téléphone: ${phone || 'Non fourni'}`
        })
      });
      
      console.log("Réponse FormSubmit (popup):", response);
      
      if (!response.ok) {
        throw new Error(`Erreur FormSubmit: ${response.status}`);
      }
      
      setSubmitted(true);
      
      toast({
        title: "Succès",
        description: "Votre demande a bien été envoyée. Nous vous recontacterons très vite.",
      });
      
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
      }, 2000);
      
    } catch (error) {
      console.error("Erreur d'envoi du formulaire popup:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            🚨 Il reste 5 sites vitrine à 249,90 € ce mois-ci !
          </DialogTitle>
          <div className="text-center pt-4">
            <p className="mb-4">
              Profite de notre offre exclusive avant qu'elle disparaisse :
              Un site pro, rapide, optimisé pour Google… livré en 7 jours, sans que tu aies à t'en occuper.
            </p>
            <p className="font-medium">
              🔒 Aucun engagement – Juste ton email pour qu'on te réserve ta place 😉
            </p>
          </div>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-6 text-center text-green-600 font-semibold animate-fade-in">
            ✨ Merci {firstName} ! Nous vous recontactons très vite.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <Input
              type="text"
              name="firstName"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
              disabled={isLoading}
            />
            <Input
              type="email"
              name="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
              disabled={isLoading}
            />
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                type="tel"
                name="phone"
                placeholder="Votre numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 border-primary/30 focus:border-primary pl-10"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
              disabled={isLoading}
            >
              {isLoading ? "Envoi en cours..." : "Je veux mon site pro à 249,90 €"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
