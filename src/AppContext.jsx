// AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a single context for the app
const AppContext = createContext();

// Consolidated provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Manages authenticated user state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manages authentication status

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider value={{ user, setUser, isAuthenticated, login, logout, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the consolidated context
export const useAppContext = () => useContext(AppContext);
