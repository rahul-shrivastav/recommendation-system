import React from 'react'

const Rcard = ({ url }) => {
  return (
    <div className='m-5 p-4 w-40 h-60 shadow-lg shadow-gray-300 rounded-sm hover:cursor-pointer hover:scale-105 transition-all duration-300 '>
      <img src={url} className='w-[80%] h-36  m-auto' alt="" />
 
    </div>
  )
}

export default Rcard