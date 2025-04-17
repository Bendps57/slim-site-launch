
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-primary" /> : <ChevronDown className="h-5 w-5 text-primary" />}
      </button>
      <div className={`mt-2 text-muted-foreground overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
