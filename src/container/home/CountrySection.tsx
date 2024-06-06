import Link from "next/link";
import React from "react";
import CountryContainer from "../countries/CountryContainer";

const CountrySection = ({ countries }: { countries: any[] }) => {
  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="custom-continer-inner pt-8 md:pt-24 pb-8 md:pb-16 md:pb-28 px-1 bg-[#1F1B17] lg:-mt-24 mt-28 lg:rounded-3xl relative"
    >
      <h2 className="text-[15px] text-center leading-[1.6em] sm:text-xl lg:text-5xl  md:text-3xl lg:leading-[60px] font-medium text-white md:text-center  pb-3 md:py-10">
        Millions of People Stay Connected <br /> With Data eSims for 190+
        Countries
      </h2>

      <CountryContainer countries={countries} />
      <div className="flex justify-center items-center">
        <Link href={"/countries"}>
          <button className="bg-[#C09D5E] rounded-full font-medium mb-10 -mt-5 px-6 py-3 flex gap-2 items-center text-white text-[13px] md:text-[16px]">
            Show 150+ countries
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountrySection;
