import React from "react";
import CountrySection from "./CountrySection";
import ChoosePirateSim from "./ChoosePirateSim";
import SimpleSteps from "./SimpleSteps";
import Testimonials from "./Testimonials";

const HomePage = ({ countries }: { countries: any[] }) => {
  return (
    <div className="bg-[#0A0601]">
      <CountrySection countries={countries} />
      <ChoosePirateSim />
      <SimpleSteps />
      <Testimonials />
    </div>
  );
};

export default HomePage;
