import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {}
});

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = () => {
    setIsAuthenticated(true);
  };

  const signout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, authenticate, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
