import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
       <Navbar/>
       <Navbar1/>
       <HeroSection/>
       <Footer/>
    </>
  )
}

export default App
