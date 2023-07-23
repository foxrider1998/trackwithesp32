// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./sty.css"


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
    <div className='card'>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
      <div  className='column'>
        <div className='row'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='row'>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        </div>
        <button className='SignInButton ' type="submit">Sign In</button>
      </form>
    
    </div>
  );
};

export default SignIn;
