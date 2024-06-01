/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useRef, useState } from "react";
import bars from "../../assets/icons/NavBars.svg";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaAngleDown } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useCurrency } from "../../contexts/CurrencyProvider";
import { useAuthProfile } from "../../store/auth/authHook";

const items = [
  {
    key: "1",
    label: "USD",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "2",
    label: "THB",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "3",
    label: "VND",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "4",
    label: "CAD",
    icon: <LiaFlagUsaSolid />,
  },
  {
    key: "5",
    label: "EUR",
    icon: <LiaFlagUsaSolid />,
  },
];

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState(items[0]);
  const [dropdown, setDropdown] = useState(false);
  const [showMenuItem, setShowMenuItem] = useState(false);
  const { setCurrency }: any = useCurrency();
  const user = useAuthProfile();

  const handleSelectCountry = (country: any) => {
    setCurrency(country.label);
    setSelectedCountry(country);
    setDropdown(false);
  };

  return (
    <nav className="lg:flex justify-between items-center text-white 2xl:px-20 px-3 py-4">
      {/* Desktop design  */}
      <div className="lg:block hidden">
        <Link href={"/"}>
          <img src={"../../../assets/pirateLogo.svg"} alt="Logo" />
        </Link>
      </div>
      <div className="lg:block hidden">
        <ul className="flex items-center gap-5 font-normal text-[18px]">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About us</Link>
          </li>
          <li>
            <Link href={"/packages"}>Packages</Link>
          </li>
          <li>
            <Link href={"/logs"}>Blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative lg:block hidden">
          <button
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center gap-2"
            type="button"
          >
            <span className="text-2xl rounded-full">
              {selectedCountry.icon}
            </span>
            <span>{selectedCountry.label}</span>
            <span>
              <FaAngleDown />
            </span>
          </button>
          {dropdown && (
            <div className="absolute top-8 bg-white text-black  rounded-md">
              {items.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleSelectCountry(item)}
                  className="flex items-center py-2 px-5 gap-2 hover:bg-gray-100 hover:rounded-md"
                  type="button"
                >
                  <span className="text-2xl rounded-full">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:block hidden">
          {user?.avatar ? (
            <Link href={"/profile"}>
              <button className="bg-[#C09D5E] rounded-full font-medium px-6 py-3 flex gap-2 items-center">
                <FaUser className="text-white text-2xl" />
              </button>
            </Link>
          ) : (
            <Link href={"/signin"}>
              <button className="bg-[#C09D5E] text-white  rounded-full font-medium px-6 py-3 flex gap-2 items-center">
                <FaUser />
                <span>login/Register</span>
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* mobile design  */}
      <div className="lg:hidden block">
        <div className="flex items-center justify-between">
          <div>
            <Image
              height={80}
              width={80}
              src={"../../../assets/pirateLogo.svg"}
              alt="logo"
            />
          </div>
          <div className="flex gap-3 items-center">
            <button className="bg-slate-600 py-5 px-7 rounded-[25px]">
              <FaUser />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowMenuItem((prev) => !prev)}
                className="bg-[#C09D5E] py-4 px-6 rounded-[25px]"
              >
                <Image height={28} width={28} src={bars} alt="drop-down bar" />
              </button>
              {showMenuItem && (
                <div className="absolute top-16 right-0 bg-white text-black p-3 w-[160px] rounded-md">
                  <ul className="flex flex-col gap-1  text-[18px] font-medium">
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/about"}>About us</Link>
                    </li>
                    <li>
                      <Link href={"/packages"}>Packages</Link>
                    </li>
                    <li>
                      <Link href={"/logs"}>Blog</Link>
                    </li>
                    <li>
                      <Link href={"/contact"}>Contact us</Link>
                    </li>
                    <li>
                      <Link href={"/auth"}>Login/Register</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
