// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="relative bg-[#070621] min-h-screen overflow-hidden">
  <BlurBlob position={{ top: '27%', left: '43%' }} size={{ width: '25%', height: '20%' }} />
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  <div className="relative pt-20 z-10">
    <Navbar />
    <About />
    <Skills />
    <Experience />  
    <Work />
    <Education />
    <Contact />
    <Footer />
  </div>
</div>

  );
};

export default App;
