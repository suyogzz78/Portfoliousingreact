import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='mt-4 flex flex-col md:flex-row items-center md:justify-between px-4 md:px-16 py-4 '>
      {/* Text */}
      <p className='text-center md:text-left text-gray-400 text-sm'>
        &copy; 2024 Your Name. All rights reserved.
      </p>

      {/* Icons */}
      <div className='flex justify-center md:justify-end space-x-4 mt-2 md:mt-0'>
        <a href="https://github.com/suyogzz78" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare size={25} color='white' />
        </a>
        <a href="https://www.linkedin.com/in/suyog-gautam-273b40315/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} color='white' />
        </a>
      </div>
    </div>
  )
}

export default Footer
