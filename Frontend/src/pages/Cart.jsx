import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14 ">
      <div className="text-2xl mb-3">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div className="lg:flex justify-between ">
        <div className="w-full lg:w-[45%]">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-800 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt="pro"
                    className="w-16 sm:w-20"
                  />
                  <div className="">
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5  mt-2">
                      <p>
                        {currency}{" "}
                        <span className="text-red-600">
                          {productData.price}
                        </span>
                      </p>
                    </div>
                    <p className=" sm:px-3 sm:py-1 border bg-slate-200 w-12 rounded  text-center">
                      {" "}
                      {item.size}
                    </p>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.currentTarget.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt="bin"
                  className="w-4  mr-4 sm:w-5 cursor-pointer"
                />
              </div>
            );
          })}
        </div>
        <div className=" justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
          </div>
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-red-500 text-white text-xl my-8 px-5 py-3 rounded"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
