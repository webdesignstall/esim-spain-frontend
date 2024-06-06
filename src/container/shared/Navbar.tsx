/* eslint-disable @next/next/no-img-element */
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
    <nav className="custom-continer-fuller lg:flex justify-between items-center text-white 2xl:px-20 md:px-3 py-4">
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
      <div className="lg:hidden block mt-2 md:mt-0">
        <div className="flex items-center justify-between">
          <Link href={'/'}>
            <Image
              height={80}
              width={80}
              src={"../../../assets/pirateLogo.svg"}
              alt="logo"
            />
          </Link>
          <div className="flex">
            <Link href={'/auth'} className="mr-5 sm:mr-7">
              <svg width="50" height="35" viewBox="0 0 72 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.779297" y="0.617981" width="70.6107" height="48.5449" rx="24.2724" fill="white"
                      fill-opacity="0.19"/>
                <path
                    d="M36.0847 13.5728C37.5855 13.5728 39.0249 14.169 40.0861 15.2302C41.1473 16.2915 41.7435 17.7308 41.7435 19.2316C41.7435 20.7324 41.1473 22.1718 40.0861 23.233C39.0249 24.2942 37.5855 24.8904 36.0847 24.8904C34.5839 24.8904 33.1446 24.2942 32.0833 23.233C31.0221 22.1718 30.4259 20.7324 30.4259 19.2316C30.4259 17.7308 31.0221 16.2915 32.0833 15.2302C33.1446 14.169 34.5839 13.5728 36.0847 13.5728ZM36.0847 27.7198C42.3377 27.7198 47.4023 30.2522 47.4023 33.3787V36.2081H24.7671V33.3787C24.7671 30.2522 29.8317 27.7198 36.0847 27.7198Z"
                    fill="white"/>
              </svg>

            </Link>
            <div className="relative">
              <button
                  onClick={() => setShowMenuItem((prev) => !prev)}
                  className=""
              >
                <svg width="50" height="35" viewBox="0 0 71 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x=".266" y=".618" width="70.611" height="48.545" rx="24.272" fill="#C09D5E"/>
                  <path
                      d="M23.095 14.494h10.397a2.08 2.08 0 1 1 0 4.158H23.095a2.08 2.08 0 0 1 0-4.159M37.65 31.129h10.396a2.08 2.08 0 0 1 0 4.158H37.652a2.079 2.079 0 1 1 0-4.158M23.095 22.81h24.953a2.079 2.079 0 1 1 0 4.159H23.095a2.08 2.08 0 0 1 0-4.159"
                      fill="#fff"/>
                </svg>

              </button>
              {showMenuItem && (
                  <div className="absolute top-16 right-0 bg-white text-black p-3 w-[140px] rounded-md">
                    <ul className="flex flex-col gap-1  text-[16px] p-0 m-0">
                      <li>
                        <Link className={'block'} href={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link className={'block'} href={"/blog"}>Blogs</Link>
                      </li>

                      <li>
                        <Link className={'block'} href={"/auth"}>Login/Register</Link>
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
