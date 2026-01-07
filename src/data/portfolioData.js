import myImage from "../assets/My-Image/myphoto3.jpg";
import Apexa from "../assets/projects/Apexa.jpg";
import Grill_House from "../assets/projects/Grill_House.jpg";
import Hyundai_Coupe from "../assets/projects/Hyundai_Coupe.png";
import Tuscani from "../assets/projects/Tuscani.jpg";
import Muscle_Factory from "../assets/projects/Muscle_Factory.jpg";
import Old_Portfolio_v1 from "../assets/projects/Old_Portfolio.png";
import Old_Portfolio_v2 from "../assets/projects/Old_Portfolio_v2.png";
import pawstore from "../assets/projects/pawstore.jpg";
import To_Do_List from "../assets/projects/To_Do_List.jpg";
import Website_Bilder from "../assets/projects/Website_Bilder.png";
import E_Commerce from "../assets/projects/E_Commerce.png";
import Company_Dashboard from "../assets/projects/Company_Dashboard.png";
import Weather_Dashboard from "../assets/projects/Weather_Dashboard.jpg";
import Prayer_Time from "../assets/projects/Prayer_Time.jpg";
import Skill_Mirror_App from "../assets/projects/skill-mirror-app.png";
import EduScan from "../assets/projects/EduScan.png";
import My_CV from "../assets/Elshafei_Mohamed_CV.pdf";

// Icon imports
import { ImHtmlFive2 } from "react-icons/im";
import {
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaPython,
  FaCode,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FiImage,
  FiCode,
  FiLayers,
  FiEdit,
  FiDroplet,
  FiZap,
  FiServer,
  FiDatabase,
  FiGitBranch,
  FiFileText,
  FiBox,
  FiGlobe,
  FiShare2,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

// Icon mapping
export const iconComponents = {
  ImHtmlFive2,
  FaCss3Alt,
  SiJavascript,
  FaReact,
  SiNextdotjs,
  FaNodeJs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  FaGitAlt,
  FaFigma,
  FaDocker,
  SiTypescript,
  FaPython,
  default: FaCode,
  Palette: FiImage,
  FileCode: FiCode,
  Layout: FiLayers,
  Paintbrush: FiEdit,
  Droplet: FiDroplet,
  Atom: FiZap,
  Zap: FiZap,
  Server: FiServer,
  Route: FiGitBranch,
  Database: FiDatabase,
  GitBranch: FiGitBranch,
  FileType: FiFileText,
  Container: FiBox,
  Globe: FiGlobe,
  Network: FiShare2,
};

// personalInfo
export const personalInfo = {
  name: "Elshafei Mohamed",
  title: "Full Stack Developer",
  tagline: "Building seamless digital experiences with modern technologies",
  bio: "I'm a passionate Full Stack Developer with expertise in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
  image: myImage,
  resume: My_CV,
};

// Skills
export const skills = [
  { name: "HTML", icon: ImHtmlFive2 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Bootstrap", icon: FiLayers },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Sass", icon: FiDroplet },
  { name: "React", icon: FaReact },
  { name: "Vite", icon: FiZap },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: FiServer },
  { name: "MongoDB", icon: FiDatabase },
  { name: "Git", icon: FaGitAlt },
  { name: "TypeScript", icon: SiTypescript },
  // { name: "Docker", icon: FaDocker },
  // { name: "REST API", icon: FiGlobe },
  // { name: "GraphQL", icon: FiShare2 },
];

// Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart, payment integration, and admin dashboard.",
    image: E_Commerce,
    technologies: [
      "React",
      "Node.js",
      "Vite",
      "API",
      "Tailwind CSS",
      "Framer Motion",
      "AOS",
    ],
    // github: "https://github.com/Elshafei-Mohamed/project1",
    // demo: "https://demo-project1.com",
    featured: true,
    unCompleted: true,
    Upgradable: true,


  },
  {
    id: 2,
    title: "Prayer Time",
    description:
      "A tool to generate beautiful portfolio websites with customizable themes.",
    image: Prayer_Time,
    technologies: ["React", "Vite", "Tailwind", "API", "Framer Motion"],
    // github: "https://github.com/Elshafei-Mohamed/project6",
    // demo: "https://demo-project6.com",
    featured: true,
    unCompleted: true,
    Upgradable: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with forecasts, maps, and location-based alerts.",
    image: Weather_Dashboard,
    technologies: ["HTML", "CSS", "JS", "OpenWeather API"],
    // github: "https://github.com/Elshafei-Mohamed/project3",
    // demo: "https://demo-project3.com",
    featured: true,
    unCompleted: true,
    Upgradable: true,
  },
  {
    id: 4,
    title: "Company Dashboard",
    description:
      "Analytics dashboard for social media management with insights and scheduling.",
    image: Company_Dashboard,
    technologies: ["React", "Node.js", "Redis", "D3.js"],
    // github: "https://github.com/Elshafei-Mohamed/project5",
    // demo: "https://demo-project5.com",
    featured: true,
    unCompleted: true,
    Upgradable: true,
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support, comments, and SEO optimization.",
    image: Apexa,
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "My SQL"],
    github: "https://github.com/Elshafei-Mohamed/Apexa",
    demo: "https://apexa-beta.vercel.app/",
   featured: true,
    unCompleted: false,
    Upgradable: true,
  },
  {
    id: 6,
    title: "Website Builder",
    description:
      "A tool to generate beautiful portfolio websites with customizable themes.",
    image: Website_Bilder,
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "Framer Motion"],
    // github: "https://github.com/Elshafei-Mohamed/Website-Builder-Pro",
    demo: "https://website-builder-pro-ten.vercel.app/",
    featured: true,
    unCompleted: true,
    Upgradable: false,
  },
  {
    id: 7,
    title: "Grill House Bakery",
    description:
      "A smart platform connecting bakeries with customers for fresh, daily delights.",
    image: Grill_House,
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/Elshafei-Mohamed/project6",
    demo: "https://demo-project6.com",
    featured: false,
    unCompleted: false,
    upgradable: false,
  },

  {
    id: 8,
    title: "Muscle Factory",
    description:
      "A smart gym platform helping users track progress and achieve fitness goals.",
    image: Muscle_Factory,
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    github: "https://github.com/Elshafei-Mohamed/Muscle-Factory",
    demo: "https://muscle-factory-sand.vercel.app/",
   featured: false,
    unCompleted: false,
    Upgradable: false,
  },

  {
    id: 9,
    title: "Paw Store",
    description:
      "Premium pet supplies and toys to keep your furry freinds happy.",
    image: pawstore,
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/Elshafei-Mohamed/Pawstore",
    demo: "https://pawstore-coral.vercel.app/",
    featured: false,
    unCompleted: false,
    Upgradable: false,
  },

  {
    id: 10,
    title: "My Old Portfolio V1",
    description:
      "An early-stage portfolio capturing my frist steps into digital creation.",
    image: Old_Portfolio_v1,
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "JQuery"],
    github: "https://github.com/Elshafei-Mohamed/My-Portifolio",
    demo: "https://elshafeimohamedportfolio.vercel.app/",
    featured: true,
    unCompleted: false,
    Upgradable: true,
  },
  {
    id: 11,
    title: "My Old Portfolio V2",
    description:
      "My seconf portfolio version reflecting groeth, exepriments, and design exploration",
    image: Old_Portfolio_v2,
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    // github: "https://github.com/Elshafei-Mohamed/My_New_Portfolio",
    demo: "https://mynewportfolio-sepia.vercel.app/",
   featured: true,
    unCompleted: false,
    Upgradable: true,
  },
  {
    id: 12,
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team collaboration features.",
    image: To_Do_List,
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/Elshafei-Mohamed/To-Do-List",
    demo: "https://to-do-list-orcin-zeta.vercel.app/",
    featured: false,
    unCompleted: true,
    Upgradable: true,
  },
  {
    id: 13,
    title: "Hyundai Coupe Guide V1",
    description:
      "The 2Th Vertion of complete car guide expalning features,performance, pricing, and smart buying tips.",
    image: Tuscani,
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/Elshafei-Mohamed/Tuccani_2",
    demo: "https://tuccani-2.vercel.app/",
    featured: false,
    unCompleted: false,
    Upgradable: false,
  },
  {
    id: 14,
    title: "Hyundai Coupe Guide V2",
    description:
      "The 2Th Vertion of complete car guide expalning features,performance, pricing, and smart buying tips.",
    image: Hyundai_Coupe,
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    github: "https://github.com/Elshafei-Mohamed/Hyundai-Coupe",
    demo: "https://hyundai-coupe.vercel.app/",
    featured: true,
    unCompleted: false,
    Upgradable: true,
  },
  {
    id: 15,
    title: "Skill Mirro App",
    description:
      "A simple tool that analyzes frontend code to find performance issues, bad practices, and AI-generated patterns.",
    image: Skill_Mirror_App,
    technologies: ["React", "Vite", "Tailwind", "Framer Motion", "Typescript"],
    github: "https://github.com/Elshafei-Mohamed/skill-mirror-app",
    demo: "https://skill-mirror-app.vercel.app",
    featured: true,
    unCompleted: true,
    Upgradable: false,
  },
  {
    id: 1,
    title: "EduScan",
    description:
      "A smart platform that converts PDF exams (text-based or scanned) into interactive electronic tests with automatic grading and AI-powered explanations.It supports both Arabic and English and gives users full control to review extracted content before starting the exam, ensuring accuracy and trust.",
    image: EduScan,
    technologies: ["React", "Vite", "Tailwind", "Framer Motion", "API", "OpenRouter", "Typescript"],
    // github: "https://github.com/Elshafei-Mohamed/skill-mirror-app",
    demo: "https://eduscan.netlify.app",
    featured: true,
    unCompleted: false,
    Upgradable: false,
  },
];

// ContactInfo
export const contactInfo = {
  email: "elshafeibusniss2005@gmail.com",
  phone: "+20 155 440 7038",
  location: "Al-Dakahlia , EG",
  availability: "Available for freelance projects",

  social: [
    {
      name: "GitHub",
      url: "https://github.com/Elshafei-Mohamed",
      icon: FiGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/Elshafei-Mohamed",
      icon: FiLinkedin,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/qr/GOFC26QFS4QJH1",
      icon: FaWhatsapp,
    },

    {
      name: "Instagram",
      url: "https://www.instagram.com/el_shafei_mohamed/#",
      icon: FaInstagram,
    },
  ],
};

// sections
export const cubeFaces = [
  { name: "About", color: "#0ea5e9", section: "about" },
  { name: "Projects", color: "#8b5cf6", section: "projects" },
  { name: "Skills", color: "#00d9ff", section: "skills" },
  { name: "Contact", color: "#a78bfa", section: "contact" },
];



