
import React from "react";

const videos = [
  {
    name: "Elisa WEITEL",
    url: "https://www.youtube.com/embed/rG1ho7f8fhc",
    preview: "https://img.youtube.com/vi/rG1ho7f8fhc/hqdefault.jpg",
    role: "Développeuse web & cliente eLimyt",
  },
  {
    name: "Marie AUBRY",
    url: "https://www.youtube.com/embed/owIgLNAfIbw",
    preview: "https://img.youtube.com/vi/owIgLNAfIbw/hqdefault.jpg",
    role: "Entrepreneure & cliente eLimyt",
  }
];

const VideoTestimonialsSection = () => (
  <section className="py-12 bg-secondary/20 px-3">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8">Témoignages vidéo de nos clientes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((v, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-card flex flex-col items-stretch">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={v.url}
                className="w-full h-full"
                title={`Témoignage vidéo de ${v.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <div className="font-bold text-lg mb-1 text-primary">{v.name}</div>
              <div className="text-muted-foreground text-sm">{v.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoTestimonialsSection;
