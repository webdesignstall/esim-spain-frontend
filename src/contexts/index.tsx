import React, { ReactNode } from "react";
import AuthProvider from "./AuthProvider";
import CountryProvider from "./CountryProvider";
import CurrencyProvider from "./CurrencyProvider";

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <CurrencyProvider>
        <CountryProvider>{children}</CountryProvider>
      </CurrencyProvider>
    </AuthProvider>
  );
};

export default AppProvider;
