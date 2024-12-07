import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.config';

const AuthContext =createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading, setLoading] =useState(true)
   
    //  new user
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

    //   login user
    const userlogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };

    //   google signup
    const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

    //auth observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
    
          setLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    //   logout
    const logOut = () => {
        setLoading(true);
    
        signOut(auth);
         
      };

    const authInfo ={
    user, setUser, loading, createNewUser, userlogin, googleLogin, logOut
    }
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export  {AuthProvider, AuthContext};