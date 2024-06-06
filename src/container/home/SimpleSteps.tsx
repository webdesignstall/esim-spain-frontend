import React from "react";
import Image from "next/image";
import Image5G from "../../assets/5G_Internet.png";
import VerticalUITimeline from "./VerticalUITimeline";
import VerticalTimelineMobile from "./VerticalTimelineMobile";

const SimpleSteps = () => {
  return (
    <div className="bg-[#1F1B17] py-[120px] simple-section">
      <div className="custom-continer-inner flex flex-col">
        <div className="text-center mb-14">
          <h2 className="lg:text-[45px] text-3xl text-[#FFFFFF]">
            3 Simple Steps
          </h2>
          <p className="text-lg mt-7 text-[#D2D2D2]">To Active Your eSims</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className={'simple-bottom-left'}>
            <VerticalUITimeline />
          </div>
          <div className={'simple-bottom-right'}>
            <Image
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
