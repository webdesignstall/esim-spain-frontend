/* eslint-disable @next/next/no-img-element */
import bars from "../../assets/icons/NavBars.svg";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useAuthProfile } from "../../store/auth/authHook";
import CurrencySwitcher from "./CurrencySwitcher";
import { useState } from "react";

const Navbar = () => {
  const user = useAuthProfile();
  const [showMenuItem, setShowMenuItem] = useState(false);

  return (
    <nav className="custom-continer-fuller lg:flex justify-between items-center text-white 2xl:px-20 px-3 py-4">
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
            <Link href={"/blog"}>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5 -mt-4">
        <div className="relative lg:block hidden">
          <CurrencySwitcher />
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
                      <Link href={"/blog"}>Blogs</Link>
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
