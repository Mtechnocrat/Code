
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0) // intial value can be anything that we want to set in the code
  // it return 2 values in array
  // first value is the variable and second value is the functions that we gives here i.e is how to update the value of the first varible

  const increase = () => {
    // counter=counter+1;
    // setCounter(counter);
    // console.log("increased" , counter);


    // these set of code will increase counter by one by one as code is sent in bundle to  execute the functions.
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    /// if we want to do coding this way then we can do
    // this will  update the counter by 4 values;
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
  }

  const descrease=()=>{
    counter=counter-1;
    setCounter(counter);
    console.log("Decreased",counter);
    
  }

  return (
    <>
      <h1>React is just Starting</h1>
      <h2>Counter : {counter}</h2>

      <button id='add' onClick={increase}>Add Value</button><br />
      <button id='remove' onClick={descrease}>Remove Value</button>
    </>
  )
}

export default App
