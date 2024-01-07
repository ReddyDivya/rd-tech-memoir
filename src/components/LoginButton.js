import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {  
    //Sign in with Google
    try{
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //Access the user's profile information
      console.log('Successfully signed in with Google:', user);
      console.log('User profile photo URL:', user.photoURL);
      setUser(user);
      navigate("/profile");
    }
    catch(error)
    {
        console.log("Error signing in with Google :", error.message);
        setErrorMessage(error.message);
        navigate("/error");
    }
  }

  //logout
  const handleLogout = async () => {
    try{
      await signOut(auth);
      setUser('');
      console.log('User signed out successfully.');
    }
    catch(error)
    {
      console.error('Error signing out:', error.message);
      setErrorMessage(error.message);
    }
  }//handleLogout

  return (
    <div>
      {
        //Sign in with Google button
        !user && (<button onClick={handleLogin}>Sign in with Google</button>)
      }

      {/* Displaying user name, profile pic and signout */}
      {user && (<div className="flex justify-between items-center">
        <img src={user.photoURL} className="rounded-full w-12 h-12 mr-2" alt="user profile"/>
        <button onClick={handleLogout}>Sign out</button>
      </div>)}
    </div>
  )
}

export default LoginButton