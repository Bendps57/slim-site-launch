
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import { Phone } from "lucide-react";
import { usePopupStore } from "@/utils/popupUtils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import { PhoneInput, phonePrefixes } from "@/components/ui/phone-input";

const LeadCaptureDialog = () => {
  const { isLeadDialogOpen, closeLeadDialog } = usePopupStore();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+33"); // France par défaut
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { trackEvent } = useFacebookPixel();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-open on page load after 10 seconds
    const timer = setTimeout(() => {
      // Only open if it's not already open from a button click
      if (!usePopupStore.getState().isLeadDialogOpen) {
        usePopupStore.getState().openLeadDialog();
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;

    setIsLoading(true);

    try {
      const fullPhoneNumber = `${phonePrefix}${phone.startsWith('0') ? phone.substring(1) : phone}`;
      
      const response = await fetch(`https://formsubmit.co/ajax/contact@elimyt.com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          firstName,
          email,
          phone: fullPhoneNumber,
          _subject: "Nouvelle demande de site vitrine à 249,90€",
          _captcha: "false",
          _template: "table",
          message: `Nouveau lead pour site vitrine:
          Prénom: ${firstName}
          Email: ${email}
          Téléphone: ${fullPhoneNumber}
          Source: Pop-up de capture`
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      trackEvent('CompleteRegistration', { 
        email_address: email,
        first_name: firstName,
        phone_number: fullPhoneNumber
      });
      
      setSubmitted(true);
      
      // Fermer le dialogue et rediriger vers la page de remerciement
      setTimeout(() => {
        closeLeadDialog();
        navigate('/merci');
      }, 1000);
      
    } catch (error) {
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
    <Dialog open={isLeadDialogOpen} onOpenChange={closeLeadDialog}>
      <DialogContent className="sm:max-w-[425px] bg-card max-w-[90vw] max-h-[90vh] overflow-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-primary">
            🚨 Il reste 5 sites vitrine à 249,90 € ce mois-ci !
          </DialogTitle>
          <DialogDescription className="text-center pt-4 space-y-2 sm:space-y-4">
            <div>
              Profite de notre offre exclusive avant qu'elle disparaisse :
              Un site pro, rapide, optimisé pour Google… livré en 7 jours, sans que tu aies à t'en occuper.
            </div>
            <div className="font-medium text-sm sm:text-base">
              🔒 Aucun engagement – Juste ton email pour qu'on te réserve ta place 😉
            </div>
          </DialogDescription>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-6 text-center text-green-600 font-semibold animate-fade-in">
            ✨ Merci {firstName} ! Nous vous recontactons très vite.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 py-2 sm:py-4">
            <Input
              type="text"
              placeholder="Votre prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
              disabled={isLoading}
            />
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-2 border-primary/30 focus:border-primary"
              disabled={isLoading}
            />
            <PhoneInput
              prefix={phonePrefix}
              setPrefix={setPhonePrefix}
              placeholder="Votre numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-2 border-primary/30 focus:border-primary"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 sm:py-3 text-sm sm:text-base"
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
