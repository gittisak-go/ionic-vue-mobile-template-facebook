// Lightweight scaffold for Google Identity Services sign-in.
// Usage: call signInWithGoogle(); it returns a user object {id,name,pic,provider}
// Requires setting VITE_GOOGLE_CLIENT_ID in your environment for production use.

export async function signInWithGoogle() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  if (!clientId) return null; // no client id configured

  return new Promise((resolve, reject) => {
    const SCRIPT_ID = 'google-identity-client';

    function handleCredentialResponse(response) {
      try {
        const jwt = response.credential;
        const payload = JSON.parse(atob(jwt.split('.')[1]));
        const user = {
          id: payload.sub,
          name: payload.name || payload.email,
          pic: payload.picture || '',
          provider: 'google',
        };
        resolve(user);
      } catch (err) {
        reject(err);
      }
    }

    function init() {
      if (!window.google || !window.google.accounts || !window.google.accounts.id) {
        return reject(new Error('Google Identity SDK not available'));
      }
      try {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
        });
        // show the one-tap prompt; if user interacts, callback will resolve
        window.google.accounts.id.prompt();
      } catch (e) {
        reject(e);
      }
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement('script');
      s.id = SCRIPT_ID;
      s.src = 'https://accounts.google.com/gsi/client';
      s.async = true;
      s.defer = true;
      s.onload = init;
      s.onerror = (e) => reject(e);
      document.head.appendChild(s);
    } else {
      init();
    }
  });
}
