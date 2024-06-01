/* eslint-disable react-hooks/exhaustive-deps */
import { useCurrency } from "@/contexts/CurrencyProvider";
import React, { useState, useEffect } from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaAngleDown } from "react-icons/fa";

const items = [
  {
    key: "1",
    label: "USD",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "2",
    label: "THB",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "3",
    label: "VND",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "4",
    label: "CAD",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "5",
    label: "EUR",
    icon: <LiaFlagUsaSolid />,
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
        className="flex items-center gap-2 border rounded-md px-2 py-1"
        type="button"
      >
        <span className="text-2xl rounded-full">{selectedCountry.icon}</span>
        <span>{selectedCountry.label}</span>
        <span>
          <FaAngleDown />
        </span>
      </button>
      {dropdown && (
        <div className="absolute top-10 bg-white text-black rounded-md">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => handleSelectCountry(item)}
              className="flex items-center py-2 px-4 gap-2 hover:bg-gray-100 hover:rounded-md"
              type="button"
            >
              <span className="text-2xl rounded-full">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default CurrencySwitcher;
