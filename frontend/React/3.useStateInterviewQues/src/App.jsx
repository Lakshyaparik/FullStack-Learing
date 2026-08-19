import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count,setCount] = useState(0)

  function addCount(){
    //here react treat this code as a batch and updtes ui  just with add only 1
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
  }

  function increaseCount(){
    setCount(prevCount=>prevCount+1)
     setCount(prevCount=>prevCount+1)
      setCount(prevCount=>prevCount+1)
       setCount(prevCount=>prevCount+1)
  }

  return (
    <>
    <h1>Count:  {count}</h1>
    <button onClick={increaseCount}>Click Me</button>
    </>
  )
}

export default App
