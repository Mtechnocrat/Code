import { useState } from 'react'

function App() {
const [nextColor,setNextColor]=useState("pink");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:nextColor}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4 mx-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setNextColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setNextColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Blue"}}>Blue</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setNextColor("green")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setNextColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Yellow"}}>Yellow</button>
        </div>
      </div>  
      </div>
      </>
  )
}

export default App
