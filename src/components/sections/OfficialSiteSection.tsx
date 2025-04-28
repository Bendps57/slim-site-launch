
import React from "react";
import { openContactPopup } from "@/utils/popupUtils";
import useFacebookPixel from "@/hooks/useFacebookPixel";

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
        className="flex items-center gap-2 px-5 py-3 rounded-xl shadow bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all text-base"
      >
        💡 Découvrez notre offre clé en main&nbsp;: création de site internet complet pour <span className="font-bold">249,90€</span>
      </button>
    </div>
  );
};

export default OfficialSiteSection;
