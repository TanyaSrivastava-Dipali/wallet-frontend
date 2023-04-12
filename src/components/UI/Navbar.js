import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import image from "../../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex bg-black justify-between items-center h-24  mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-white-500">
        Crypto Wallet
      </h1>
      <div onClick={handleNav} className="block">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed right-0 top-20 w-[8%] h-auto border-r z-50 border-r-gray-900 bg-gray-100 ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <NavLink to="/home">
          {({ isActive }) => (
            <li
              className={[
                "cursor-pointer p-4 border-b border-black",
                isActive
                  ? "text-yellow-600 font-bold bg-black"
                  : "text-black font-bold",
              ].join(" ")}
            >
              Home
            </li>
          )}
        </NavLink>
        <NavLink to="/*">
          {({ isActive }) => (
            <li
              className={[
                "cursor-pointer p-4 border-b border-black",
                isActive
                  ? "text-yellow-600 font-bold bg-black"
                  : "text-black font-bold",
              ].join(" ")}
            >
              About
            </li>
          )}
        </NavLink>
        <NavLink to="/signup">
          {({ isActive }) => (
            <li
              className={[
                "cursor-pointer p-4 border-b border-black",
                isActive
                  ? "text-yellow-600 font-bold bg-black"
                  : "text-black font-bold",
              ].join(" ")}
            >
              Signup
            </li>
          )}
        </NavLink>
        <NavLink to="/verify">
          {({ isActive }) => (
            <li
              className={[
                "cursor-pointer p-4 border-b border-black",
                isActive
                  ? "text-yellow-600 font-bold bg-black"
                  : "text-black font-bold",
              ].join(" ")}
            >
              Verify Email
            </li>
          )}
        </NavLink>
        <NavLink to="/login">
          {({ isActive }) => (
            <li
              className={[
                "cursor-pointer p-4 border-b border-black",
                isActive
                  ? "text-yellow-600 font-bold bg-black"
                  : "text-black font-bold",
              ].join(" ")}
            >
              Login
            </li>
          )}
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
