// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import GoogleLoginButton from "./loginWithGoogle";


function SignIn() {
  const auth = getAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    

    e.preventDefault();

    // for login 
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
     console.log(auth);
      if (auth) {
          // if successfully signed in, redirect the new user to the home page
          history.push('/student');
     }
     }).catch(error => alert(error.message));
 
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    <GoogleLoginButton/>
    </div>
  );
};

export default SignIn;
