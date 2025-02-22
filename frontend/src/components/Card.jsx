import React from 'react'
import { LiaStarSolid } from "react-icons/lia";

const Card = ({ url, title, price, stars }) => {
  return (
    <div className='m-5 p-2 w-62 h-80 border border-slate-100 shadow-xl shadow-gray-300 rounded-sm hover:cursor-pointer hover:scale-105 transition-all duration-300 '>
      <div className=" h-[75%]">
        <img src={url} className='w-[80%] h-[100%] m-auto' alt="" />
      </div>
      <div className="h-[25%] w-full mt-2">
        <div className="w-full text-center font-light text-sm">{title.slice(0, 50) + '...'}</div>
        <div className="flex mt-1">
          <div className="w-full text-center font-semibold text-md">$ {price}</div>
          <div className="w-full text-center font-semibold text-md flex items-center justify-center"><LiaStarSolid /> {stars}</div>

        </div>

      </div>

 
    </div>
  )
}

export default Card