
import React from 'react';
import { Check, X, TrendingUp, Award, Clock, MonitorSmartphone } from 'lucide-react';

const BeforeAfterSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Avant / Après</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Découvrez l'impact qu'un site web professionnel peut avoir sur votre entreprise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Connector in middle for desktop */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full z-10 border-4 border-white">
            <div className="flex items-center justify-center h-full text-white font-bold">VS</div>
          </div>
          
          {/* AVANT */}
          <div className="bg-card p-8 rounded-xl shadow-lg border-2 border-destructive/30 transform hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold">AVANT</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Temps perdu</h4>
                  <p className="text-muted-foreground">Efforts constants pour trouver de nouveaux clients.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Crédibilité limitée</h4>
                  <p className="text-muted-foreground">Image professionnelle incohérente et peu fiable.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Opportunités manquées</h4>
                  <p className="text-muted-foreground">Clients potentiels qui choisissent vos concurrents.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* APRÈS */}
          <div className="bg-card p-8 rounded-xl shadow-lg border-2 border-primary/30 transform hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">APRÈS</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MonitorSmartphone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Image professionnelle</h4>
                  <p className="text-muted-foreground">Site web élégant et adapté à tous les appareils.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Crédibilité renforcée</h4>
                  <p className="text-muted-foreground">Prospectus convaincus par votre professionnalisme.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Croissance des revenus</h4>
                  <p className="text-muted-foreground">Plus de prospects qualifiés et de ventes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
