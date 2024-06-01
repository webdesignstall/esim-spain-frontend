/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useRef, useState } from "react";
import packageData from "@/constants/packageData";
import PackageCard from "./PackageCard";

const PackageCardSlider = ({ packageType }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let sliderRef = useRef(null);
  const handleNextPack = () => {
    sliderRef.slickNext();
  };
  const handlePreviousPack = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {packageData?.map((pack, index) => (
          <div key={index} className="mr-3 mb-10 ">
            <PackageCard pack={pack} packageType={packageType} />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center items-center">
        {packageData?.map((_, index) => (
          <GoDotFill
            className={
              index === currentSlide ? "text-[#C09D5E]" : "text-[#58534980]"
            }
          />
        ))}
      </div>
      <div className="flex justify-between items-center mb-20 -mt-10">
        <button
          className="bg-[#58534980] p-4 rounded-full text-left"
          onClick={handlePreviousPack}
        >
          <FaArrowLeft className="text-2xl text-[#C09D5E]" />
        </button>
        <button
          className="bg-[#58534980] p-4 rounded-full text-right"
          onClick={handleNextPack}
        >
          <FaArrowRight className="text-2xl text-[#C09D5E]" />
        </button>
      </div>
    </div>
  );
};

export default PackageCardSlider;
