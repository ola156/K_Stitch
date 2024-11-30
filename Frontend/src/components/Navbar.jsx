import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-36" />
      </Link>

      <ul className="hidden sm:flex gap-2 lg:gap-5 text-sm text-gray-800">
        <NavLink to="/" className="flex flex-col  items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4  h-[1.5px] bg-gray-800" hidden />
        </NavLink>
        <NavLink to="/about" className="flex flex-col  items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4  h-[1.5px] bg-gray-800" hidden />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col  items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4  h-[1.5px] bg-gray-800" hidden />
        </NavLink>
        <NavLink to="/orders" className="flex flex-col  items-center gap-1">
          <p>ORDERS</p>
          <hr className="w-2/4  h-[1.5px] bg-gray-800" hidden />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col  items-center gap-1">
          <p> CONTACTS</p>
          <hr className="w-2/4  h-[1.5px] bg-gray-800" hidden />
        </NavLink>
      </ul>
      <div className=" flex items-center gap-4 lg:gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="search-icon"
          className=" w-5 cursor-pointer"
        />
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="Account"
            className="w-5 cursor-pointer"
          />

          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-600 rounded-s">
                {/* <p className="cursor-pointer hover:text-black">My Account </p>  
                <p className="cursor-pointer hover:text-black"></p> */}
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  {" "}
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5" />
          <p className="absolute  right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-600 text-white aspect-square rounded-full text-[12px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu-icon"
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* sidebar for small screen*/}

      <div
        className={`absolute top-0 right-0 overflow-hidden  bg-slate-100 transition-all bottom-0  ${
          visible ? " w-[70%]" : "w-0"
        }`}
      >
        <div className=" flex flex-col text-gray-900">
          <div
            onClick={() => setVisible(false)}
            className=" flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.cross_icon}
              alt="dropdown-icon"
              className="h-4 rotate-180"
            />
            <p>Return</p>
          </div>

          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/orders"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            ORDERS
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;