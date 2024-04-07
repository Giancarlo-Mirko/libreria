import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '../lib/firebase';

const Usercontext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (correo, contraseña) => {
    return createUserWithEmailAndPassword(auth, correo, contraseña);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      console.log(createUser);
      setUser(createUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Usercontext.Provider value={{ createUser, user, logout }}>
      {children}
    </Usercontext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(Usercontext);
};
