
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg relative flex flex-col items-center md:items-start step-card card-hover">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center md:text-left">{title}</h3>
      <p className="text-muted-foreground text-center md:text-left">{description}</p>
    </div>
  );
};

export default StepCard;
