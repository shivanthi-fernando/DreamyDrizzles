// eslint-disable-next-line no-unused-vars
import React from "react";
import DreamyDrizzlesLogo from "../../assets/DreamyDrizzlesLogo.png";
import DarkMode from "../DarkMode";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Breads & Pastries",
    link: "/#",
  },
  {
    id: 4,
    name: "Beverages",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Cakes",
    link: "/#",
  },
  {
    id: 2,
    name: "Cup Cakes",
    link: "/#",
  },
  {
    id: 3,
    name: "Donuts",
    link: "/#",
  },
  {
    id: 4,
    name: "Other",
    link: "/#",
  },
];

const NavBar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper NavBar */}
      <div className="bg-primary/100 py-1">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#" className="font-bold text-2xl flex gap-2">
              <img
                src={DreamyDrizzlesLogo}
                alt="DreamyDrizzlesLogo"
                className="w-12"
              />
              <div className="mt-2">Dreamy Drizzles</div>
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* Search bar*/}
            <div>
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                />
                <IoMdSearch className="text-gray-500 group-hover: text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
            {/* Order Buttons */}
            <button
              onClick={() => alert("Order not available yet")}
              className="bg-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              {/* bg-gradient-to-r from-primary to-secondary transition-all duration-200 */}
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Dark Mode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower NavBar */}
      <div className="flex justify-center">
        <ul className="sm: flex items-center gap-4 my-2">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Drop Down */}
          <li className="group relative cursor-pointer">
            <a href="" className="flex items-center gap-[2px] py-2">
              Cakes & Desserts
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
