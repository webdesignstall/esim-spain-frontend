import { CONFIG } from "@/configuration/AppConfig";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CurrencyContext = createContext({});
const price = 5.66;

const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState("USD");
  const [selectedCountry, setSelectedCountry] = useState({});
  const [exchangeRates, setExchangeRates] = useState({});

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(`${CONFIG.CURRENCY_EXCHANGE_RATE_API}`);
      if (response.ok) {
        const data = await response.json();
        const relevantRates = ["USD", "THB", "VND", "CAD", "EUR"].reduce(
          (acc: any, curr: any) => {
            if (data.conversion_rates[curr]) {
              acc[curr] = data.conversion_rates[curr];
            }
            return acc;
          },
          {}
        );
        setExchangeRates(relevantRates);
      } else {
        console.error("Failed to fetch exchange rates");
      }
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  console.log(exchangeRates);
  console.log(currency);

  useEffect(() => {
    fetchExchangeRates();
  }, [selectedCountry]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRates }}>
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
