import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/Navbar/Navbar'
import Login from './assets/Pages/Login'
import Landing from './assets/Landing'
import Footer from './assets/Pages/footer/footer'
import Dashboard from './assets/Admin/Dashboard/dashboard'

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
     <BrowserRouter>
     {isAdmin ? null : <Navbar />}
     
     <Routes>
     
     <Route path="/" element={<Landing />}/>
     <Route path="/Admin/Dashboard" element={<Dashboard />}/>
      
     </Routes>
     {isAdmin ? null : (
        <Footer setIsAdmin={setIsAdmin} />
      )}
     </BrowserRouter>
    </>
  )
}

export default App
