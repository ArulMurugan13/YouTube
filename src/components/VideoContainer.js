import React, { useEffect, useState } from 'react'
import VideoShower from './Shared/VideoShower'
import { YOUTUBE_API } from './utils/constants';

function VideoContainer() {
    const [videoList , setVideoList] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

     const fetchData = async () => {
       const data = await fetch(YOUTUBE_API);
       const json = await data.json();

       console.log(json);

       setVideoList(json?.items);
     };


  return (
     <div className=" grid grid-cols-4 overflow-auto h-[100vh]  gap-4 ">
        {
            videoList.map((vid)=>{
                
                return <VideoShower key={vid.id} video={vid}/>
            })

        }


       
      </div>
      )
}

export default VideoContainer