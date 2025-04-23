
export const openContactPopup = () => {
  const width = 600;
  const height = 800;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  
  // Utiliser la méthode window.open avec les bons paramètres pour ouvrir une popup
  const popup = window.open(
    'https://www.elimyt.com/contact',
    'ContactElimyt',
    `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`
  );
  
  // Vérifier si la popup a été créée (pourrait être bloquée par le navigateur)
  if (popup) {
    // Assurer que la popup reçoit le focus
    popup.focus();
    return true;
  } else {
    // Informer l'utilisateur si la popup est bloquée
    alert("Votre navigateur a bloqué la fenêtre pop-up. Veuillez autoriser les pop-ups pour ce site ou cliquez sur OK pour être redirigé vers la page de contact.");
    // Rediriger vers la page de contact en dernier recours
    window.location.href = 'https://www.elimyt.com/contact';
    return false;
  }
};
