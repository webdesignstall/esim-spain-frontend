/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const CountryCard = ({ country }) => {

    return (

        <>
            <Link
                href={`/packages/${
                    country?.iso
                }?country=${country?.name?.toLowerCase()}`}
            >
          <div
              className="bg-[#343230] mt-6 md:mt-0 w-[120px] h-[100px] lg:h-[218px] sm:h-[170px] lg:w-[230px] sm:w-[190px]  lg:pt-0 pt-10 rounded-xl group hover:border-[1px] hover:border-[#8E8E8E] border-[1px] border-[#343230] flex flex-col items-center justify-center px-2 lg:py-7 text-center mb-16 relative">
            <div className="absolute lg:-top-28 -top-20 mb-4 md:mb-20 left-0 w-full h-full flex items-center justify-center">
              <img
                  style={{border: "8px solid #1F1B17"}}
                  className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] rounded-full"
                  // src={`data:image/png;base64,${country?.flag}`}
                  src={`https://hatscripts.github.io/circle-flags/flags/${country.iso?.toLowerCase()}.svg`}
                  alt="country flag"
              />
            </div>
            <div className="mb-1 md:mb-4 lg:mt-10 -mt-4">
              <h4 className=" leading-5 text-[14px] md:text-md nt-5 lg:text-2xl text-white mb-2 md:mt-14">{country?.name}</h4>
              <h6 className="text-[12px] lg:text-xl text-[#FFFFFF]">Starts at $3.5</h6>
            </div>

            <div
                className='flex flex-col items-center justify-center'>
              <div>

                  <button className="bg-[#FFFFFF69] text-black group-hover:bg-white p-2 rounded-full">
                    <FaChevronRight className={'text-sm sm:text-lg'} />
                  </button>

              </div>
            </div>

          </div>

            </Link>
        </>


    );
};

export default CountryCard;
