import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isopen, setIsOpen] = useState(false);
  const [activesection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handlescroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);

  const handlemenuitemclick = (e) => {
    setActiveSection(e);
    setIsOpen(false);
  };

  const menuitems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
     ${
       isScrolled
         ? "bg-[#01143a] bg-opacity-80 backdrop-blur-md shadow-md"
         : "bg-transparent"
     }`}
    >
      <div className="text-white flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <span className="text-blue-900">&lt;</span>
          <span className="text-white">Suyog</span>
          <span className="text-blue-900">/</span>
          <span className="text-white">Gautam</span>
          <span className="text-blue-900">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 mr-6 text-gray-500">
          {menuitems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-blue-400 ${
                activesection === item.id ? "text-blue-400" : ""
              }`}
            >
              <button onClick={() => handlemenuitemclick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-4 text-2xl text-gray-500">
          <a
            href="https://github.com/suyogzz78"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithubSquare size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/suyog-gautam-273b40315/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin size={25} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isopen ? (
            <FiX
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <TfiMenu
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isopen && (
        <ul className="absolute top-16 left-0 w-full bg-[#0f172a] bg-opacity-90 backdrop-blur-md flex flex-col space-y-4 py-6 text-center text-gray-300">
          {menuitems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-blue-400 ${
                activesection === item.id ? "text-blue-400" : ""
              }`}
            >
              <button onClick={() => handlemenuitemclick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
          <div className="flex justify-center space-x-4 text-2xl mt-4">
            <a
              href="https://github.com/suyogzz78"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithubSquare size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/suyog-gautam-273b40315/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
