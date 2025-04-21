
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    author: "David, coach sportif",
    text: "En 15 minutes, j’ai compris pourquoi mon ancien site ne convertissait pas. Le guide va à l’essentiel et donne des actions concrètes.",
    stars: 5,
  },
  {
    author: "Emma, consultante",
    text: "Ultra pédagogique, très clair et sans jargon. C’est LE guide à lire avant de lancer son site pro.",
    stars: 5,
  },
];

const EbookTestimonialsSection = () => (
  <section className="py-10 px-3 bg-background">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">Ils ont téléchargé le guide&nbsp;:</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card p-6 rounded-lg shadow card-hover">
            <div className="flex mb-2">{Array.from({length: t.stars}).map((_, j) => (
              <Star key={j} className="w-4 h-4 text-accent fill-accent" />
            ))}</div>
            <p className="italic mb-3">&quot;{t.text}&quot;</p>
            <div className="font-semibold text-primary">{t.author}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EbookTestimonialsSection;
