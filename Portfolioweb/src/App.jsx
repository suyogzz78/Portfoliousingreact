import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'

function App() {
  return (
    <>
      <div className="bg-[#0f172a]">
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
        <div className='relative pt-20'>
          <Navbar />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Work />
          <Contact />
          <Footer />
      

        </div>
      </div>
    </>
  )
}

export default App
