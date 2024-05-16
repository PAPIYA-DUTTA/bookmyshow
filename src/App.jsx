import React from 'react'
import Navbar from './components/Navbar'
import Navbar1 from './components/Navbar1'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import { Body } from './components/Body'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar1/>
      <HeroSection/>
      <Body></Body>
      <Footer/>
      
  
    </div>
  )
}

export default App