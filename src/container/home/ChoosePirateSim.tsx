/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PirateMobileChooseCard from "../cards/PirateMobileChooseCard";

const ChoosePirateSim = () => {
  return (
    <div className=" mt-12 md:mt-28 bg-black mx-auto p-0 md:p-5">
        <div className={'custom-continer-inner'}>

      <div>
        <h2 className="text-2xl lg:text-5xl md:text-3xl mb-3 text-white font-medium text-center">
          Why Choose <br className="lg:hidden block" /> Pirate Mobile eSIM?
        </h2>
        <p className="text-[14px] lg:text-lg text-[#D2D2D2] text-center">
          Pirate Mobile is trusted by thousands of people around the world !
        </p>
      </div>
      {/* for large devices  */}
      <div className="lg:block hidden">
        <div className="text-white flex gap-10 w-full my-28 relative">
          <PirateMobileChooseCard
            icon={"/assets/icons/pirate-choose/pirateChooseImageOne.svg"}
            title={"Global <br /> Coverage"}
            subTitle={
              "Process-oriented approach for delivering optimal results"
            }
          />
          <div className="flex lg:gap-10 gap-5 lg:mt-56">
            <PirateMobileChooseCard
              icon={"./assets/icons/pirate-choose/pirateChooseImageTwo.svg"}
              title={"Affordable and <br /> Transparent"}
              subTitle={
                "Process-oriented approach for delivering optimal results"
              }
            />
            <PirateMobileChooseCard
              icon={"./assets/icons/pirate-choose/pirateChooseImageThree.svg"}
              title={"Fast and <br /> Secure"}
              subTitle={
                "Process-oriented approach for delivering optimal results"
              }
            />
          </div>
          <PirateMobileChooseCard
            icon={"./assets/icons/pirate-choose/pirateChooseImageFour.svg"}
            title={"Instant <br /> Connectivity"}
            subTitle={
              "Process-oriented approach for delivering optimal results"
            }
          />
          <div className="lg:block hidden absolute top-0 right-[45%]">
            <img
              className="h-32 w-32"
              src={"./assets/footerLogo.png"}
              alt="logo image"
            />
          </div>
        </div>
      </div>
      {/* for smaller devices  */}
      <div className="lg:hidden block">
        <div className="text-white w-full flex gap-3 overflow-x-scroll">
          <div className="my-5 w-[200px]">
            <PirateMobileChooseCard
              icon={"/assets/icons/pirate-choose/pirateChooseImageOne.svg"}
              title={"Global <br /> Coverage"}
              subTitle={
                "Process-oriented approach for delivering optimal results"
              }
              dangerousWidth="200px"
            />
          </div>
          <div className="my-5 w-[200px]">
            <PirateMobileChooseCard
              icon={"./assets/icons/pirate-choose/pirateChooseImageTwo.svg"}
              title={"Affordable and <br /> Transparent"}
              subTitle={
                "Process-oriented approach for delivering optimal results"
              }
              dangerousWidth="200px"
            />
          </div>
          <div className="my-5 w-[200px]">
            <PirateMobileChooseCard
              icon={"./assets/icons/pirate-choose/pirateChooseImageThree.svg"}
              title={"Fast and <br /> Secure"}
              subTitle={
                "Process-oriented approach for delivering optimal results"
              }
              dangerousWidth="200px"
            />
          </div>
          <div className="my-5 w-[200px]">
            <PirateMobileChooseCard
              icon={"./assets/icons/pirate-choose/pirateChooseImageFour.svg"}
              title={"Instant <br /> Connectivity"}
              subTitle={
                "Process-oriented approach for delivering optimal results"
              }
              dangerousWidth="200px"
            />
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default ChoosePirateSim;
