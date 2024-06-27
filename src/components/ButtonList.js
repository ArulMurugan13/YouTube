import React from "react";
import ButtonComponent from "./Shared/ButtonComponent";

const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "Recently Uploaded",
    "Trending",
    "JukeBox",
    "Podcasts",
    "Music",
    "Gaming",
    "Live",
    "Recently Uploaded",
    "Trending",
    "JukeBox",
    "Podcasts",
  ];
  return (
    <div className="md:container md:mx-auto mx-auto flex gap-5 items-center  p-4  mb-2 overflow-auto  no-scrollbar border border-b-gray-200">
      {buttons.map((btn,index) => {
        return <ButtonComponent key={index} name={btn} />;
      })}
    </div>
  );
};

export default ButtonList;
