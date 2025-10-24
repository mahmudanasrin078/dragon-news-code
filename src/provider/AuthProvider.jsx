import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContexts = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({
  //   name: "hablu mia",
  //   email: "hablu@mia.com",
  // });
const [loading, setLoading]=useState(true)

//console.log(loading, user)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  //update user--------------

  const updateUser=(updateData)=>{
    return updateProfile(auth.currentUser, updateData)
  }


  const logOut=()=>{
    return signOut(auth)
  }
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return()=>{
      unsubscribe()
    }

  }, []);
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
 updateUser,
  };
  return <AuthContexts value={authData}>{children}</AuthContexts>;
};

export default AuthProvider;
