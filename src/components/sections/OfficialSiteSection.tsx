
import React from "react";
import { ExternalLink } from "lucide-react";

const OfficialSiteSection = () => (
  <div className="w-full mt-8 flex justify-center">
    <a
      href="https://elimyt.fr"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 rounded-xl shadow bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all text-base"
    >
      💡 Découvrez notre offre clé en main&nbsp;: création de site internet complet pour <span className="font-bold">249,90€</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  </div>
);

export default OfficialSiteSection;
