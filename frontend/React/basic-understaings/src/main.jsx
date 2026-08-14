import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


const myElement = React.createElement(
  'a',
  {href : 'https://www.google.com'},
  'click me'
)

function MyApp(){
  const user = 'lakshya'
  return(
    <h2>this is from Myapp hi {user}{myElement}</h2>
  )
}

createRoot(document.getElementById('root')).render(
    <>
    <App />
    <MyApp />
    {myElement}
    </>
)
