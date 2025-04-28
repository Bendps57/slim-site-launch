
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

let setIsOpenDialog: React.Dispatch<React.SetStateAction<boolean>> | null = null;

export const openLeadCaptureDialog = () => {
  if (setIsOpenDialog) {
    setIsOpenDialog(true);
  }
};

const LeadCaptureDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  // Cette fonction gère uniquement le tracking avant la soumission du formulaire
  const handleSubmitTracking = () => {
    // Récupérer les valeurs du formulaire
    const firstNameInput = document.getElementById("popup-firstName") as HTMLInputElement;
    const emailInput = document.getElementById("popup-email") as HTMLInputElement;
    const phoneInput = document.getElementById("popup-phone") as HTMLInputElement;
    
    const firstName = firstNameInput?.value;
    const email = emailInput?.value;
    const phone = phoneInput?.value;

    if (firstName && email) {
      console.log("Tracking popup form submission for:", email, firstName);
      
      // Suivre le lead
      trackLead({ 
        email_address: email,
        first_name: firstName,
        phone_number: phone || ''
      });

      // Définir comme soumis
      setSubmitted(true);
      
      // Afficher toast de succès
      toast({
        title: "Succès",
        description: "Votre demande a bien été envoyée. Nous vous recontacterons très vite.",
      });
      
      // Fermer la boîte de dialogue après 2 secondes
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            🚨 Il reste 5 sites vitrine à 249,90 € ce mois-ci !
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            Profite de notre offre exclusive avant qu'elle disparaisse :
            Un site pro, rapide, optimisé pour Google… livré en 7 jours, sans que tu aies à t'en occuper.
            
            <p className="font-medium mt-4">
              🔒 Aucun engagement – Juste ton email pour qu'on te réserve ta place 😉
            </p>
          </DialogDescription>
        </DialogHeader>
        
        {submitted ? (
          <div className="py-6 text-center text-green-600 font-semibold animate-fade-in">
            ✨ Merci ! Nous vous recontactons très vite.
          </div>
        ) : (
          <form 
            action="https://formsubmit.co/rlacy376@gmail.com" 
            method="POST"
            className="space-y-4 py-4"
            onSubmit={handleSubmitTracking}
          >
            {/* Configuration FormSubmit */}
            <input type="hidden" name="_subject" value="Nouvelle demande de site vitrine à 249,90€" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />
            
            {/* Champ pour empêcher le spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <input
              type="text"
              id="popup-firstName"
              name="firstName"
              placeholder="Votre prénom"
              required
              className="border-2 border-primary/30 focus:border-primary w-full p-2 rounded"
            />
            
            <input
              type="email"
              id="popup-email"
              name="email"
              placeholder="Votre email"
              required
              className="border-2 border-primary/30 focus:border-primary w-full p-2 rounded"
            />
            
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                placeholder="Votre numéro de téléphone"
                className="border-2 border-primary/30 focus:border-primary w-full pl-10 p-2 rounded"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded"
            >
              Je veux mon site pro à 249,90 €
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
