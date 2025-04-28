
import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';
import ContactInfo from './ContactInfo';

const ContactFormSection = () => {
  const { formData, isLoading, submitted, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact-form" className="py-16 px-4 bg-card animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Prêt à <span className="gradient-text">démarrer votre projet</span> ?
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Remplissez le formulaire ci-dessous ou appelez-nous directement pour profiter de notre offre limitée.
        </p>
        <div className="bg-background p-8 rounded-lg shadow-lg">
          {submitted ? (
            <ContactSuccess />
          ) : (
            <ContactForm 
              formData={formData}
              isLoading={isLoading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
