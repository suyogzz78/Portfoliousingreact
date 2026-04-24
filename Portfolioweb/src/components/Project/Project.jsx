import React from "react";
import { projects } from "../../constant";

function Project() {
  const [isModalOpen, setIsModalOpen] = React.useState(null);

  const handleopenmodal = (project) => {
    setIsModalOpen(project);
    document.body.style.overflow = "hidden";
  };

  const handleclosedmodal = () => {
    setIsModalOpen(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="project"
      className="py-12 pb-10 px-[12vw] lg:px-[20vw] w-full bg-gradient-to-r from-[#000428] via-[#0f172a] to-[#1e3a8a]"
    >
      <div className="text-center mb-10">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          PROJECTS
        </div>
        <div className="w-28 h-1 bg-blue-900 mx-auto mt-3 rounded-lg"></div>
        <div className="mt-3 text-gray-500 font-semibold text-lg">
          These are some of my projects
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full h-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleopenmodal(project)}
            className="border-blue-500 bg-slate-900 cursor-pointer backdrop-blur-md shadow-2xl overflow-hidden border-2 hover:shadow-blue-700 hover:translate-y-2 transition-transform duration-300 rounded-lg w-full h-full"
          >
            <div className="p-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <div className="p-5">
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 pt-5 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="mt-4">
                {project.tags.map((tags, index) => (
                  <div
                    key={index}
                    className="inline-block bg-blue-900 text-white text-xs px-3 py-1 rounded-full mr-2 mb-3"
                  >
                    {tags}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <>
          {/* Backdrop with smooth animation */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-300"
            onClick={handleclosedmodal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative border border-slate-700/50 animate-in zoom-in-95 duration-300">
              
              {/* Close Button */}
              <button
                onClick={handleclosedmodal}
                className="absolute top-6 right-6 z-10 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-red-500/50 hover:scale-110"
              >
                ✕
              </button>

              {/* Image Container */}
              <div className="relative w-full h-64 md:h-80 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden group">
                <img
                  src={isModalOpen.image}
                  alt={isModalOpen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="p-8 space-y-6">
                
                {/* Title and Description */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {isModalOpen.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    {isModalOpen.description}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-widest">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {isModalOpen.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-4 py-2 rounded-full font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-200 cursor-default"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700"></div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <a
                    href={isModalOpen.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-gray-700/50 hover:translate-y-[-2px] group"
                  >
                    <span className="mr-2">📁</span>
                    Source Code
                  </a>

                  {isModalOpen.webapp &&
                  <a
                    href={isModalOpen.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 hover:translate-y-[-2px] group"
                  >
                    <span className="mr-2">🚀</span>
                    Live Demo
                  </a>

}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Project;
