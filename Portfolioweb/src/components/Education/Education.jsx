import React from "react";
import { education } from "../../constant";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[12vw] lg:px-[16vw] bg-gradient-rainbow"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-32 h-1 bg-purple-600 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4">My educational background</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-20`}
          >
            {/* Timeline dot */}
            
            <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-purple-600 w-12 h-12 rounded-full z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div className="w-full md:w-[45%] bg-gray-900 p-6 rounded-2xl shadow-lg border border-white ml-8 mr-8 hover:scale-105 transition-transform hover:border-blue-700 hover:shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-20 h-14 bg-white rounded overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
