import Image from "next/image";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import bannerBgImage from "../../assets/images/bannerBgImage.png";
import { ReactNode } from "react";

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto bg-black">
      <div className="relative lg:h-[800px] h-[220px] md:h-[300px]">
        <div className="absolute top-0 left-0 right-0 lg:px-20">
          <Navbar />
          <h2 className=" text-3xl md:text-6xl font-bold text-white text-center">
            Checkout
          </h2>
        </div>
        <Image
          alt="background image"
          src={bannerBgImage}
          className="w-full lg:h-[800px] h-[600px]"
        />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default CheckoutLayout;
