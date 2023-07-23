// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { auth } from '../firebase';
import "./sty.css"
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // Tambahkan logika atau perubahan status yang diperlukan setelah sign up berhasil
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='card'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className='column'>
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
        <button className='SignInButton' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
