import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import paymentMethods from "../../assets/paymentMethods.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import logo from "../../assets/footerLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-[#1F1B17] lg:py-10 p-5">
      <div className="2xl:max-w-[70%] lg:max-w-[90%] mx-auto lg:-mt-32 -mt-20">
        <div className="lg:block hidden">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="lg:hidden block ">
          <div className="flex items-center justify-center">
            <Image className="w-[113px] h-[113px]" src={logo} alt="Logo" />
          </div>
        </div>
        <div className="lg:flex justify-between items-center gap-20 py-5">
          <div className="lg:w-2/5">
            <h3 className="text-lg lg:text-start text-center font-medium text-white mb-4">
              Pirate Mobile Limited
            </h3>
            <p className="text-xs text-[#BDBAC1] lg:text-start text-center">
              Pirate Mobile Limited, a company incorporated under the laws of
              Guernsey, whose company number is 71908 and whose registered
              office is at Avenue House, St. Julians Avenue, ST. Peters Port,
              Guernsey, GY11WA
            </p>
          </div>
          <div className="lg:w-3/5 flex justify-between items-center lg:gap-20 gap-5 lg:mt-0 mt-10">
            <div className="mb-2">
              <h3 className="text-sm font-medium text-white  lg:mb-4 mb-6">
                Contact us
              </h3>
              <ul className="text-xs text-[#C09D5E]">
                <li className="">info@piratemobile.gg</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-white  mb-4">Social Media</h3>
              <ul className="flex lg:gap-3 gap-2">
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <AiFillInstagram className="lg:h-[48px] lg:w-[48px] " />
                </li>
                <li className="p-2 bg-[#C09D5E] text-white rounded-full">
                  <RiWhatsappFill className="lg:h-[48px] lg:w-[48px] " />
                </li>
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <FaLinkedinIn className="lg:h-[48px] lg:w-[48px] " />
                </li>
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <FaXTwitter className="lg:h-[48px] lg:w-[48px] " />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 text-[#FFFFFF2B] lg:block hidden" />
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:pt-10">
          <div className="text-xs text-white flex lg:flex-row flex-col-reverse justify-between items-center gap-10">
            <p>
              &copy; {new Date().getFullYear()}, eSIM Powered by Pirate Mobile
            </p>
            <ul className="flex lg:text-white text-[#BDBAC1] justify-between lg:w-auto w-full gap-10 items-center">
              <li>Privacy Policy</li>
              <li>Term Of Use</li>
            </ul>
          </div>
          <div className="my-5">
            <Image src={paymentMethods} alt="payment methods images" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
