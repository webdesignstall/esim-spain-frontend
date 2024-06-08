import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import paymentMethods from "../../assets/paymentMethods.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import logo from "../../assets/footerLogo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-[#1F1B17] lg:py-10 p-2 md:p-5">
      <div className="custom-continer-inner pt-10 md:pt-0 lg:-mt-32 -mt-20">
        <div className="lg:block hidden">
          <Link className={'inline-block'} href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="lg:hidden block ">
          <div className="flex items-center justify-center">
            <Link className='inline-block' href="/">
            <Image className="w-[113px] h-[113px]" src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="lg:flex justify-between gap-20 py-5 pb-3">
          <div className="lg:w-2/5">
            <h3 className="text-2xl font-medium text-white mb-4">
              Pirate Mobile Limited
            </h3>
            <p className="text-[16px] text-[#BDBAC1]">
              Pirate Mobile Limited, a company incorporated under the laws of
              Guernsey, whose company number is 71908 and whose registered
              office is at Avenue House, St. Julians Avenue, ST. Peters Port,
              Guernsey, GY11WA
            </p>
          </div>
          <div className="lg:w-3/5 flex flex-col justify-evenly md:flex-row  md:justify-between md:gap-20 gap-2">
            <div className="mb-2">
              <h3 className="text-[20px] font-medium text-white mt-4 contact-us">
                Contact us
              </h3>
              <ul className="text-[16px] text-[#C09D5E] p-0  md:mt-7  md:mt-7">
                <li className="">info@piratemobile.gg</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-medium text-white">Social Media</h3>
              <ul className="flex lg:gap-3 gap-2 p-0 mt-7">
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <AiFillInstagram className="w-[38px] h-[38px] " />
                </li>
                <li className="p-2 bg-[#C09D5E] text-white rounded-full">
                  <RiWhatsappFill className="w-[38px] h-[38px] " />
                </li>
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <FaLinkedinIn className="w-[38px] h-[38px] " />
                </li>
                <li className="p-2 bg-gray-600 text-white rounded-full">
                  <FaXTwitter className="w-[38px] h-[38px] " />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 text-[#FFFFFF2B] lg:block hidden" />
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:pt-10">
          <div className="text-xs text-white flex lg:flex-row flex-col-reverse justify-between items-center gap-10">
            <p className={'text-[14px] md:text-[16px]'}>
              &copy; {new Date().getFullYear()}, eSIM Powered by Pirate Mobile
            </p>
            <ul className="flex lg:text-white text-[#BDBAC1] justify-between lg:w-auto w-full gap-10 items-center text-[16px]">
              <li>
                <Link href={'/privacy'} >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={'/terms-condition'} >
                  Term of Use
                </Link>
                </li>
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
