/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser } from "react-icons/fa";
import testimonialData from "@/constants/testimonialData";

const TestimonialSliderCard = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul className={'p-0'} style={{ margin: "0px" }}>
          {dots.map((dot, index) => (
            <li
              key={index}
              style={{ display: "inline-block", margin: "0 5px" }}
            >
              {dot.props.className.includes("slick-active") ? (
                <span
                  className="dot-active dot-btn"
                  style={{
                    backgroundColor: "#C09D5E",
                    borderRadius: '50%'
                  }}
                ></span>
              ) : (
                <span
                  className="dot-inactive dot-btn"
                  style={{
                    backgroundColor: "#FFFFFF38",
                    borderRadius: '50%',
                  }}
                ></span>
              )}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {testimonialData.map((item) => (
        <div
          className={`flex bg-[#454545] border-[1px] border-[#EAEAEA] rounded-[14px] p-4`}
          key={item.id}
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                {item?.user?.profileImage ? (
                  <img
                    className="w-16 h-16 rounded-full"
                    src={item.user.profileImage}
                    alt={item.user.name}
                  />
                ) : (
                  <FaUser className="w-11 h-11 text-white rounded-full" />
                )}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white text-xs">{item.user.name}</h4>
                  <span className="text-gray-400 text-[14px]">
                    {item.user.designation}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-white text-xl">{item.user.platform}</div>
          </div>
          <div
            className="text-white text-xs leading-6 ml-[52px] gap-2"
            dangerouslySetInnerHTML={{ __html: `${item.review}` }}
          ></div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSliderCard;
