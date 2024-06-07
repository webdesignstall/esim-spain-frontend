/* eslint-disable @next/next/no-img-element */
import { TfiWorld } from "react-icons/tfi";
import bannerBgImage from "../../assets/images/bannerBgImage.png";
import { BiTransfer } from "react-icons/bi";
import { BiSolidCalendar } from "react-icons/bi";
import { IoIosPricetag } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCurrency } from "../../contexts/CurrencyProvider";
import PriceConverter from "../../utils/convertPrice";
import { useContext, useMemo } from "react";
import { AppStateContext } from "@/common/context/app/app-context";
import { useSearchParam } from "react-use";
import Path from "@/common/constant/path";
import { isValidEsimIccId } from "@/common/interface/bundle";

const PackageCard = ({ pack, country, countryCode  }) => {

  const router = useRouter();
  const { currency } = useCurrency();
  const { setUserCart } = useContext(AppStateContext);
  const topUpParams = useSearchParam("topup");
  const isTopUp = useMemo(() => {
    return topUpParams && isValidEsimIccId(topUpParams);
  }, [topUpParams]);

  const handleRedirectToCheckout = () => {
    if (isTopUp) {
      setUserCart([
        {
          ...pack,
          assignTo: topUpParams,
        },
      ]);
      router.push({
        pathname: Path.checkout().href,
        query: { topup: topUpParams },
      });
    } else {
      setUserCart([pack]);
      router.push(Path.checkout().href);
    }
  };

  console.log('dataAmout', pack?.dataAmount)
  return (
    <div className="text-white border-slate-500 rounded-lg lg:mr-0 mr-3 bg-[#454545]">
      <div className="overflow-hidden h-[80px] relative">
        <h4 className="absolute z-50 text-white p-4 text-xl font-medium">
          {pack?.dataAmount < 0 ? (
            <span>Unlimited </span>
          ) : (
            <span>{pack?.dataAmount / 1000} GB </span>
          )}
          {pack?.duration} Days
        </h4>
        <Image
          src={bannerBgImage}
          alt="package card banner image"
          layout="fill"
          className="rounded-t-lg"
          objectFit="cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TfiWorld className="text-xl" />
            <span>Coverage</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <img
              className="w-6 h-6 rounded-full"
              src={`https://hatscripts.github.io/circle-flags/flags/${countryCode?.toLowerCase()}.svg`}
              alt="country flag"
            />
            <span>{country?.name}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiTransfer className="rotate-90 text-xl" />
            <span>Data</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            {pack?.dataAmount < 0 ? (
              <span>Unlimited </span>
            ) : (
              <span>{pack?.dataAmount / 1000} GB </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BiSolidCalendar className="text-xl" />
            <span>Validity</span>
          </div>
          <div className="font-medium">
            <span>{pack?.duration} days</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IoIosPricetag className="text-xl" />
            <span>Price</span>
          </div>
          <div className="text-[14px]">
            <PriceConverter price={pack?.salePrice} />
            {/* <span>{convertPrice(, currency)}</span> */}
          </div>
        </div>

        {pack.facilities ? (
          <div className="flex items-center flex-wrap justify-between">
            {pack?.facilities?.map((item, index) => (
              <div className="flex items-center gap-1" key={index}>
                <IoMdCheckmark className="text-[#C09D5E] font-bold" />
                <span className="text-[#DFDFDF]">{item}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center flex-wrap justify-between">
            {["Data Only", "No Contracts", "No SIM"].map(
              (item, index) => (
                <div className="flex items-center gap-1" key={index}>
                  <IoMdCheckmark className="text-[#C09D5E] font-bold" />
                  <span className="text-[#DFDFDF] text-[13px]">{item}</span>
                </div>
              )
            )}
          </div>
        )}

        <div>
          <button
            onClick={handleRedirectToCheckout}
            className="border-2 w-full rounded-full py-2 hover:bg-[#c09d5e]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
