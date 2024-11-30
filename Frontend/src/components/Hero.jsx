import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" flex flex-col sm:flex-row border ">
      {/*Hero right side */}
      <img src={assets.hero_img} alt="hero-img" className="w-full sm:w-1/2" />
      {/*Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-gray-900">
          <div className="flex items-center gap-2">
            <p className="text-1xl">We Bring You the Best Deals. </p>
          </div>
          <h1
            id="k-title"
            className=".arima-family  text-3xl sm:py-3 lg:text-5xl leading-relaxed"
          >
            Khay_Stitches
          </h1>
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-sm md:text-base">
              Get Outfits For Any Occasion.
            </p>

            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base">Shop Now </p>
              <p className=""></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
