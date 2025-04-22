
import React from "react";

const points = [
  "Comment transformer ton site en véritable aimant à clients – même si tu débutes",
  "Les erreurs qui font fuir tes prospects… et comment les éviter dès le départ",
  "La méthode simple pour décrocher tes 3 premiers clients grâce à ton site vitrine",
  "Des exemples concrets, des appels à l'action qui marchent, et une checklist SEO prête à l'emploi",
  "Et surtout : comment ton site peut bosser pour toi pendant que tu fais autre chose 🧠💸",
];

const EbookBenefitsSection = () => (
  <section className="py-12 px-3 bg-background">
    <div className="max-w-3xl mx-auto rounded-2xl shadow-xl bg-secondary border border-border p-6 md:p-12 flex flex-col items-center animate-fade-in">
      <div className="w-full flex justify-center mb-5">
        <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "linear-gradient(90deg, #1A1F2C 0%, #1A1F2C 100%)",
                color: "white",
                boxShadow: "0 4px 18px rgba(26,31,44,0.08)",
                letterSpacing: "0.1em",
              }}>
          🚀 Ce que ce guide va t'apporter concrètement
        </span>
      </div>
      <ul className="w-full mt-2 space-y-5 text-[1.08rem] md:text-lg font-medium text-white">
        {points.map((pt, i) => (
          <li
            key={i}
            className="flex items-start gap-2 md:gap-3 group"
          >
            <span
              className="text-green-500 dark:text-green-400 text-lg md:text-xl mt-1"
              aria-hidden="true"
              style={{
                textShadow: "0 0 8px #d1faf8",
              }}
            >✅</span>
            <span className="leading-snug">{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default EbookBenefitsSection;
