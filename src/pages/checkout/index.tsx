import CheckoutPage from "@/container/checkout/CheckoutPage";
import CheckoutLayout from "@/container/layouts/CheckoutLayout";
import Layout, { LayoutClean } from "@/container/shared/layout/Layout";
import React from "react";

export interface ICheckoutProps {
  [key: string]: any;
}

const Checkout: React.FC<ICheckoutProps> = ({ id }) => {
  return <CheckoutPage />;
};

export default Checkout;

//@ts-ignore
Checkout.getLayout = function getLayout(page) {
  return (
      <div className={'checkout-page'}>
          <CheckoutLayout>
              <LayoutClean showHideConfig={{hideLogo: true}}>
                  {page}
              </LayoutClean>
            </CheckoutLayout>
      </div>
)
    ;
};
