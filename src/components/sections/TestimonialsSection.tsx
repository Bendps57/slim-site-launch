import React from 'react';
import VideoTestimonial from '@/components/VideoTestimonial';
import Testimonial from '@/components/Testimonial';

const TestimonialsSection = () => {
  return (
    <>
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">
            Ils ont fait confiance à <span className="gradient-text">eLimyt</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-in">
            Découvrez les témoignages de nos clients satisfaits
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/rG1ho7f8fhc"
                title="Témoignage client 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/owIgLNAfIbw"
                title="Témoignage client 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <Testimonial 
              name="Marie Dupont"
              role="Fleuriste indépendante"
              text="Je cherchais un site pro sans me ruiner. eLimyt a créé exactement ce que je voulais en moins d'une semaine. Mes clients adorent et je reçois des commandes directement via le site !"
            />
            <Testimonial 
              name="Thomas Leroy"
              role="Artisan menuisier"
              text="Travailler avec eLimyt a été un plaisir. Service efficace, prix fixe sans surprise et le résultat est à la hauteur. Mon site attire de nouveaux clients chaque semaine."
            />
            <Testimonial 
              name="Sophie Martin"
              role="Consultante RH"
              text="Je recommande eLimyt à 100% ! J'ai été bluffée par la rapidité et la qualité. Mon site est élégant, professionnel et parfaitement adapté à mon image de marque."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
