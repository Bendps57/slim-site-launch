import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export function useFacebookPixel() {
  // Supprimer l'initialisation redondante
  const trackEvent = (eventName: string, options = {}) => {
    if (window.fbq) {
      window.fbq('track', eventName, options);
      console.log(`Facebook Pixel: Tracked event "${eventName}"`, options);
    } else {
      console.warn('Facebook Pixel not available');
    }
  };

  // Fonction spécifique pour suivre les conversions de leads
  const trackLead = (options = {}) => {
    trackEvent('Lead', options);
  };

  // Fonction pour suivre les soumissions de formulaire
  const trackFormSubmission = (formName: string, options = {}) => {
    trackEvent('SubmitApplication', { ...options, form_name: formName });
  };

  // Fonction pour suivre les téléchargements d'ebook
  const trackEbookDownload = (ebookName: string, options = {}) => {
    trackEvent('Download', { ...options, content_name: ebookName });
  };

  return {
    trackEvent,
    trackLead,
    trackFormSubmission,
    trackEbookDownload
  };
}

export default useFacebookPixel;
