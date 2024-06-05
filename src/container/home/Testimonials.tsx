/* eslint-disable @next/next/no-img-element */
import testimonialData from "@/constants/testimonialData";
import { FaUser } from "react-icons/fa";
import TestimonialSliderCard from "../cards/TestimonialSliderCard";

const Testimonials = () => {
  // Sort testimonialData to find the largest review
  const sortedTestimonials = [...testimonialData].sort(
    (a, b) => b.review?.length - a.review?.length
  );

  // Get the largest review
  const largestReview = sortedTestimonials[0];

  // Get the first two reviews excluding the largest review
  const firstTwo = testimonialData
    .filter((item) => item !== largestReview)
    .slice(0, 2);

  // Get the last two reviews excluding the largest review
  const lastTwo = testimonialData
    .filter((item) => item !== largestReview)
    .slice(-2);

  return (
    <div className="custom-continer-inner pt-20 pb-60 flex flex-col gap-10">
      <div>
        <h2 className="lg:text-[45px] text-2xl text-center  text-[#FFFFFF] font-medium  leading-[1.3em]">
          What Our Customers Say <br /> About Piratemobile
        </h2>
        {/*<div className="lg:flex lg:w-1/2 justify-end items-center">*/}
          {/*<div className="lg:block hidden">*/}
          {/*  <button className="bg-[#C09D5E] rounded-full font-medium px-6 py-3 flex gap-2 items-center text-white">*/}
          {/*    Read More Reviews*/}
          {/*  </button>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
      <div className="lg:block hidden">
        <div className="flex justify-between gap-5 h-full">
          <div className="w-1/3 flex flex-col justify-between gap-5">
            {firstTwo.map((item, index) => (
              <div
                className={`flex h-full gap-4 bg-[#454545] border-[1px] border-[#EAEAEA] rounded-[14px] p-5`}
                key={item.id}
              >
                <div>
                  {item?.user?.profileImage ? (
                    <img
                      className="w-16 h-16 rounded-full"
                      src={item.user.profileImage}
                      alt={item.user.name || "user avatar"}
                    />
                  ) : (
                    <FaUser className="w-11 h-11 text-white rounded-full" />
                  )}
                </div>
                <div>
                  <div className="mb-2 flex justify-between items-center">
                    <div>
                      <h4 className="text-white text-[16px]">{item.user.name}</h4>
                      <span className="text-gray-400 text-[14px]">
                        {item.user.designation}
                      </span>
                    </div>
                    <div className="text-white text-xl">
                      <item.user.platform />
                    </div>
                  </div>
                  <div
                    className="text-white text-[16px] leading-6 flex flex-col gap-2"
                    dangerouslySetInnerHTML={{ __html: `“${item.review}”` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`flex h-auto gap-4 w-1/3 bg-[#454545] border-[1px] border-[#EAEAEA] rounded-[14px] p-5`}
          >
            <div>
              {largestReview?.user?.profileImage ? (
                <img
                  className="w-16 h-16 rounded-full"
                  src={largestReview.user.profileImage}
                  alt={largestReview.user.name || "user avatar"}
                />
              ) : (
                <FaUser className="w-11 h-11 text-white rounded-full" />
              )}
            </div>
            <div>
              <div className="mb-2 flex justify-between items-center">
                <div>
                  <h4 className="text-white text-[16px]">
                    {largestReview.user.name}
                  </h4>
                  <span className="text-gray-400 text-[14px]">
                    {largestReview.user.designation}
                  </span>
                </div>
                <div className="text-white text-[16px]">
                  <largestReview.user.platform />
                </div>
              </div>
              <blockquote>
                <div
                  className="text-white text-xs flex flex-col gap-2"
                  dangerouslySetInnerHTML={{ __html: largestReview.review }}
                ></div>
              </blockquote>
            </div>
          </div>
          <div className="w-1/3 flex flex-col justify-between gap-5">
            {lastTwo.map((item, index) => (
              <div
                className={`flex h-full gap-4 bg-[#454545] border-[1px] border-[#EAEAEA] rounded-[14px] p-5`}
                key={item.id}
              >
                <div>
                  {item?.user?.profileImage ? (
                    <img
                      className="w-16 h-16 rounded-full"
                      src={item.user.profileImage}
                      alt={item.user.name || "user avatar"}
                    />
                  ) : (
                    <FaUser className="w-11 h-11 text-white rounded-full" />
                  )}
                </div>
                <div>
                  <div className="mb-2 flex justify-between items-center">
                    <div>
                      <h4 className="text-white text-[16px]">
                        {item.user.name} {item.review?.length}
                      </h4>
                      <span className="text-gray-400 text-[14px]">
                        {item.user.designation}
                      </span>
                    </div>
                    <div className="text-white text-[14px]">
                      <item.user.platform />
                    </div>
                  </div>
                  <div
                    className="text-white text-[16px] flex flex-col gap-2"
                    dangerouslySetInnerHTML={{ __html: `“${item.review}”` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <TestimonialSliderCard />
      </div>
      <div className="flex lg:w-1/2 mt-3 justify-center items-center">
        <div className="lg:hidden block">
          <button className="bg-[#C09D5E] rounded-full font-medium px-6 py-3 flex gap-2 items-center text-white">
            Read More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
