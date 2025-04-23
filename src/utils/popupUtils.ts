
export const openContactPopup = () => {
  const width = 600;
  const height = 800;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  
  const popup = window.open(
    'https://www.elimyt.com/contact',
    'Contact eLimyt',
    `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no`
  );
  
  // Ensure the popup receives focus
  if (popup) {
    popup.focus();
  } else {
    // If popup is blocked, inform the user
    console.warn("La pop-up a été bloquée. Veuillez autoriser les pop-ups pour ce site.");
    window.location.href = 'https://www.elimyt.com/contact';
  }
};
