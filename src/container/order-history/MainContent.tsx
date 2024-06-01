/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import OrderHistory from "./OrderHistory";
import ESims from "./ESims";
import { useAuthProfile } from "@/store/auth/authHook";
import { IOrder } from "@/common/interface/order";
import { useOrderHistory } from "@/store/order-history/orderHistoryHook";
import { Progress } from "d-react-components";
import OrderApi from "@/apis/order/OrderApi";

const navs = ["Your Previous Order", "Your eSim"];

const MainContent = () => {
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
};

export default MainContent;
