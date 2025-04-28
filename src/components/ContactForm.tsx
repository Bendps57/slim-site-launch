
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ContactFormData } from '@/hooks/useContactForm';

interface ContactFormProps {
  formData: ContactFormData;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactForm = ({ formData, isLoading, handleChange, handleSubmit }: ContactFormProps) => {
  return (
    <form 
      action="https://formsubmit.co/rlacy376@gmail.com" 
      method="POST"
      onSubmit={handleSubmit} 
      className="space-y-6"
    >
      {/* Configuration FormSubmit */}
      <input type="hidden" name="_subject" value="Nouveau contact depuis le site" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={window.location.href} />
      <input type="hidden" name="_replyto" value="" />
      <input type="hidden" name="_autoresponse" value="Merci pour votre demande de contact" />
      
      {/* Champ pour empêcher le spam */}
      <input type="text" name="_honey" style={{ display: 'none' }} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Nom *</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required 
            className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-2 font-medium">Entreprise</label>
          <input 
            type="text" 
            id="company" 
            name="company"
            className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
            value={formData.company}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required 
            className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">Téléphone *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            required 
            className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
            value={formData.phone}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 font-medium">Votre projet en quelques mots</label>
        <textarea 
          id="message" 
          name="message"
          rows={4} 
          className="w-full p-3 bg-secondary rounded-lg focus:ring-2 focus:ring-primary outline-none"
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? "Envoi en cours..." : "Profitez de l'offre maintenant"} <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  );
};

export default ContactForm;
