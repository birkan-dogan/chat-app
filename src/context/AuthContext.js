import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = function ({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(function () {
    const userAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      userAuth();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = function () {
  return useContext(AuthContext);
};

export default AuthContextProvider;
