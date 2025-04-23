
export const openContactPopup = () => {
  const width = 600;
  const height = 800;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  
  try {
    // Technique plus robuste pour ouvrir une popup
    const popupFeatures = `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`;
    
    // Utiliser une fonction qui force l'ouverture en popup
    const popupWindow = window.open('about:blank', 'ContactElimyt', popupFeatures);
    
    if (!popupWindow || popupWindow.closed || typeof popupWindow.closed === 'undefined') {
      // Si la popup est bloquée
      alert("Votre navigateur a bloqué la fenêtre pop-up. Veuillez autoriser les pop-ups pour ce site ou cliquez sur OK pour être redirigé vers la page de contact.");
      window.location.href = 'https://elimyt.com/contact';
      return false;
    }
    
    // Donner le focus à la popup
    popupWindow.focus();
    
    // Rediriger la popup vers l'URL cible
    popupWindow.location.href = 'https://elimyt.com/contact';
    
    return true;
  } catch (error) {
    console.error("Erreur lors de l'ouverture de la popup:", error);
    // Fallback en cas d'erreur
    window.location.href = 'https://elimyt.com/contact';
    return false;
  }
};
