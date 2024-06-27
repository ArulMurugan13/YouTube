import React from "react";
import { useSearchParams } from "react-router-dom";

const Watch = () => {

    const [searchParams ]= useSearchParams();
    console.log(searchParams.get("v"));

    const videoId = searchParams.get("v");

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+videoId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      
    </div>
  );
};

export default Watch;
