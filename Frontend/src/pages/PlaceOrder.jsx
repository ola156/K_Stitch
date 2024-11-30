import React, { useContext } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    email: "",
    city: "",
    state: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // APi Calls for cod

        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col  sm:flex-row  justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/*------------left side------------------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl my-3 sm:text-2xl">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
          required
        />
        <textarea
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-400  rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
          required
        />
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
            required
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Phone Number"
            required
          />
          <input
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
            required
          />
        </div>
      </div>
      {/*------------right side------------------------ */}
      <div className="mt-8">
        <div className="mt-8 min-w-80 border p-5">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"Payment"} text2={"Method"} />
          {/*------------payment method------------------------ */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border ${
                  method === "stripe" ? "bg-blue-400" : ""
                } `}
              ></p>
              <img src={assets.stripe_logo} alt="visa" className="h-5  mx-4" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border ${
                  method === "cod" ? "bg-blue-400" : ""
                }  `}
              ></p>
              <p className="text-gray-800 text-sm font-medium mx-4">
                Cash On Delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8 ">
            <button
              type="submit"
              className="bg-red-500 text-white text-xl my-6 px-5 py-2.5 rounded"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
