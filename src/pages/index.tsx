import MetaDataApi from "@/apis/meta-data/MetaDataApi";
import { popularCountryCodes } from "@/constants/popularCountryList";
import HomePage from "@/container/home/HomePage";
import HomePageLayout from "@/container/layouts/HomePageLayout";
import Layout from "@/container/shared/layout/Layout";
import type { NextPage } from "next";
import { ReactElement } from "react";

declare const VALID_LAYOUT_VALUES: readonly [
  "fill",
  "fixed",
  "intrinsic",
  "responsive",
  undefined
];

const type: (typeof VALID_LAYOUT_VALUES)[number] = "fill";

const Home = ({ countries }: { countries: any[] }) => {
  return <HomePage countries={countries} />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Home;

export async function getStaticProps() {
  try {
    const data = await MetaDataApi.listCountry();
    const countryList = data?.data?.data ?? [];
    console.log({ countries: countryList });
    const popularCountries = countryList?.filter((country: any) =>
      popularCountryCodes?.includes(country?.iso)
    );
    const commonCountries = countryList?.filter(
      (country: any) => !popularCountryCodes?.includes(country?.iso)
    );
    return {
      props: {
        countries: popularCountries?.concat(commonCountries?.slice(0, 4)),
      },
    };
  } catch (error) {
    console.log(error);
    return { props: { countries: [] } };
  }
}
