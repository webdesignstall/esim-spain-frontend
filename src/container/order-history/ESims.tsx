import { OrderType } from "@/common/interface/order";
import { useMemo } from "react";

type Props = {
  orderList: any;
};

const ESims = ({ orderList }: Props) => {
  const yourEsims = useMemo(() => {
    if (!orderList.length) {
      return [];
    }
    const filteredOrders = orderList?.filter(
      (item: any) =>
        item?.orderType === OrderType.BUY_NEW && !!item?.eSimData?.eSimId
    );
    if (!filteredOrders.length) {
      return [];
    }
    return filteredOrders;
  }, [orderList]);

  // console.log({ yourEsims });
  return (
    <div className="mt-4">
      {/*<h3 className="text-white">E sims list</h3>*/}
    </div>
  );
};

export default ESims;
