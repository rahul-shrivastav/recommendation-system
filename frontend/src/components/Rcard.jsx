import React from 'react'
import { LiaStarSolid } from "react-icons/lia";

const Rcard = ({ url, title, price, stars }) => {
  return (
    <div className='m-5 p-4 w-40 h-60 shadow-lg shadow-gray-300 rounded-sm hover:cursor-pointer hover:scale-105 transition-all duration-300 '>
      <div className=" h-[75%]">
        <img src={url} className='w-[80%] h-[100%] m-auto' alt="" />
      </div>
      <div className="h-[25%] w-full mt-4">
        <div className="w-full text-center font-light text-[12px]">{title.slice(0, 15) + ' ...'}</div>
        <div className="flex mt-1">
          <div className="w-full text-center font-semibold text-sm">$ {price}</div>
          <div className="w-full text-center font-semibold text-sm flex items-center justify-center"><LiaStarSolid /> {stars}</div>

        </div>

      </div>
 
    </div>
  )
}

export default Rcard