import React, { ReactNode, createContext, useEffect, useState } from "react";
import MetaDataApi from "../apis/meta-data/MetaDataApi";

export const CountryContext = createContext({});

const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMetaData = async () => {
      try {
        setLoading(true);
        const data = await MetaDataApi.listCountry();
        const countryList = data?.data?.data ?? [];
        setCountries(countryList);
        setLoading(false);
      } catch (error) {
        console.error({ error });
        setLoading(false);
      }
    };
    loadMetaData();
  }, []);

  return (
    <CountryContext.Provider
      value={{ countries, setCountries, loading, setLoading }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
