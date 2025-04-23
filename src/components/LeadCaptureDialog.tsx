import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import useFacebookPixel from "@/hooks/useFacebookPixel";

const LeadCaptureDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { trackLead } = useFacebookPixel();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;

    setIsLoading(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/de6f1460387106439bcf91723d37902d`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          firstName,
          email,
          _subject: "Nouvelle demande de site vitrine à 249,90€",
          _captcha: "false",
          _template: "table", 
          message: `Nouveau lead pour site vitrine:
          Prénom: ${firstName}
          Email: ${email}
          Source: Pop-up de capture`
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      trackLead({ 
        email_address: email,
        first_name: firstName 
      });
      
      setSubmitted(true);
      
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
      }, 2000);
      
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            🚨 Il reste 5 sites vitrine à 249,90 € ce mois-ci !
          </DialogTitle>
          <DialogDescription className="text-center pt-4 space-y-4">
            <div>
              Profite de notre offre exclusive avant qu'elle disparaisse :
              Un site pro, rapide, optimisé pour Google… livré en 7 jours, sans que tu aies à t'en occuper.
            </div>
            <div className="font-medium">
              🔒 Aucun engagement – Juste ton email pour qu'on te réserve ta place 😉
            </div>
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
