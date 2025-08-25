import React from 'react'
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='bg-transparent w-full fixed top-0 left-0 z-50'>
      <div className='text-white flex justify-between items-center '>
      <div className='text-lg font-bold cursor-pointer'>
        <span className='text-blue-900'>&lt;</span>
         <span className='text-white'>Suyog</span>
          <span className='text-blue-900'>/</span>
           <span className='text-white'>Gautam</span>
            <span className='text-blue-900'>&gt;</span>
      </div>
       </div>
      
    </nav>
  )
}

export default Navbar