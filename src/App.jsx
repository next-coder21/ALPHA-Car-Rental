import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/Navbar/Navbar'
import Login from './assets/Pages/Login'
import Landing from './assets/Landing'

function App() {


  return (
    <>
     <BrowserRouter>
      <Navbar  />
     
     <Routes>
     
     <Route path="/" element={<Landing />}/>
      
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
