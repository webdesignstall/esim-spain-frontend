/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import OrderHistory from "./OrderHistory";
import ESims from "./ESims";
import { useAuthProfile } from "@/store/auth/authHook";
import { IOrder } from "@/common/interface/order";
import { useOrderHistory } from "@/store/order-history/orderHistoryHook";
import { Progress } from "d-react-components";
import OrderApi from "@/apis/order/OrderApi";
import PromosPage from "@/container/static/promos/AboutUsPage";


const navs = ["Your Previous Order", "Your eSim"];

const MainContent = ({sidebar}: {sidebar: number}) => {
  const [navType, setNavType] = useState(navs[0]);
  const { id: customerId } = useAuthProfile() || {};
  const [orderList, setOrderList] = useState<Array<IOrder>>([]);
  const orderLocals = useOrderHistory();
  const isGuest = !customerId;

  const loadOrderHistory = async () => {
    if (isGuest) {
      setOrderList(orderLocals || []);
    } else {
      Progress.show({ method: OrderApi.history, params: [] }, (res: any) => {
        const allOrders = [
          ...(res?.data?.data?.data ?? []),
          ...(orderLocals || []),
        ];
        setOrderList(allOrders);
      });
    }
  };

  useEffect(() => {
    loadOrderHistory();
  }, [isGuest]);

  if(sidebar === 0){
    return (
        <section>
          <div>
            <div
                style={{ width: "325px", margin: "0px auto" }}
                className="text-white  text-base font-medium flex justify-center items-center gap-3 bg-[#69645E] border-0 rounded-full p-2"
            >
              {navs.map((nav) => (
                  <button
                      key={Math.random()}
                      style={{
                        color: "white",
                        padding: "12px 20px",
                        backgroundColor: navType === nav ? "#b3a489" : "",
                        borderRadius: "500px",
                      }}
                      onClick={() => setNavType(nav)}
                  >
                    {nav}
                  </button>
              ))}
            </div>
          </div>
          {navType === navs[0] && <OrderHistory orderList={orderList} />}
          {navType === navs[1] && <ESims orderList={orderList} />}
        </section>
    );
  }

  if (sidebar === 1){
    return (
        <>
          Setting
        </>
    )
  }

  if (sidebar === 2){
    return (
        <>
          <div className="flex flex-col items-center mt-9">
            <h2 className="text-6xl text-white">Save 90%</h2>
            <h3 className="text-4xl mt-9 text-wrap max-w-lg text-white">
              of Mobile Data cost
            </h3>
            <h3 className="text-4xl mt-9 text-wrap max-w-lg text-white">
              when traveling
            </h3>
            <p className="max-w-lg mt-9 leading-10 text-white text-center">
              Forget Roaming bills Improve Convenience, Reduce Cost
              and Expand Coverage Join more than 1,000,000 People
              using eSims & our service when traveling.
            </p>
          </div>
        </>
    )
  }


};

export default MainContent;
