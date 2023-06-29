"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  // signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../components/utilis/firebase.config";
// import { collection, setDoc, getDocs, doc, getDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  console.log(user);
  // const collectRef = collection(database, "users");
  // // // const q = query(collectRef, where(id, "==", user.uid));
  // // // console.log(user.uid);

  //push to firebase
  async function handleSubmit(
    fullname,
    companyName,
    companyAddress,
    skill,
    permanentAddress,
    about
  ) {
    const docRef = await setDoc(doc(collectRef, user.uid), {
      fullname: fullname,
      companyName: companyName,
      companyAddress: companyAddress,
      skill: skill,
      permanentAddress: permanentAddress,
      about: about,
    });

    console.log("Document written with ID: ", docRef.id);
  }

  // .................................
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
    // signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("Auth", currentuser);

      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        handleSubmit,
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
