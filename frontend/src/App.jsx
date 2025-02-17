import { useEffect, useState } from 'react'
import './App.css'
import { MdCancel } from "react-icons/md";
import Card from './components/Card';
import Navbar from './components/Navbar';
import Rcard from './components/Rcard';
import { LiaStarSolid } from "react-icons/lia";

function App() {
  const [side, setsidebar] = useState(false)
  const [items, setitems] = useState(null)
  const [citem, setcitem] = useState(null)
  const [recommendations, setrecommendations] = useState([]);

  const getAllItems = async () => {
    const req = await fetch('http://127.0.0.1:5000/api/get_items');
    const res = await req.json();
    const data = await res.items;
    setitems(data)
  }
  const getRecommendations = async () => {
    setrecommendations([])

    const req = await fetch('http://127.0.0.1:5000/api/recommendations');
    const res = await req.json();
    const recc = await res.items;
    setrecommendations(recc)
  }
  useEffect(() => {
    getAllItems()
  }, [])


  if (items) {
    return (

      <div className="max-w-screen h-screen flex overflow-x-clip relative ">
        <div className={`z-30 bg-white border-2 rounded-2xl border-slate-200 transition-all duration-1000 w-[40vw] h-[90vh] fixed top-[5vh]  ${side ? 'left-5 ' : '-left-[50vw] '} `}>
          <div className="w-[100%] h-[50%] mt-10 ">
            <img className='w-[40%] m-auto h-full' src={citem ? citem.imgUrl : null} title={citem ? citem.title : ''} stars={citem ? citem.stars : ''} reviews={citem ? citem.reviews : ''} price={citem ? citem.price : ''} alt="" />
          </div>

          <div className="w-full h-[40%] borde border-slate-300 mt-2 flex flex-col items-center justify-center  ">
            <span className='px-5 text-2xl border border-slate-200 p-3 text-center font-bold shadow-xl rounded-lg mx-2'>{citem ? citem.title : ''}</span>


            <div className=" flex  border-slate-200 p-3">
              <span className='flex items-center justify-center gap-1 text-3xl border border-slate-200 p-3 shadow-xl'>{citem ? citem.stars : ''}<LiaStarSolid /></span>

              <span className='ml-5 text-2xl border border-slate-200 p-3 shadow-xl'> Reviews : <span className="font-semibold">{citem ? citem.reviews : ''}</span></span>

          </div>

            <span className='font-bold text-3xl border border-slate-200 p-3 shadow-xl'>$ {citem ? citem.price : ''}</span>
        </div>
        </div >



        <div className={`  z-30 bg-white border-2 rounded-2xl border-slate-200 shadow-sm transition-all duration-1000 w-[55vw] h-[90vh] fixed top-[5vh]   ${side ? 'right-5 ' : '-right-[80vw] '} `}>
          {recommendations.length === 0 &&
            <div className='w-[100%] flex flex-col items-center justify-center h-[100%] bg-white rounded-3xl absolute top-0 left-0'>
              <div className=" border-slate-900 border-b w-10 h-10 flex items-center justify-center rounded-full animate-spin duration-500 "></div>
              <div className=" mt-5 opacity-80 text-xs">Fetching Recommendations. Please wait.</div>
            </div>
          }
          <button className='w-5 hover:cursor-pointer hover:scale-125 transition-all duration-300 h-5 absolute top-2 right-2 text-xl flex items-center justify-center ' onClick={() => { setsidebar(!side) }}><MdCancel /></button>
          <div className="rounded-xl w-full h-10 bg-white text-black font-extralight text-center flex items-center justify-center">RECOMMONDATIONS</div>
          <div className=" w-full h-[93%] flex items-center justify-center flex-wrap overflow-y-scroll">
            {
              recommendations.map((i) => {
                return <div key={i.title} onClick={() => { setcitem(i); getRecommendations() }} className="w-fit h-fit"><Rcard url={i.imgUrl} title={i.title} price={i.price} stars={i.stars} /></div>
              })
            }
        </div>


      </div>

      <div className= {`w-screen h-screen trasition-all duration-1000 absolute top-0 left-0 z-0 ${side?'blur-[3px]':''}`} >
      <Navbar />


        <div className="w-full min-h-screen h-fit flex flex-wrap items-center justify-center ">
          {
            items.map((i) => {
              return <div key={i.title} onClick={() => { setsidebar(!side); setcitem(i); getRecommendations() }} className="w-fit h-fit"><Card url={i.imgUrl} title={i.title} price={i.price} stars={i.stars} /></div> 
            })
          }
        </div>
      </div>      


    </div>
  )
  }
  else {
    return <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className=" border-slate-900 border-b w-10 h-10 flex items-center justify-center rounded-full animate-spin duration-500 ">

      </div>
      <div className=" mt-5 opacity-80 text-xs">Server will take atleast 1 min for first request. Please wait.</div>
    </div>
  }
}

export default App
