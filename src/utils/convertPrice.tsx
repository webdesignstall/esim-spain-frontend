import { IoLogoBitcoin } from "react-icons/io5";
import { conversionRates } from "../constants/currencyRates";

type Currency = "USD" | "THB" | "VND" | "EUR" | "CAD";

export const convertPrice = (
  price: number,
  currency: Currency
): string | JSX.Element => {
  const convertedPrice = price * conversionRates[currency];
  let formattedPrice: string | JSX.Element = new Intl.NumberFormat("en-US", {
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
