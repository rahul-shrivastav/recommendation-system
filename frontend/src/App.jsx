import { useState } from 'react'
import './App.css'
import { MdCancel } from "react-icons/md";
import Card from './components/Card';
import Navbar from './components/Navbar';
import Rcard from './components/Rcard';

function App() {
  const [side, setsidebar] = useState(true)


  return (

    <div className="max-w-screen h-screen flex overflow-x-clip relative ">
      <div  className={`z-30 bg-white border-2 rounded-2xl border-slate-200 transition-all duration-1000 w-[40vw] h-[90vh] fixed top-[5vh]  ${side?'left-5 ':'-left-[50vw] '} `}></div>
      
      <div  className={` z-30 bg-white border-2 rounded-2xl border-slate-200 shadow-sm transition-all duration-1000 w-[55vw] h-[90vh] fixed top-[5vh]   ${side?'right-5 ':'-right-[80vw] ' } `}>
        <button className='w-5 hover:cursor-pointer hover:scale-125 transition-all duration-300 h-5 absolute top-2 right-2 text-xl flex items-center justify-center ' onClick={() => {setsidebar(!side)}}><MdCancel /></button>
        <div className="rounded-xl w-full h-10 bg-white text-black font-extralight text-center flex items-center justify-center">RECOMMONDATIONS</div>
        <div className=" w-full h-[93%] flex items-center justify-center flex-wrap overflow-y-scroll">
          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((i) => {
              return <div onClick={()=>{setsidebar(!side)}} className="w-fit h-fit"><Rcard key={i} /></div> 
            })
          }
        </div>

      </div>

      <div className= {`w-screen h-screen trasition-all duration-1000 absolute top-0 left-0 z-0 ${side?'blur-[3px]':''}`} >
      <Navbar />


        <div className="w-full min-h-screen h-fit flex flex-wrap items-center justify-center ">
          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((i) => {
              return <div onClick={()=>{setsidebar(!side)}} className="w-fit h-fit"><Card key={i} /></div> 
            })
          }
        </div>
      </div>


      {/* sidebars */}
      


    </div>
  )
}

export default App
