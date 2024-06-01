import { ReactElement } from "react";
import BundleApi from "../../apis/bundle/BundleApi";
import PackageLayout from "@/container/layouts/PackageLayout";
import PackageList from "@/container/packages";
import ChoosePirateSim from "@/container/home/ChoosePirateSim";
import SimpleSteps from "@/container/home/SimpleSteps";
import Testimonials from "@/container/home/Testimonials";

type Props = {
  bundles: any[];
  countryCode: string;
};

const Packages = ({ bundles, countryCode }: Props) => {
  return (
    <div>
      <div className="bg-[#0A0601]">
        <PackageList bundles={bundles} countryCode={countryCode} />
        <ChoosePirateSim />
        <SimpleSteps />
        <Testimonials />
      </div>
    </div>
  );
};

export default Packages;

Packages.getLayout = function getLayout(page: ReactElement) {
  return <PackageLayout>{page}</PackageLayout>;
};

export async function getServerSideProps({ params }: any) {
  const { countryCode } = params;
  try {
    const res = await BundleApi.listBundleFromCountry(countryCode);
    const bundles = res?.data?.data?.data ?? [];
    return { props: { bundles, countryCode } };
  } catch (error) {
    return { props: { bundles: [], countryCode } };
  }
}
