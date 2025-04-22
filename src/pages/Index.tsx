
import React, { useEffect } from "react";
import EbookHeroSection from "@/components/sections/EbookHeroSection";
import EbookBenefitsSection from "@/components/sections/EbookBenefitsSection";
import EbookTestimonialsSection from "@/components/sections/EbookTestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import EbookForm from "@/components/sections/EbookForm";
import VideoTestimonialsSection from "@/components/sections/VideoTestimonialsSection";
import useFacebookPixel from "@/hooks/useFacebookPixel";

const Index = () => {
  const { trackEvent } = useFacebookPixel();
  
  // Suivre la vue de page
  useEffect(() => {
    // Envoyer un événement de vue de page personnalisé
    trackEvent('ViewContent', {
      content_name: 'Landing Page Ebook',
      content_category: 'Landing',
      currency: 'EUR',
      value: 0.00
    });
  }, [trackEvent]);

  // 2e CTA : scroll to "ebook-second-cta"
  const handleScrollToForm = () => {
    document.getElementById("ebook-second-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <EbookHeroSection />
      <VideoTestimonialsSection />
      <EbookBenefitsSection />
      <EbookTestimonialsSection />
      <FAQSection />
      <section id="ebook-second-cta" className="py-12 px-3 text-center bg-secondary/30">
        <div className="max-w-xl mx-auto rounded-xl shadow-lg p-8 bg-background">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Prêt à éviter les erreurs que 80% des entrepreneurs font&nbsp;?
          </h3>
          <EbookForm />
          <div className="w-full mt-8 flex justify-center">
            <a
              href="https://www.elimyt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl shadow bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all text-base"
              onClick={() => trackEvent('ClickButton', { button_name: 'Offre clé en main' })}
            >
              💡 Découvrez notre offre clé en main&nbsp;: création de site internet complet pour <span className="font-bold">249,90€</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Index;
