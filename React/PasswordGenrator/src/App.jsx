import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [character,setCharacter]=useState(false);
  const [password,setPassword]=useState("");

  let passRef=useRef(null);
  const passwordGenerator=useCallback(()=>{ // uses for the memorizations 
    // useCallback is used to memoize the function so that it does not get recreated on every render 
    // useCallback remember krta hai 
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    

    if(numberAllowed) string+="0123456789";
    if(character) string+="!@#$%^&*"

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*string.length+1);
      pass+=string[char];
    }

    setPassword(pass);

  },[length,numberAllowed,character,setPassword])

  const copytoClipboard=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,3);  // using ? because value can be null here
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{  // used to re-render the page or re-render tha function if any change occur in that dependencies array 
    //useEffect is used for running functions without any event handler
    passwordGenerator();
  },[numberAllowed,character,length,passwordGenerator])
  
  return (
    <>
      <h1 className='text-4xl text-center'>Pasword Generator</h1>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-500'>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"  value={[password]} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passRef}/>
          <button className='my-1.5' onClick={copytoClipboard}>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{ //here ref  is used to refer the input feild as useReference hook is used above
              setLength(e.target.value)
            }} />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)} />
            <label>Number</label>
            <input type="checkbox" defaultChecked={character} onChange={()=>setCharacter((prev)=>!prev)} />
            <label htmlFor="">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
