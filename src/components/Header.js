import youtube from "../Images/youtube.png";
import hamburger from "../Images/hamburger.png";
import user from "../Images/user.png";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { json } from "react-router-dom";

const Header = () => {
  const [searchText, setsearchText] = useState("");

  const [searchSuggestions, setsearchSuggestions] = useState([]);
  const[showSuggestion,setshowSuggestion] = useState(false);

  useEffect(() => {
    fetchData();
  }, [searchText]);

  // fetching search suggestion data
  const fetchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setsearchSuggestions(json[1]);
  };

  //dispatching toggle action
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleBlur = () => {
    // Use a small timeout to allow clicks on suggestion items
    setTimeout(() => {
      setshowSuggestion(false);
    }, 100);
  };

  return (
    <div className="grid grid-flow-col p-3  shadow-lg top-0 left-0 w-full">
      <div className=" col-span-1 gap-2 flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6"
          alt="logo"
          src={hamburger}
        />

        <img className="h-6 w-24" alt="logo" src={youtube} />
      </div>
      <div className="col-span-10">
        <div className="w-full flex ">
          <input
            type="text"
            className="border rounded-l-full border-gray-400 w-1/2 px-5 py-1"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
            onFocus={() => setshowSuggestion(true)}
            onBlur={() => handleBlur()}
          />
          <button className="border rounded-r-full border-gray-400 px-3 py-1">
            🔍
          </button>
        </div>
        {showSuggestion && searchText.length > 1 && (
          <div className="absolute bg-white mt-2 w-[36rem] rounded-lg z-50 p-3">
            <div className="">
              <ul>
                {searchSuggestions.map((suggestion, index) => {
                  return (
                    <li key={index} className="py-2 shadow-sm">
                      🔍 {suggestion}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className=" col-span-1 ">
        <img className="h-6" alt="logo" src={user} />
      </div>
    </div>
  );
};

export default Header;
