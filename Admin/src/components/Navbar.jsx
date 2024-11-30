import React from "react";
import { assets } from "../assets/assets.js";

const Navbar = ({ setToken }) => {
  return (
    <div className=" flex item-center py-2 px-[4%] justify-between ">
      <img src={assets.logo} alt="logo" className="w-[max(10%,90px)]" />

      <button
        onClick={() => setToken("")}
        className="bg-gray-900  text-white px-5 py-2 sm:px-7 sm:py-2 rounded text-xs sm:text-sm  "
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
