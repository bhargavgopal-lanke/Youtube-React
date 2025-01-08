import React, { useEffect, useState } from "react";
import { BiBell, BiMicrophone, BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiPlusBold } from "react-icons/pi";
import youtubelogo from "../Images/youtubelogo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Slices/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(Boolean);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchAPICall();
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchText]);

  const searchAPICall = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const searchJson = await data.json();
    setSuggestions(searchJson[1]);
  };

  const handleBlur = () => {
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  return (
    <div className="youtube-header-sec">
      <div className="flex py-2 px-4 items-center shadow-lg mb-3">
        <div className="w-2/12">
          <div className="flex items-center gap-5">
            <GiHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={handleClick}
            />
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
                rounded-full bg-gray-500 text-white"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
              <div className="fixed bg-white py-5 px-2 w-[42rem] shawdow-lg rounded-lg">
                <ul>
                  {showSuggestions &&
                    suggestions.map((val) => {
                      return (
                        <li
                          className="py-2 shadow-sm hover:bg-gray-100"
                          key={val}
                        >
                          🔍 {val}
                        </li>
                      );
                    })}

                  {/* <li className="py-2 shadow-sm hover:bg-gray-100">
                    🔍 Iphone Pro
                  </li>
                  <li className="py-2 shadow-sm hover:bg-gray-100">
                    🔍 Iphone Pro max
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-full px-3 py-3 bg-gray-500">
            <BiMicrophone className="" />
          </div>
        </div>

        <div className="w-3/12">
          <div className="flex justify-around items-center">
            <button
              type="button"
              className=" w-4/12 bg-gray-500 content-center items-center rounded-full p-3"
            >
              <PiPlusBold className="text-xl inline-block mr-2" /> Create
            </button>
            <BiBell className=" text-3xl" />
            <BiUserCircle className=" text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
