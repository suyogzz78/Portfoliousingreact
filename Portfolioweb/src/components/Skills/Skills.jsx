import React from 'react';
import { SkillsInfo } from '../../constant';
import Tilt from 'react-parallax-tilt';

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] lg:px-[20vw] mt-10 md:mt-20
                 bg-gradient-to-r from-[#000428] via-[#0f172a] to-[#1e3a8a]">

      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">SKILLS</h2>
        <div className="mt-4 w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
        <p className="mt-4 text-white">These are the technologies I've worked with</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 py-6 rounded-lg shadow-lg border border-gray-700"
          >
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-700">
              {category.title}
            </h3>

            {/* Tilt Container */}
            <Tilt
              className="w-full border-4 border-blue-700 rounded-lg p-4"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2 
                               px-3 py-2 bg-transparent border-2 border-gray-700 
                               rounded-lg hover:scale-105 transition-transform duration-300
                               w-full flex-1"
                  >
                    {/* Icon */}
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className="w-6 h-6 flex-shrink-0" 
                    />
                    //skills 
                    {/* Skill Name */}
                    <span className="text-white text-xs sm:text-sm break-words text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
