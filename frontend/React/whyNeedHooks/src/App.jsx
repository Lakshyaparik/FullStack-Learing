import { useState } from 'react'
import './App.css'


const increaseVal = (counter,setCounter)=>{
  if(counter>=10) return setCounter(0);
  setCounter(counter+1)
  console.log(counter);
}

function App() {
  
  let [counter, setCounter] = useState(0);

  let decreaseVal = ()=>{
    if(counter<=0) return setCounter(10);
    setCounter(counter-1)
  }
  
  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={()=>{increaseVal(counter,setCounter)}}>Add in {counter}</button>
    <br />
    <button onClick={decreaseVal}>Sub in {counter}</button>
    </>
  )
}

export default App
