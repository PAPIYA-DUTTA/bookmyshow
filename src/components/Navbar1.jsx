import React from 'react'

const Navbar1 = () => {
  return (
    <nav className="bg-gray-300 p-4" >
        <div className="flex items-center ">
    
    
    <div className="md:flex space-x-4">
    <a href="#" className="text-white">Movies</a>
    <a href="#" className="text-white">Stream Events</a>
    <a href="#" className="text-white">Plays</a>
    <a href="#" className="text-white">Sports</a>
    <a href="#" className="text-white">Activities</a>
  </div>

  <div className="border-gray-700 h-6 mx-4  md:block"></div>

  
  <div className=" md:flex space-x-4">
    <a href="#" className="text-white">List Your Show</a>
    <a href="#" className="text-white">Corporate</a>
    <a href="#" className="text-white">Offers</a>
    <a href="#" className="text-white">Gift Cards</a>
  </div>
  </div>
  </nav>
  )
}

export default Navbar1