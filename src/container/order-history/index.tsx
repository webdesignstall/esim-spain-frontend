import dynamic from "next/dynamic";
import {useState} from "react";
const Sidebar = dynamic(import("./Sidebar"), { ssr: false });
// @ts-ignore
const MainContent = dynamic(import("./MainContent"), { ssr: false });

const OrderHistoryPage = () => {

    const [sidebar, setSidebar] = useState(0);

    console.log(sidebar)

    return (
    <div>
      <div className="2xl:max-w-[70%] lg:max-w-[75%] h-full   mx-auto lg:pb-60   lg:-mt-[620px] mt-28  relative">
        <h2 className="text-6xl font-bold text-white text-center mb-20">
          Order History
        </h2>
        <div
          style={{
            zIndex: 1,
            boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.8)",
            marginTop: "80px",
          }}
          className="bg-[#1F1B17] h-[800px] xl:px-10 lg:py-10 p-5 lg:rounded-3xl flex gap-2"
        >
          <div className="w-4/12 h-full ">
            <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
          </div>
          <div className="w-8/12 h-full  px-3">
            <MainContent sidebar={sidebar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
