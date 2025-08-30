import React from 'react'

import { Typewriter } from "react-simple-typewriter";

function About() {



  return (
    <section
      id="about"
      className='py-3 px-[7vw] md:px-[7vw] lg:px-[20vw] mt-10 md:mt-20 font-sans lg:mt-32'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight'>
          Hey! I am
          </h1>
          <h2 className='text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight'>
            Suyog Gautam
          </h2>
          <h3 className='text-xl sm:text-2xl md:3xl font-semibold mb-3 text-[#09094a]'>
            <span className='text-white'>  
               I am a

            </span>
      <Typewriter
              words={[
                " Full Stack Developer",
                " Competitive Programmer",
                " Tech Enthusiast",
              ]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
              className="text-white inline-block ml-2"
            />
            <p className='text-gray-500 text-l md:text-xl left-10 mt-20 '>
              I am a passionate Full Stack Developer with expertise in React, Node.js, and MongoDB. I love building dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex problems and turning ideas into reality through code.
               </p>
          </h3>
        </div>
        </div>

    </section>
  )
}

export default About