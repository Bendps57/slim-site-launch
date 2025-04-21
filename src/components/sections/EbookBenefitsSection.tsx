
import React from "react";
import { X, Check } from "lucide-react";

const avantList = [
  "Aucune visibilité en dehors d’Instagram ou Facebook",
  "Les prospects doutent de ton sérieux",
  "Tu réponds sans cesse aux mêmes questions en DM",
  "Ton offre n’est pas claire (ou difficile à expliquer)",
  "Tu dépends du bouche-à-oreille ou des stories éphémères",
  "Tes clients vont voir ailleurs, chez ceux qui ont l’air plus “pro”",
];

const apresList = [
  "Tu es visible sur Google 24h/24, même quand tu dors",
  "Tu inspires confiance dès les premières secondes",
  "Ton site présente ton offre clairement, sans répéter 100 fois la même chose",
  "Tu reçois des demandes qualifiées directement par formulaire ou email",
  "Tu gagnes du temps, tu attires mieux, tu vends plus",
  "Tu as enfin un outil pro qui travaille pour toi, pas l’inverse",
];

const EbookBenefitsSection = () => (
  <section className="py-12 px-3 bg-secondary/10">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <span role="img" aria-label="ebook">📘</span>
        Obtenir ses premiers clients grâce à un site vitrine
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Avant */}
        <div className="flex-1 bg-[#FFDEE2] border border-[#FFB6C1] rounded-xl shadow-sm p-6">
          <h4 className="text-lg font-semibold flex items-center text-[#E34364] mb-3">
            <X className="w-5 h-5 mr-2 text-[#E34364]" />
            AVANT <span className="ml-1 font-normal text-xs text-gray-500">(Sans site vitrine professionnel)</span>
          </h4>
          <ul className="space-y-3">
            {avantList.map((item, i) => (
              <li key={i} className="flex items-start text-sm text-[#5F2535]">
                <X className="w-4 h-4 mr-2 mt-1 text-[#E34364] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Après */}
        <div className="flex-1 bg-[#F2FCE2] border border-[#B4E582] rounded-xl shadow-sm p-6">
          <h4 className="text-lg font-semibold flex items-center text-[#5C9746] mb-3">
            <Check className="w-5 h-5 mr-2 text-[#5C9746]" />
            APRÈS <span className="ml-1 font-normal text-xs text-gray-500">(Avec ton site eLimyt)</span>
          </h4>
          <ul className="space-y-3">
            {apresList.map((item, i) => (
              <li key={i} className="flex items-start text-sm text-[#27412C]">
                <Check className="w-4 h-4 mr-2 mt-1 text-[#5C9746] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default EbookBenefitsSection;

