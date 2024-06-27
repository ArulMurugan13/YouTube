import React from 'react'

const VideoShower = ({video}) => {
    const { snippet, statistics } = video;
    const { thumbnails, channelTitle, title } = snippet;

  return (
    <div className="w-60 h-38 grid-flow-row hover:ease-in-out hover: transform hover:scale-90 transition duration-300 ease-in-out">
      <div>
        <img
          className="rounded-lg w-60 h-38"
          alt="thumbnail"
          src={thumbnails?.maxres?.url}
        />
      </div>
      <div>
        <h1 className=" font-medium text-sm truncate">{title}</h1>
        <h3 className="font-light ">{channelTitle}</h3>
        <p className="font-normal from-neutral-500">
          {(statistics?.viewCount / 1000000).toFixed(3)}M views{" "}
        </p>
      </div>
    </div>
  );
}

export default VideoShower