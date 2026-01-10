import React from "react";
import { projects } from "../../constant";
function Project() {
  return (
    <section
      id="project"
      className="py-12 pb-10 px:[12vw] lg:px-[20vw]  w-full bg-gradient-to-r from-[#000428] via-[#0f172a] to-[#1e3a8a]"
    >
      <div className="text-center mb-10">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          PROJECTS
        </div>
        <div className="w-28 h-1 bg-blue-900 mx-auto mt-3 rounded-lg"></div>
        <div className="mt-3 text-gray-500 font-semibold text-lg ">
          These are some of my projects
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full h-auto ">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" border-purple-500 bg-slate-900 cursor-pointer backdrop-blur-md shadow-2xl overflow-hidden border-2 hover:shadow-purple-600 hover:translate-y-2 transition-transform duration-300 rounded-lg w-full h-full"
          >
            <div className="p-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"s
              />
            </div>
            <div className="p-5">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 pt-5 line-clamp-3">{project.description}</p>
              </div>
              <div className="mt-4">
                {project.tags.map((tags, index) => (
                  <div className="inline-block bg-purple-900 text-white text-xs px-3 py-1 rounded-full mr-2 mb-3">
                    {tags}
                  </div>
                ))}
               

                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
