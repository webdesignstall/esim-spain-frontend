import React from "react";
import CountrySearchComponent from "./CountrySearchComponent";
import { filterables } from "../../constants/countryFilter";

type Props = {
  selectedLetters: any;
  setSelectedLetters: any;
  setFilteredCountries: any;
};

const CountryFilter = ({
  selectedLetters,
  setSelectedLetters,
  setFilteredCountries,
}: Props) => {
  const handleFilterCountry = (filter: string) => {
    if (selectedLetters === filter) {
      setSelectedLetters("");
      setFilteredCountries(() => []);
    } else {
      setSelectedLetters(filter);
    }
  };
  return (
    <div className="py-10 mb-10">
      <h5 className="lg:text-2xl  mb-5 font-normal text-center text-[#D2D2D2]">
        Find and buy the best prepaid eSIMs online for your travels.
        <br className="lg:block hidden" /> Connect to the internet in minutes in
        more than 197 destinations around the world.
      </h5>
      <div className="lg:flex justify-center items-center gap-6 relative  lg:bg-slate-700 lg:border lg:w-[60%]  mx-auto w-full lg:p-2 rounded-full text-white">
        <CountrySearchComponent />
      </div>
      <div className="text-white flex lg:gap-5 flex-wrap justify-center mt-5 lg:px-10">
        {filterables.map((filter) => (
          <button
            key={Math.random()}
            onClick={() => handleFilterCountry(filter)}
            className={`text-sm border font-medium px-4 py-1 rounded-full ${
              selectedLetters === filter
                ? "border-[#C09D5E]"
                : "border-[#1F1B17]"
            }`}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountryFilter;
