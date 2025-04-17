
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  stars?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, text, stars = 5 }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg relative card-hover">
      <div className="flex mb-2">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground/90 mb-4 italic">"{text}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold">{name.charAt(0)}</span>
        </div>
        <div className="ml-3">
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
