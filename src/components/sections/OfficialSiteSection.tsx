
import React from "react";
import { ExternalLink } from "lucide-react";
import useFacebookPixel from "@/hooks/useFacebookPixel";
import { openContactPopup } from "@/utils/popupUtils";

const OfficialSiteSection = () => {
  const { trackEvent } = useFacebookPixel();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactPopup();
    trackEvent('ClickButton', { 
      button_name: 'Offre site internet',
      button_location: 'Hero section' 
    });
  };

  return (
    <div className="w-full mt-8 flex justify-center">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all text-sm sm:text-base"
      >
        Découvrez notre offre : site à 249,90€
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
};

export default OfficialSiteSection;
