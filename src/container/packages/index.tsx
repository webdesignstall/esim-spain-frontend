/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import PackageFilterable from "./PackageFilterable";
import PackageCard from "../cards/PackageCard";
import PackageCardSlider from "../cards/PackageCardSlider";
import { convertBase64ToImgSource } from "../../common/utils/image";
import { NextRouter, useRouter } from "next/router";
import { CountryContext } from "../../contexts/CountryProvider";
import BundleApi from "../../apis/bundle/BundleApi";

type Props = {
  bundles: any[];
  countryCode: string;
};

const PackageList = ({ bundles, countryCode }: Props) => {
  const [packageType, setPackageType] = useState<any>("Daily");
  const { countries }: any = useContext(CountryContext);
  const [loading, setLoading] = useState(false);
  const [singleCountry, setSingleCountry] = useState<any>({});
  const [packages, setPackages] = useState<any[]>(bundles);
  const [filterPackages, setFilterPackages] = useState<any[]>([]);
  const router: any = useRouter();

  useEffect(() => {
    if (packageType === "Regular") {
      const packs = packages?.filter((pack) => !pack?.bundleData?.unlimited);
      setFilterPackages(packs);
    } else if (packageType === "Unlimited") {
      const packs = packages?.filter((pack) => pack?.bundleData?.unlimited );
      setFilterPackages(packs);
    } else if (packageType === "All") {
      setFilterPackages([]);
    } else {
      const filterType = Number(packageType.split(" ")[0]);
      const packs = packages?.filter((pack) => !pack?.bundleData?.unlimited);
      setFilterPackages(packs);
    }
  }, [packageType, packages]);

  useEffect(() => {
    if (countries && router?.query?.country) {
      const currentCountry = countries?.find(
        (cnt: any) =>
          cnt?.name?.toLowerCase() === router?.query?.country?.toLowerCase()
      );
      if (currentCountry) {
        setSingleCountry(currentCountry);
      } else {
        setSingleCountry({});
      }
    }
  }, [router, countries]);

  useEffect(() => {
    if (bundles?.length > 0) {
      setPackages(bundles);
    } else {
      handleFetchBundles(countryCode);
    }
  }, [bundles, countryCode]);

  const handleFetchBundles = async (countryCode: string) => {
    try {
      setLoading(true);
      const res = await BundleApi.listBundleFromCountry(countryCode);
      const resBundles = res?.data?.data?.data ?? [];
      setPackages(resBundles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        zIndex: 1,
        boxShadow: "0px -10px 100px 0px rgba(0, 0, 0, 0.8)",
      }}
      className="2xl:max-w-[70%] lg:max-w-[85%]  mx-auto xl:px-20 lg:py-10 p-5 bg-[#1F1B17] lg:-mt-24 mt-28 lg:rounded-3xl relative"
    >
      <div className="flex items-center lg:gap-5 gap-3 justify-center">
        <img
          className="lg:w-16 w-10 lg:h-12 h-8 rounded-lg"
          src={`https://flagcdn.com/${countryCode?.toLowerCase()}.svg`}
          alt="country flag"
        />
        <h3 className="text-white lg:text-5xl text-3xl">
          {singleCountry?.name}
        </h3>
      </div>
      <div className="w-full mx-auto my-10">
        <PackageFilterable
          packages={packages}
          setPackageType={setPackageType}
        />
      </div>
      <div className="md:block hidden">
        {loading ? (
          <h4 className="text-xl font-semibold my-10 text-white text-center">
            Packages loading...
          </h4>
        ) : (
          <>
            {packages?.length <= 0 ? (
              <h5 className="text-lg font-semibold text-white text-center my-10">
                There is no pack found for this country
              </h5>
            ) : (
              <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10 pb-10">
                {filterPackages?.length > 0
                  ? filterPackages?.map((pkg) => (
                      <PackageCard
                        key={pkg?.id}
                        pack={pkg}
                        countryCode={countryCode}
                        country={singleCountry}
                      />
                    ))
                  : packages?.map((pkg) => (
                      <PackageCard
                        key={pkg?.id}
                        pack={pkg}
                        countryCode={countryCode}
                        country={singleCountry}
                      />
                    ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className="md:hidden block">
        <PackageCardSlider packageType={packageType} />
      </div>
    </div>
  );
};

export default PackageList;
