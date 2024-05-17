import { useState } from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
            <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
