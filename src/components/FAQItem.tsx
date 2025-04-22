
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  variant?: 'dark' | 'light';
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  variant = 'dark' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const textColorClass = variant === 'light' 
    ? 'text-foreground' 
    : 'text-foreground';

  const chevronColorClass = variant === 'light' 
    ? 'text-foreground/80' 
    : 'text-foreground/80';

  return (
    <div className={`border-b ${variant === 'light' ? 'border-foreground/20' : 'border-foreground/20'} py-4`}>
      <button 
        className={`flex justify-between items-center w-full text-left font-medium text-lg ${textColorClass}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen 
          ? <ChevronUp className={`h-5 w-5 ${chevronColorClass}`} /> 
          : <ChevronDown className={`h-5 w-5 ${chevronColorClass}`} />}
      </button>
      <div className={`mt-2 overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96' : 'max-h-0'
      } ${variant === 'light' ? 'text-foreground/80' : 'text-foreground/80'}`}>
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
