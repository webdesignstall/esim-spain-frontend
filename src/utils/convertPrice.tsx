import React from "react";
import { IoLogoBitcoin } from "react-icons/io5";
import { useCurrency } from "@/contexts/CurrencyProvider";

const PriceConverter = ({ price }: { price: any }) => {
  const { exchangeRates, currency }: any = useCurrency();

  const convertPrice = (price: any) => {
    const convertedPrice = Number(price) * exchangeRates[currency];
    let formattedPrice: any = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(convertedPrice);

    switch (currency) {
      case "USD":
        formattedPrice = formattedPrice.replace("$", "$ ");
        break;
      case "THB":
        formattedPrice = (
          <span className="flex items-center">
            <IoLogoBitcoin /> {formattedPrice.toString().replace("THB", " ")}
          </span>
        );
        break;
      case "VND":
        formattedPrice = formattedPrice.replace("₫", "₫ ");
        break;
      case "EUR":
        formattedPrice = formattedPrice.replace("€", "€ ");
        break;
      case "CAD":
        formattedPrice = formattedPrice.replace("CA$", "C$ ");
        break;
      default:
        break;
    }

    return formattedPrice;
  };

  return <>{convertPrice(price) ? convertPrice(price)  : ''}</>;
};

export default PriceConverter;
