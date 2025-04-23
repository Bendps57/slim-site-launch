
export const openContactPopup = () => {
  const width = 600;
  const height = 800;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;
  
  window.open(
    'https://www.elimyt.com/contact',
    'Contact eLimyt',
    `width=${width},height=${height},left=${left},top=${top},menubar=no,toolbar=no,location=no,status=no`
  );
};
