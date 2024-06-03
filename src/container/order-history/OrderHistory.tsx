/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import OrderApi from "@/apis/order/OrderApi";
import { IOrder } from "@/common/interface/order";
import { useAuthProfile } from "@/store/auth/authHook";
import { useOrderHistory } from "@/store/order-history/orderHistoryHook";
import { Progress } from "d-react-components";
import React, { useEffect, useState } from "react";

const orders = [
  {
    country: {
      name: "China",
      state: "Hong Kong",
      flag: "",
    },
    bundle: {
      dataAmount: 1000,
      salePrice: 5,
    },
  },
  {
    country: {
      name: "China",
      state: "Hong Kong",
      flag: "",
    },
    bundle: {
      dataAmount: 1000,
      salePrice: 5,
    },
  },
  {
    country: {
      name: "China",
      state: "Hong Kong",
      flag: "",
    },
    bundle: {
      dataAmount: 1000,
      salePrice: 5,
    },
  },
];

type Props = {
  orderList: any;
};

const OrderHistory = ({ orderList }: Props) => {

  /*return (
    <div className="flex flex-col gap-3 mt-5">
      {orders.map((order) => (
        <div
          className="flex items-center justify-between bg-[#454545] p-2 rounded-md text-white"
          key={Math.random()}
        >
          <img
            className="w-16 h-10 border rounded-lg"
            src={order.country.flag}
            alt="country flag"
          />
          <h4 className="text-white">
            <span>{order.country.name}</span>
            {` (`}
            <span className="text-gray-400 text-lg">{order.country.state}</span>
            {`)`}
          </h4>
          <p className="mt-4">{order.bundle.dataAmount / 1000} GB</p>
          <p className="mt-4">${order.bundle.salePrice} </p>
          <button className="border px-5 py-3 rounded-full">
            View Details
          </button>
        </div>
      ))}
    </div>
  );*/

  return(
      <></>
  )
};

export default OrderHistory;
