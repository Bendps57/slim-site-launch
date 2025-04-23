
import React from "react";
import { Quote } from "lucide-react";

const AuthenticTestimonialSection = () => (
  <section className="py-10 px-4 bg-background">
    <div className="max-w-2xl mx-auto text-center">
      <Quote className="mx-auto mb-4 text-primary w-8 h-8" />
      <p className="italic text-xl font-medium mb-4">
        "eLimyt a transformé ma présence en ligne en un temps record. Le design est exactement ce que je recherchais et les premières demandes de clients sont arrivées dans la semaine suivant le lancement !"
      </p>
      <span className="font-semibold">– Sophie Martin, fondatrice de Studio Créatif Imagine</span>
    </div>
  </section>
);

export default AuthenticTestimonialSection;
