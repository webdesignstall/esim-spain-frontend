import Image from "next/image";
import Banner from "../home/Banner";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import bgImage from "../../assets/bannerImage1.jpg";
import bannerBgImage from "../../assets/images/bannerBgImage.png";
import { ReactNode } from "react";

const HomePageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto">
      <div className="relative lg:h-[800px] h-[400px]">
        <div className="absolute top-0 left-0 right-0 lg:px-20">
          <Navbar />
          <Banner />
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

export default HomePageLayout;
