import React from 'react';
import LOGO1 from "../assets/LOGO1.png";
const Navbar = () => {
  return (
    <nav className="bg-gray-400 p-4">
      <div className="container mx-auto flex items-center justify-between ">
       
        <div className="flex items-center">
          <img src= {LOGO1} alt="BookMyShow Logo" className="h-8 mr-4" />
          
        </div>

        
        <div className="flex-grow mx-4">
            
          <input type="text" placeholder="Search " className="w-full px-4 py-2 rounded-md focus:outline-none" />
        </div>

        
        <div className="mr-4">
          <select className="bg-white-900 text-gray px-1 py-1 rounded-md focus:outline-none">
            <option value="" disabled selected>Select your location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            
          </select>
        </div>

        
        <button className="text-white bg-red-600 px-4 py-2 rounded-md mr-4 focus:outline-none">Sign In</button>

        
        <div >
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;