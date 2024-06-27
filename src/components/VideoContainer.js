import React, { useEffect, useState } from 'react'
import VideoShower from './Shared/VideoShower'
import { YOUTUBE_API } from './utils/constants';
import { Link } from 'react-router-dom';

function VideoContainer() {
    const [videoList , setVideoList] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

     const fetchData = async () => {
       const data = await fetch(YOUTUBE_API);
       const json = await data.json();
       setVideoList(json?.items);
     };


  return (
    <div className=" flex flex-wrap  gap-4 p-2 md:container md:mx-auto mx-auto ">
      {videoList.map((vid) => {
        return (
          <Link to={"watch?v=" + vid.id} key={vid.id}>
            <VideoShower video={vid} />
          </Link>
        );
      })}
    </div>
  );
}

export default VideoContainer