
import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

// Token d'accès : EAARA4qsgZB5oBOZBVq6PReou6fYyZCgtCCcwS62SYLoCAyI4BbXD3Y5rloJ3cgIscLltGIZAjz3OZATCbW2anEQVHy9chLoaZAKm73apbdB1zfHQerxGOSTt25ZCB3SYPYfBi4IY50WABz41JKo2Uh3YGBDMYG4tAMvGUCnZBlZCcxOgaBQoi5qw58WSRoKJ7GlTcYwZDZD
// ID du pixel : 1203620008094951

export function useFacebookPixel() {
  // Initialiser le pixel lors du montage du composant
  useEffect(() => {
    if (window.fbq) {
      window.fbq('init', '1203620008094951');
      window.fbq('track', 'PageView');
    }
  }, []);

  // Fonction pour suivre des événements personnalisés
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
