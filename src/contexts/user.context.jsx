import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  //because the second param is an empty array, this effect will only run once
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
