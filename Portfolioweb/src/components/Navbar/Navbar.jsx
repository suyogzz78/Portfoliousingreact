import React,{useState}from "react";
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isopen, setIsOpen] = useState(false);
  const [activesection, setActiveSection] = useState("");
  const handlemenuitemclick = (e) => {
    setActiveSection(e);
    setIsOpen(false);
  }
  const menuitems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  
  ];
  return (
    <nav className="bg-transparent w-full fixed top-0 left-0 z-50">
      <div className="text-white flex justify-between items-center ">
        <div className="text-2xl font-bold cursor-pointer">
          <span className="text-blue-900">&lt;</span>
          <span className="text-white">Suyog</span>
          <span className="text-blue-900">/</span>
          <span className="text-white">Gautam</span>
          <span className="text-blue-900">&gt;</span>
        </div>
        <ul className=" md:flex space-x-6 mr-6 text-gray-500">
        {menuitems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer hover:text-blue-400 ${activesection === item.id ? 'text-blue-400' : ''}`}
          >
            <button onClick={()=>handlemenuitemclick(item.id)} >
              {item.label}
            </button>
          </li>
        ))}
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;
