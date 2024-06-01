import React, { ReactNode, createContext, useContext, useState } from "react";

const CurrencyContext = createContext({});

const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState("USD");

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

export default CurrencyProvider;
