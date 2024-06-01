import React from "react";
import Image from "next/image";
import Image5G from "../../assets/5G_Internet.png";
import VerticalUITimeline from "./VerticalUITimeline";
import VerticalTimelineMobile from "./VerticalTimelineMobile";

const SimpleSteps = () => {
  return (
    <div className="bg-[#1F1B17] py-20 lg:px-0 px-5">
      <div className="flex flex-col">
        <div className="text-center">
          <h2 className="lg:text-[45px] text-3xl text-[#FFFFFF] mb-2">
            3 Simple Steps
          </h2>
          <p className="text-lg text-[#D2D2D2]">To Active Your eSims</p>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-between mt-10 gap-10">
          <div className="lg:block hidden w-1/2">
            <VerticalUITimeline />
          </div>
          <div className="lg:hidden block">
            <VerticalTimelineMobile />
          </div>
          <div className="lg:w-1/2 w-full">
            <Image className="lg:block hidden" src={Image5G} alt="hero image" />
            <Image
              className="lg:hidden block w-full"
              src={Image5G}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
