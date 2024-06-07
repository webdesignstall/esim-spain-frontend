/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useRef, useState } from "react";
import packageData from "@/constants/packageData";
import PackageCard from "./PackageCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const PackageCardSlider = ({ packageType, pack, countryCode }) => {
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
      responsive: [{
          breakpoint: 320,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }]
  };

  return (

      <div>
          <Swiper
              pagination={{
                  dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
          >
              {pack?.map((item, index) => (
                  <SwiperSlide key={item?.id}>
                    <div key={item?.id} className=" mb-10 ">
                      <PackageCard countryCode={countryCode} pack={item} packageType={packageType} />
                    </div>
                  </SwiperSlide>
              ))}
          </Swiper>

      </div>

    // <div>
    //   <Slider
    //     ref={(slider) => {
    //       sliderRef = slider;
    //     }}
    //     {...settings}
    //   >
    //     {pack?.map((item, index) => (
    //       <div key={item?.id} className="mr-3 mb-10 ">
    //         <PackageCard countryCode={countryCode} pack={item} packageType={packageType} />
    //       </div>
    //     ))}
    //   </Slider>
    //   <div className="flex justify-center items-center">
    //     {pack?.map((_, index) => (
    //       <GoDotFill
    //           key={index}
    //         className={
    //           index === currentSlide ? "text-[#C09D5E]" : "text-[#58534980]"
    //         }
    //       />
    //     ))}
    //   </div>
    //   <div className="flex justify-between items-center mb-20 -mt-10">
    //     <button
    //       className="bg-[#58534980] p-4 rounded-full text-left"
    //       onClick={handlePreviousPack}
    //     >
    //       <FaArrowLeft className="text-2xl text-[#C09D5E]" />
    //     </button>
    //     <button
    //       className="bg-[#58534980] p-4 rounded-full text-right"
    //       onClick={handleNextPack}
    //     >
    //       <FaArrowRight className="text-2xl text-[#C09D5E]" />
    //     </button>
    //   </div>
    // </div>
  );
};

export default PackageCardSlider;
