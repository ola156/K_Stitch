import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="w-[17%] min-h-screen border-r-2">
      <div className="flex flex-col gap-5 pt-6 pl-[15%] text-[15px]">
        <NavLink
          to="/add"
          className="flex items-center gap-3 border border-gray-500  mr-2 px-3 py-2  rounded-lg"
        >
          <img src={assets.add_icon} alt="add" className="w-5 h-5" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 border border-gray-500 mr-2 px-3 py-2  rounded-lg"
        >
          <img src={assets.order_icon} alt="order" className="w-5 h-5" />
          <p className="hidden md:block">Item Lists</p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-3 border border-gray-500  mr-2 px-3 py-2  rounded-lg"
        >
          <img src={assets.order_icon} alt="order" className="w-5 h-5" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
