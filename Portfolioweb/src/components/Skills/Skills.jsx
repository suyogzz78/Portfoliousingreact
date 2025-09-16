import React from 'react'
import { SkillsInfo } from '../../constant'

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[20vw] mt-10 md:mt-20 
      bg-gradient-to-r from-[#000428] via-[#0f172a] to-[#1e3a8a] lg:mt-32">
      
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">SKILLS</h2>
        <div className="mt-4 w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
        <p className='mt-4 text-white'>These are the technologies I've worked with</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 
            rounded-lg shadow-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
            border border-gray-700"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700">
              {category.title}
            </h3>

            {/* Individual Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center text-center
                             py-2 px-2 bg-transparent border-2 border-gray-700 
                             rounded-lg hover:scale-105 transition-transform duration-300 min-h-[80px]"
                >
                  {/* Icon */}
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="w-8 h-8 mb-1 flex-shrink-0" 
                  />

                  {/* Skill Name */}
                  <span className="text-white text-xs sm:text-sm break-words leading-tight w-full">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
