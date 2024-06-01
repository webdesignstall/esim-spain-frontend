import { useEffect, useState } from "react";
import CountryFilter from "./CountryFilter";
import { letters } from "../../constants/countryFilter";
import CountryContainer from "./CountryContainer";

type Props = {
  popularCountries: any[];
  allCountries: any[];
};

const CountryList = ({ popularCountries, allCountries }: Props) => {
  const [selectedLetters, setSelectedLetters] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);

  console.log({ popularCountries });

  useEffect(() => {
    if (selectedLetters) {
      const [start, end] = selectedLetters?.split("-");
      const startIndex = letters.indexOf(start);
      const endIndex = letters.indexOf(end);
      const filterableLetters = letters?.slice(startIndex, endIndex + 1);
      const filterCountries = allCountries?.filter((country) =>
        filterableLetters.includes(country?.name?.split("")[0])
      );
      setFilteredCountries(() => filterCountries);
    }
  }, [allCountries, selectedLetters]);

  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[80%] lg:max-w-[85%] mx-auto xl:px-10 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-96 -mt-20 lg:rounded-3xl relative"
    >
      <CountryFilter
        selectedLetters={selectedLetters}
        setSelectedLetters={setSelectedLetters}
        setFilteredCountries={setFilteredCountries}
      />
      {filteredCountries?.length <= 0 && (
        <>
          <h2 className="lg:text-5xl text-3xl lg:leading-[60px] font-medium text-white mb-24">
            Popular Countries
          </h2>
          <CountryContainer countries={popularCountries} />
        </>
      )}

      <h2 className="lg:text-5xl text-3xl lg:leading-[60px] font-medium text-white mb-24">
        All Countries
      </h2>
      <CountryContainer
        countries={allCountries}
        filteredCountries={filteredCountries}
      />

      {filteredCountries?.length > 0 && (
        <>
          <h2 className="lg:text-5xl text-3xl lg:leading-[60px] font-medium text-white mb-24">
            Popular Countries
          </h2>
          <CountryContainer countries={popularCountries} />
        </>
      )}
    </div>
  );
};

export default CountryList;
