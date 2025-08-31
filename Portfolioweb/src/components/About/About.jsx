import React from 'react'

import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';

import profile1 from '../../assets/profile1.jpg'
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
          <h3 className='text-xl sm:text-2xl md:3xl font-semibold mb-3 text-[#08083f]'>
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
          <a 
          href='https://drive.google.com/file/d/1ZVYJHk3jv7mX4X1F8F2z5K6Z8Y9X2A3B/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
              style={{
                background: 'linear-gradient(90deg, #87CEEB, [#09094a])',
                boxShadow: '0 0 2px #87CEEB, 0 0 2px #87CEEB, 0 0 40px #87CEEB',
              }}
         >Download CV</a>
        </div>
        <div className='md:w-1/2 flex justify-center md:justify-end'>
       <div className='md:w-1/2 flex justify-center md:justify-end'>
        <Tilt
          className='w-48 h-48 border-5 rounded-full md:h-[30rem] md:w-[30rem] sm:w-64 sm:h-64 border-blue-700'  
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          perspective={1000}
          scale={1.1}
          transitionSpeed={1000}
          gyroscope={true}
        >  
          <img 
            src={profile1}
            alt='Suyog Gautam'
            className='w-full h-full object-cover  rounded-full drop-shadow-[0_10px_20px_rgba(65,105,225,0.5)]'
          />
        </Tilt>
      </div>
        
        </div>

        </div>

    </section>
  )
}

export default About