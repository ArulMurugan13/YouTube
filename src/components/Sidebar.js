import React from 'react'
import Divider from './Shared/Divider';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = () => {
    const isMenuOpen = useSelector(appStore => appStore.app.isMenuOpen);

    if(!isMenuOpen)
      {
        return null;
      }


  return (
    <div className=''>
      <div className="border-r-2 border-r-black  mb-2 mr-4 p-2 overflow-y-auto no-scrollbar ">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Shorts</li>
            <li>Subscription</li>
          </ul>
        </div>
        <Divider />
        <div>
          <h1 className="font-bold">Explore</h1>
          <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movie</li>
            <li>Live</li>
            <li>News</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
            <li>Gaming</li>
          </ul>
        </div>
        <Divider />
        <div>
          <h1 className="font-bold"> More From YouTube</h1>
          <ul>
            <li>YouTube Premium</li>
            <li>YouTube Studio</li>
            <li>YouTube Music</li>
            <li>YouTube Kids</li>
          </ul>
        </div>

        <Divider />
        <div>
          <ul>
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send FeedBack</li>
          </ul>
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default Sidebar