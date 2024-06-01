import CountryList from "@/container/countries";
import MetaDataApi from "../../apis/meta-data/MetaDataApi";
import { popularCountryCodes } from "../../constants/popularCountryList";
import ChoosePirateSim from "@/container/home/ChoosePirateSim";
import SimpleSteps from "@/container/home/SimpleSteps";
import Testimonials from "@/container/home/Testimonials";
import CountriesLayout from "@/container/layouts/CountriesLayout";
import { ReactElement } from "react";

type Props = { popularCountries: any[]; allCountries: any[] };

const Countries = ({ popularCountries, allCountries }: Props) => {
  return (
    <div>
      <div className="bg-[#0A0601]">
        <CountryList
          popularCountries={popularCountries}
          allCountries={allCountries}
        />
        <ChoosePirateSim />
        <SimpleSteps />
        <Testimonials />
      </div>
    </div>
  );
};

export default Countries;

Countries.getLayout = function getLayout(page: ReactElement) {
  return <CountriesLayout>{page}</CountriesLayout>;
};

export async function getStaticProps() {
  try {
    const data = await MetaDataApi.listCountry();
    const countryList = data?.data?.data ?? [];
    const popularCountries = countryList?.filter((country: any) =>
      popularCountryCodes?.includes(country?.iso)
    );
    return { props: { popularCountries, allCountries: countryList } };
  } catch (error) {
    console.log(error);
    return { props: { countries: [] } };
  }
}
