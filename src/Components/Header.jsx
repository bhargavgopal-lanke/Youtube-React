import React from "react";
import { BiMicrophone } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiPlusBold } from "react-icons/pi";
import youtubelogo from "../Images/youtubelogo.png";

const Header = () => {
  return (
    <div className="youtube-header-sec">
      <div className="flex py-2 items-center">
        <div className="w-2/12">
          <div className="flex items-center gap-5">
            <GiHamburgerMenu className="text-xl text-white " />
            <img alt="youtube logo" src={youtubelogo} className="w-3/6" />
          </div>
        </div>
        <div className="w-7/12 flex items-center gap-5 justify-center my-auto">
          <div className="w-10/12 my-auto">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pe-10 text-sm
               text-gray-900 border border-gray-300 rounded-full
                bg-gray-50 focus:ring-blue-500 focus:border-blue-500
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" rounded-full px-3 py-3 bg-gray-500">
            <BiMicrophone className="text-white" />
          </div>
        </div>
        <div className="w-3/12">
          <div className="">
            <button
              type="button"
              className="text-white w-4/12 bg-gray-500 content-center items-center rounded-full p-3"
            >
              <PiPlusBold className="text-xl inline-block mr-2" /> Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
