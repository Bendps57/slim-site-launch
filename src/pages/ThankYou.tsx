
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import FooterSection from '@/components/sections/FooterSection';
import FooterScripts from '@/components/FooterScripts';

const ThankYou = () => {
  const { trackEvent } = useFacebookPixel();
  
  useEffect(() => {
    trackEvent('CompleteRegistration', {
      content_name: 'Formulaire complété',
      status: 'success'
    });
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [trackEvent]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="w-full max-w-3xl bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="bg-primary p-6 text-center">
          <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Merci pour votre demande !</h1>
          <p className="text-white/90 mt-2">Nous avons bien reçu vos informations</p>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-lg p-4 sm:p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Votre demande est en cours de traitement</h2>
              <p className="text-muted-foreground">
                Notre équipe va vous contacter très rapidement pour discuter de votre projet 
                et vous apporter toutes les informations dont vous avez besoin.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/20 rounded-full p-2 mr-4">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Délai de réponse rapide</h3>
                  <p className="text-sm text-muted-foreground">
                    Vous serez contacté(e) sous 24 à 48 heures ouvrées
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/20 rounded-full p-2 mr-4">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Offre personnalisée</h3>
                  <p className="text-sm text-muted-foreground">
                    Nous vous proposerons une solution adaptée à vos besoins spécifiques
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retourner à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-3xl mt-6 text-center text-sm text-muted-foreground">
        <p>
          Si vous avez des questions, n'hésitez pas à nous contacter directement à{' '}
          <a href="mailto:contact@elimyt.com" className="text-primary hover:underline">
            contact@elimyt.com
          </a>
        </p>
      </div>
      
      <FooterSection />
      <FooterScripts type="thankyou" />
    </div>
  );
};

export default ThankYou;
