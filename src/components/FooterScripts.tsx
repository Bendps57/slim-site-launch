
import React, { useEffect } from 'react';

interface FooterScriptsProps {
  type: 'home' | 'thankyou';
}

const FooterScripts: React.FC<FooterScriptsProps> = ({ type }) => {
  useEffect(() => {
    if (window.fbq) {
      if (type === 'home') {
        window.fbq('track', 'ViewContent');
        console.log('Facebook Pixel: ViewContent event tracked');
      } else if (type === 'thankyou') {
        window.fbq('track', 'Lead');
        console.log('Facebook Pixel: Lead event tracked');
      }
    }
  }, [type]);

  return null; // Ce composant ne rend aucun élément visible
};

export default FooterScripts;
