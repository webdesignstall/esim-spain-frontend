/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PirateMobileChooseCard from "../cards/PirateMobileChooseCard";

const ChoosePirateSim = () => {
  return (
    <div className="mt-20 bg-black 2xl:max-w-[70%] lg:max-w-[90%] w-full mx-auto p-5">
      <div>
        <h1 className="lg:text-5xl text-3xl mb-3 text-white font-medium text-center">
          Why Choose <br className="lg:hidden block" /> Pirate Mobile eSIM?
        </h1>
        <p className="lg:text-lg text-[#D2D2D2] text-center">
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
  );
};

export default ChoosePirateSim;
