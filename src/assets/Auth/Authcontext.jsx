import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const UserProvider = ({ children }) => {
  const [Authuser, setAuthUser] = useState(null);

  return (
    <AuthContext.Provider value={{ Authuser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => useContext(AuthContext);
