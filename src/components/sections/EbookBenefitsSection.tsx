
import React from "react";
import { Check } from "lucide-react";

const newBenefits = [
  "Les éléments clés qui transforment un simple site en véritable générateur de clients",
  "Ce qui freine (ou motive) un visiteur à passer à l’action",
  "Comment créer une première offre irrésistible",
];

const EbookBenefitsSection = () => (
  <section className="py-12 px-3 bg-secondary/10">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">
        📘 Obtenir ses premiers clients grâce à un site vitrine
      </h3>
      <div>
        <ul className="space-y-3">
          {newBenefits.map((benefit, i) => (
            <li key={i} className="flex items-start">
              <Check className="text-primary mr-2 mt-1 w-5 h-5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default EbookBenefitsSection;
