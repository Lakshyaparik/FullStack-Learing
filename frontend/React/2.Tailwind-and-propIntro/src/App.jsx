import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
function App() {
  let myObj={
    btn1 : "click me",
    btn2 : "visit me"
  }
  return (
    <>
    <h1 className='text-green-400'>Tailwind Css</h1>
    <Card name='lakshya' sirname='pareek' btntxt={myObj.btn1} />
    <Card name='akshya' />
    </>
  )
}

export default App
