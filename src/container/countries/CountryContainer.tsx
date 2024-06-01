import React from "react";
import CountryCard from "../cards/CountryCard";

type Props = {
  filteredCountries?: any[];
  countries: any[];
};

const CountryContainer = ({ filteredCountries, countries }: Props) => {
  return (
    <>
      <div className="flex flex-wrap lg:gap-5 gap-2 mt-20 justify-center">
        {filteredCountries && filteredCountries?.length > 0
          ? filteredCountries?.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))
          : countries?.map((country, index) => (
              <CountryCard country={country} key={index} />
            ))}
      </div>
    </>
  );
};

export default CountryContainer;
