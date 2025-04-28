
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
    console.log("Form submission started", { firstName, email, phone });
    
    // Basic form validation - this won't prevent natural form submission
    if (!email || !firstName) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
      });
      return; // Allow form submission to continue naturally
    }

    try {
      // Track lead with Facebook Pixel
      trackLead({ 
        email_address: email,
        first_name: firstName,
        phone_number: phone
      });
      console.log("Facebook Pixel lead tracking triggered");
      
      // Show success message but don't prevent form submission
      setSubmitted(true);
      setIsLoading(true);
      
      console.log("Form marked as submitted");
      console.log("Form will submit naturally to FormSubmit");
      
      // Form will submit naturally to FormSubmit
      // We don't call e.preventDefault() here
      
    } catch (error) {
      console.error("Error in form handling:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
      });
    }
    
    // Note: We intentionally don't prevent default form submission
    // and don't close the dialog automatically to ensure FormSubmit receives the data
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            🚨 Il reste 5 sites vitrine à 249,90 € ce mois-ci !
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            <div className="space-y-4">
              <p>
                Profite de notre offre exclusive avant qu'elle disparaisse :
                Un site pro, rapide, optimisé pour Google… livré en 7 jours, sans que tu aies à t'en occuper.
              </p>
              <p className="font-medium">
                🔒 Aucun engagement – Juste ton email pour qu'on te réserve ta place 😉
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <p className="text-green-600 font-semibold animate-fade-in">
              ✨ Merci {firstName} ! Nous vous recontactons très vite.
            </p>
            <p className="text-sm text-muted-foreground">
              Vérifiez votre boîte email pour confirmer la réception.
            </p>
          </div>
        ) : (
          <form 
            // No onSubmit handler to prevent interference with FormSubmit
            action="https://formsubmit.co/elimytagency@gmail.com" 
            method="POST"
            className="space-y-4 py-4"
          >
            {/* FormSubmit configuration fields - simplified */}
            <input type="hidden" name="_subject" value="Nouvelle demande de site vitrine à 249,90€" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} /> {/* Honeypot anti-spam */}
            <input type="hidden" name="message" value="Nouveau lead pour site vitrine: Source: Pop-up de capture" />
            
            <Input
              name="firstName"
              type="text"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
            />
            <Input
              name="email"
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
            />
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                name="phone"
                type="tel"
                placeholder="Votre numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-2 border-primary/30 focus:border-primary pl-10"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
              onClick={handleSubmit} // Keep tracking without preventing submission
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
