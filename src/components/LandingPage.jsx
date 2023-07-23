import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import    "./sty.css";
import GoogleLoginButton from "./loginWithGoogle";


function LandingPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
   <div className='container'>
<div className="landing-bg">
    
     
      <h1 className='title'>Selamat Datang </h1>

      <div className='container'>
        
      <h2 className='title2'> Platform monitoring Bus </h2>
     
     <div className='container'>
     
     <div className='card2'>
        {isSignUp ? <SignUp /> : <SignIn />}
        
        {isSignUp ? (
          <p>
            Already have an account?{' '}
            <span onClick={toggleForm}>Sign In</span>
                      
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <span onClick={toggleForm}>Sign Up</span>
          </p>
        )}
      </div>
     

      </div>
       </div>
    </div>
    </div>
  );
}

export default LandingPage;
