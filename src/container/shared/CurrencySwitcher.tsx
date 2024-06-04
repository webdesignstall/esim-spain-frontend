/* eslint-disable react-hooks/exhaustive-deps */
import { useCurrency } from "@/contexts/CurrencyProvider";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";



const flagMapping = {
  USD: "/icons/usa-flag-circular.svg",
  THB: "/icons/thailand-flag-circular.svg",
  VND: "/icons/vietnam-flag-circular.svg",
  CAD: "/icons/canada-flag-circular.svg",
  EUR: "/icons/european-union-flag-circular.svg",
};

const items = [
  {
    key: "1",
    label: "USD",
    icon: flagMapping.USD,
  },
  {
    key: "2",
    label: "THB",
    icon: flagMapping.THB,
  },
  {
    key: "3",
    label: "VND",
    icon: flagMapping.VND,
  },
  {
    key: "4",
    label: "CAD",
    icon: flagMapping.CAD,
  },
  {
    key: "5",
    label: "EUR",
    icon: flagMapping.EUR,
  },
];

const CurrencySwitcher = () => {
  const [selectedCountry, setSelectedCountry] = useState(items[0]);
  const [dropdown, setDropdown] = useState(false);
  const { setCurrency }: any = useCurrency();

  const handleSelectCountry = (country: any) => {
    setCurrency(country.label);
    setSelectedCountry(country);
    setDropdown(false);
  };
  return (
      <>
        <button
            onClick={() => setDropdown((prev) => !prev)}
            type="button"
            className={'flex gap-1 items-center cursor-pointer'}
        >
            <span>
              <img className="w-7 h-7 object-contain"  src={selectedCountry.icon} alt={selectedCountry.label} />
              </span>
            <span className={'text-md inline-block ml-1'}>{selectedCountry.label}</span>

          <span>
          <FaAngleDown/>
        </span>
        </button>
        {dropdown && (
            <div className="absolute top-9">
              {
                items.map((item) => {
                  return (
                      <button
                          key={item.key}
                          onClick={() => handleSelectCountry(item)}
                          className="flex gap-1 items-center mb-2 justify-center cursor-pointer currency-hover"
                          type="button"
                      >
                      <span>
                        <img className="w-7 h-7 object-contain" src={item.icon} alt={item.label} />
                      </span>
                        <span className="text-md inline-block ml-1">{item.label}</span>
                      </button>
                  )
                })


              }
            </div>
        )}
      </>
  );
};

export default CurrencySwitcher;
