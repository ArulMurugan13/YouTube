import React from 'react'

const ButtonComponent = ({name}) => {
  return (
   
    <button className='rounded px-2 text-white bg-black text-center w-auto  whitespace-nowrap'>{name}</button>
  )
}

export default ButtonComponent