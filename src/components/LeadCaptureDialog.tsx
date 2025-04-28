
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
    e.preventDefault();
    console.log("Form submission started", { firstName, email, phone });
    
    if (!email || !firstName) {
      console.log("Form validation failed: missing required fields");
      return;
    }

    setIsLoading(true);
    
    try {
      // Track lead with Facebook Pixel (separate from form submission)
      trackLead({ 
        email_address: email,
        first_name: firstName,
        phone_number: phone
      });
      console.log("Facebook Pixel lead tracking triggered");
      
      // Set form as submitted and show success message
      setSubmitted(true);
      console.log("Form marked as submitted");
      
      // Submit the form to FormSubmit
      // This is handled by the form action, but we need to manually submit
      // since we're using preventDefault
      const formElement = e.target as HTMLFormElement;
      formElement.submit();
      
      // Close dialog after delay
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error in form handling:", error);
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
          <DialogDescription className="text-center pt-4 space-y-4">
            <p>
              Profite de notre offre exclusive avant qu'elle disparaisse :
              Un site pro, rapide, optimisé pour Google… livré en 7 jours, sans que tu aies à t'en occuper.
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
          <form 
            onSubmit={handleSubmit}
            action="https://formsubmit.co/rlacy376@gmail.com" 
            method="POST"
            className="space-y-4 py-4"
          >
            {/* FormSubmit configuration fields */}
            <input type="hidden" name="_subject" value="Nouvelle demande de site vitrine à 249,90€" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_autoresponse" value="Merci pour votre demande ! Nous vous recontactons rapidement." />
            <input type="hidden" name="message" value={`Nouveau lead pour site vitrine:
            Source: Pop-up de capture`} />
            
            <Input
              name="firstName"
              type="text"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
              disabled={isLoading}
            />
            <Input
              name="email"
              type="email"
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
                name="phone"
                type="tel"
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
