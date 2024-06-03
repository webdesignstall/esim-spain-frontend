import { useCallback, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const packagesFilter = ["All", "Regular", "Unlimited"];

type Props = {
  setPackageType: any;
  packages: any[];
};

const PackageFilterable = ({ setPackageType, packages }: Props) => {
  const [selectedPackage, setSelectedPackage] = useState("Regular");
  const [dropDown, setDropDown] = useState(false);

  const handleSelectPackage = useCallback(
    (pkg: any) => {
      setSelectedPackage(pkg);
      setPackageType(pkg);
    },
    [setPackageType]
  );

  const handleDropDownPackage = useCallback(
    (pkg: any) => {
      setSelectedPackage(pkg);
      setPackageType(pkg);
      setDropDown(false);
    },
    [setPackageType]
  );

  return (
    <>
      {/* larger devices  */}
      <div className="lg:block hidden">
        <div className="text-white lg:w-2/5 w-full mx-auto text-base font-medium flex justify-between gap-3 bg-[#69645E] rounded-full p-2">
          {packagesFilter?.map((pkg) => (
            <div key={pkg}>
              <button
                className={`px-5 py-3 outline-none border-0 rounded-full ${
                  selectedPackage === pkg && "bg-[#C09D5E]"
                }`}
                onClick={() => handleSelectPackage(pkg)}
              >
                {pkg}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* smaller devices  */}
      <div className="lg:hidden block relative">
        <div className="text-white text-base  flex justify-between gap-3 bg-[#69645E] border border-[#927148] rounded-full p-1">
          <button
            onClick={() => setDropDown((prev) => !prev)}
            className="bg-[#C09D5E] w-full flex outline-none border-0 items-center justify-between px-3 py-2 rounded-full"
          >
            <span>{selectedPackage} Packages</span>
            <span>
              <FaAngleDown className={`${dropDown && "rotate-180"}`} />
            </span>
          </button>
        </div>
        {dropDown && (
          <div className="bg-white shadow-lg w-full overflow-hidden z-50 flex flex-col gap-2 rounded-md p-2 top-14 absolute">
            {packagesFilter.map((pkg) => (
              <button
                key={pkg}
                onClick={() => handleDropDownPackage(pkg)}
                className="bg-[#776f60] outline-none p-2 w-full border-0 text-start rounded-md text-white"
              >
                {pkg}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PackageFilterable;
