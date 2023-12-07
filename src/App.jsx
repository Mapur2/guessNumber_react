import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
function App() {

  return (
    <>
    <div className='mx-auto my-5'>
      <Outlet/>
      </div>
    </>
  )
}

export default App
