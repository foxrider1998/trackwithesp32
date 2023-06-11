import React from 'react';
import { auth } from '../firebase';

function GoogleLoginButton() {
  const handleLogin = () => {
    const provider = new auth.GoogleAuthProvider(); // Update this line
    auth().signInWithPopup(provider);
  };

  return (
    <button onClick={handleLogin}>Login with Google</button>
  );
}

export default GoogleLoginButton;
