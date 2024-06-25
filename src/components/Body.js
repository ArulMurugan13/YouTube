import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className=' flex w-full   mt-14 h-[calc(100vh-4rem)]  fixed gap-5 '>
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body