/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

type Props = { icon: any; title: any; subTitle: any; dangerousWidth?: any };

const PirateMobileChooseCard = ({
  icon,
  title,
  subTitle,
  dangerousWidth,
}: Props) => {
  return (
    <div className="bg-[#343230] lg:p-8 p-3 rounded-2xl h-full">
      <div className="bg-[#6d5844] w-[68px] h-[68px] rounded-full relative">
        <img
          className="absolute bottom-0 top-6 -right-4"
          src={icon}
          alt={title || "card image"}
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: title }}
        className={`text-xl md:text-2xl font-medium pt-2 md:pt-0 my-3 md:my-6 ${
          dangerousWidth && `w-[${dangerousWidth}]`
        }`}
      ></div>
      <p className="text-[14px] md:text-[16px] text-[#D2D2D2]">{subTitle}</p>
    </div>
  );
};

export default PirateMobileChooseCard;
