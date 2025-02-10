import React from 'react'

const Card = ({ url }) => {
  return (
    <div className='m-5 p-4 w-62 h-80 shadow-lg shadow-gray-300 rounded-sm hover:cursor-pointer hover:scale-105 transition-all duration-300 '>
      <img src={url} className='w-[80%] h-52 m-auto' alt="" />
 
    </div>
  )
}

export default Card