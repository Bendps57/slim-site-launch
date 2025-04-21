
import React from "react";
import { Quote } from "lucide-react";

const AuthenticTestimonialSection = () => (
  <section className="py-10 px-4 bg-background">
    <div className="max-w-2xl mx-auto text-center">
      <Quote className="mx-auto mb-4 text-primary w-8 h-8" />
      <p className="italic text-xl font-medium mb-4">
        "Grâce à eLimyt, notre site reflète enfin notre professionnalisme. Les retours clients sont excellents !"
      </p>
      <span className="font-semibold">– Marie D., fondatrice de StartUpX</span>
    </div>
  </section>
);

export default AuthenticTestimonialSection;
