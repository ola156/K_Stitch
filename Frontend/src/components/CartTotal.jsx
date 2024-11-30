import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full lg:w-[450px]">
      <div className="text-2xl ">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Products SubTotal</p>
          <p>
            {currency}{" "}
            <span className="text-red-500">{getCartAmount()}.00</span>
          </p>
        </div>
        <hr />
        <div className="flex justify-between ">
          <p>Shipping Fee</p>
          <p>
            {currency}
            <span className="text-red-500">{delivery_fee}.00</span>
          </p>
        </div>
        <hr />
        <div className=" flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            <span className="text-red-500">
              {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
            </span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
