import React, { ReactNode, createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
