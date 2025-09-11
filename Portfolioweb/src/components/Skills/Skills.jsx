import React from 'react'
import { SkillsInfo } from '../../constant'

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[20vw] mt-10 md:mt-20 
      bg-gradient-to-r from-[#000428] via-[#0f172a] to-[#1e3a8a] lg:mt-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">SKILLS</h2>
        <div className="mt-4 w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
        <p className='mt-4 text-white'>These are the technologies I've worked with</p>
      </div>

      <div className='flex flex-wrap justify-between gap-1 lg:gap-4 py-10'>
        {SkillsInfo.map((category)=> (<div
        key={category.title}
        className='bg-gray-900 backdrop-blur-md '>

          </div>))}
        </div>
    </section>
  )
}

export default Skills
