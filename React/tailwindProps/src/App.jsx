import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let obj={
    name:"Ayush",
    age:22
  }

  return (
    /*value passed here can be used as props by the card element
        array and objects are passed in curly braces and any thing can be property
    
    */
    <>
      <h1 className="bg-amber-300 mb-4 text-black rounded-xs text-8xl font-bold underline ">
        Hello world!
      </h1>
      <Card college="chitkara" anotherObj={obj} head="Hai to university"/>  
      <Card/>
      
      <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
    </>
  )
}

export default App
