import OrderHistoryLayout from "@/container/layouts/OrderHistoryLayout";
import OrderHistoryPage from "@/container/order-history";
import { ReactElement } from "react";

const OrderHistory = () => {
  return (
    <div>
      <OrderHistoryPage />
    </div>
  );
};

export default OrderHistory;

OrderHistory.getLayout = function (page: ReactElement) {
  return <OrderHistoryLayout>{page}</OrderHistoryLayout>;
};
