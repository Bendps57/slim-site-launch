
import React from "react";

const SocialProofSection = () => (
  <section className="py-6 px-4 bg-card">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl font-extrabold text-primary">+50</span>
        <span className="text-muted-foreground">entreprises accompagnées dans leur transformation digitale</span>
      </div>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <img src="/lovable-uploads/56490a21-2262-4aa9-87ed-d2cc23be530c.png" alt="Client logo" className="h-8 rounded bg-white/90" />
        <div className="font-semibold text-muted-foreground text-sm">+ autres clients</div>
      </div>
    </div>
  </section>
);
export default SocialProofSection;
