import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-col-[3fr_1fr_1fr] gap-12 my-10 mt-35 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <span className="text-gray-950 md:2/3">
            Khay_Stitches Your No 1 Go To Company For Quality Dresses
          </span>
          <p className="w-full md:2/3 text-gray-500">
            We Offer Nothing But The Best In Our Company.Gurantee Returns And
            The Best And Proffesional Designers Out There.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-4">You Can Reach Us At</p>
          <ul className="flex flex-col gap-1 text-gray-700">
            <li>0808 744 2174</li>
            <li>agboolausman01@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyrigt 2024 @k_STITCH . All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
