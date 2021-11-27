import { createContext, useState, useContext, useEffect } from "react";
import React from "react";
import { auth, provider } from "../lib/firebase";

const AddContext = createContext();
export function useLocalContext() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [CreateClassDialog, setCreateClassDialog] = useState(false);
  const [joinclassdialog, setjoinclassdialog] = useState(false);
  const [loggedInUser, setloggedInUser] = useState(null);
  const [loggedInMail, setloggedInMail] = useState(null);
  const login = () => {
    auth.signInWithPopup(provider);
  };
  const logout = () => {
    auth.signOut();
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setloggedInMail(authUser.email);
        setloggedInUser(authUser);
      } else {
        setloggedInMail(null);
        setloggedInUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const value = {
    CreateClassDialog,
    setCreateClassDialog,
    joinclassdialog,
    setjoinclassdialog,
    login,
    logout,
    loggedInMail,
    loggedInUser,
  };
  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}
