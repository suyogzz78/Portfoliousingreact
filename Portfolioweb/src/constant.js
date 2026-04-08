// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Project Section Logo's ✅ FIXED PATHS
import batlogo from './assets/projects/bat.png';
import teacherLogo from './assets/projects/teachers.png';
import pinterestLogo from './assets/projects/pinterest.png';
import weatherLogo from './assets/projects/weatherforecast.png';
import taxLogo from './assets/projects/tax.png';


// ================= SKILLS =================
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];


// ================= EDUCATION =================
export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8N27U7GhzJUuqGgvp-lB7_h9-GoLnQ1o7w&s",
    school: "Vedas College",
    date: "2023 - Present",
    grade: "Running",
    desc: "Currently in 7th semester studying Computer Science and Information Technology, focusing on programming, software development, databases, and web technologies.",
    degree: "Bachelor's Degree (Ongoing)",
  },
  {
    id: 1,
    img: "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/387845814_289256790717103_5299395123040265222_n.jpg",
    school: "Nightingale College",
    date: "2077 - 2079 (B.S.)",
    grade: "Completed",
    desc: "Completed +2 with strong academic foundation and analytical skills development.",
    degree: "+2 (Higher Secondary Education)",
  },
  {
    id: 2,
    img: "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-1/387845814_289256790717103_5299395123040265222_n.jpg",
    school: "Nightingale School",
    date: "2076 (B.S.)",
    grade: "Completed",
    desc: "Completed SLC and built strong academic discipline and learning foundation.",
    degree: "SLC",
  },
];


// ================= PROJECTS =================
export const projects = [
  {
    id: 0,
    title: "Tax Ease",
    description:
      "A web application designed to simplify tax calculations and decision-making. It helps users easily compute taxes and supports better financial decisions.",
    image: taxLogo,
    tags: ["JavaScript", "React JS", "UI/UX"],
    github: "https://github.com/InterAsianHack025/Codeions",
    
  },
  {
    id: 1,
    title: "E-Commerce Website (MERN)",
    description:
      "A full-stack e-commerce application using MERN stack with authentication, product management, cart system, and order processing.",
    image: batlogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/suyogzz78/EcommercesiteusingMERN",
    
  },
  {
    id: 2,
    title: "Teacher Website (React)",
    description:
      "A React-based academic platform to manage courses and educational content.",
    image: teacherLogo,
    tags: ["React JS", "HTML", "CSS"],
    github: "https://github.com/suyogzz78/Teacherwebsiteusingreact",
    webapp: "",
  },
  {
    id: 3,
    title: "Pinterest Clone",
    description:
      "A Pinterest-inspired app for browsing and saving images with responsive UI.",
    image: pinterestLogo,
    tags: ["React JS", "JavaScript", "CSS"],
    github: "https://github.com/suyogzz78/pinterest_clone",
    webapp: "",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description:
      "A weather app that fetches real-time data using APIs.",
    image: weatherLogo,
    tags: ["JavaScript", "API", "HTML", "CSS"],
    github: "https://github.com/suyogzz78/Weatherforecast",
    webapp: "",
  },
];