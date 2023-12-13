import React from 'react';
import {auth, provider} from "../firebase-config";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export const Login = ({setIsAuth}) => {

  const navigate = useNavigate();

  const signWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true);
      navigate("/");
    })
  }

  return (
    <div> 
      <p>Sign In with Google To Continue</p>
      <button onClick={signWithGoogle}>Sign In With Google</button>
    </div>
  )
}
