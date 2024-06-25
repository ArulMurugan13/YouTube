import React from 'react'
import ButtonComponent from './Shared/ButtonComponent';


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
    <div className="flex gap-5  items-center p-4 overflow-auto no-scrollbar border border-b-gray-200">
      {buttons.map((btn) => {
        return <ButtonComponent name={btn} />;
      })}
    </div>
  );
}

export default ButtonList