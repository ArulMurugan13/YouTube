import youtube from '../Images/youtube.png'
import hamburger from "../Images/hamburger.png";
import user from "../Images/user.png";
import React from 'react'


const Header = () => {
  return (
    <div className="grid grid-flow-col h-14 p-3 items-center text-center shadow-lg fixed top-0 left-0 w-full z-[1000]">
      <div className=" col-span-1 gap-2 flex  text-center">
        <img className="h-6" alt="logo" src={hamburger} />

        <img className="h-6 w-24" alt="logo" src={youtube} />
      </div>
      <div className="col-span-10  text-center">
        <input
          type="text"
          className="border rounded-l-full border-gray-400  w-2/4 px-5 py-1  "
        />
        <button className="border rounded-r-full border-gray-400  px-3 py-1 ">
          🔍
        </button>
      </div>
      <div className=" col-span-1 justify-center text-center ">
        <img className="h-6" alt="logo" src={user} />
      </div>
    </div>
  );
}

export default Header