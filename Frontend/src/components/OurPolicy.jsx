import React from "react";
import { assets } from "../assets/assets";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <div>
      <div className="text-center text-3xl py-8">
        <Title text1={"Our "} text2={"Policy"} />
      </div>
      <div className=" flex flex-col sm:flex-row justify-around gap-10 sm:gap-2 text-center py-18 text-xs sm:text-sm md:text-base text-gray-800">
        <div>
          <img
            src={assets.quality_icon}
            alt=".exchange_icon"
            className="w-12 m-auto mb-5"
          />
          <p className="font-semibold">Best Products</p>
          <p className="text-gray-500">We Offer Top Notch Designs</p>
        </div>
        <div>
          <img
            src={assets.support_img}
            alt=".exchange_icon"
            className="w-12 m-auto mb-5"
          />
          <p className="font-semibold">Best Customer Service</p>
          <p className="text-gray-500">We have The Best Customer Service</p>
        </div>
        <div>
          <img
            src={assets.exchange_icon}
            alt=".exchange_icon"
            className="w-12 m-auto mb-5"
          />
          <p className="font-semibold">Our Exchange Policy</p>
          <p className="text-gray-500">
            Free Exchane Within One Week of Delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
