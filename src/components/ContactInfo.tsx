
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
      <a href="tel:+33600000000" className="flex items-center text-primary hover:text-primary/80">
        <Phone className="h-5 w-5 mr-2" /> +33 6 00 00 00 00
      </a>
      <a href="mailto:contact@elimyt.com" className="flex items-center text-primary hover:text-primary/80">
        <Mail className="h-5 w-5 mr-2" /> contact@elimyt.com
      </a>
    </div>
  );
};

export default ContactInfo;
