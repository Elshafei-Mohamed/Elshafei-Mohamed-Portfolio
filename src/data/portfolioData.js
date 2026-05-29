import myImage from "../assets/My-Image/myphoto3.webp";
import Apexa from "../assets/projects/Apexa.webp";
import Grill_House from "../assets/projects/Grill_House.webp";
import Hyundai_Coupe from "../assets/projects/Hyundai_Coupe.webp";
import Tuscani from "../assets/projects/Tuscani.webp";
import Muscle_Factory from "../assets/projects/Muscle_Factory.webp";
import Old_Portfolio_v1 from "../assets/projects/Old_Portfolio.webp";
import Old_Portfolio_v2 from "../assets/projects/Old_Portfolio_v2.webp";
import pawstore from "../assets/projects/pawstore.webp";
import To_Do_List from "../assets/projects/To_Do_List.webp";
import Website_Bilder from "../assets/projects/Website_Bilder.webp";
import E_Commerce from "../assets/projects/E_Commerce.webp";
import Company_Dashboard from "../assets/projects/Company_Dashboard.webp";
import Weather_Dashboard from "../assets/projects/Weather_Dashboard.webp";
import Prayer_Time from "../assets/projects/Prayer_Time.webp";
import Skill_Mirror_App from "../assets/projects/skill-mirror-app.webp";
import EduScan from "../assets/projects/EduScan.webp";
// import My_CV from "../assets/Elshafei_Mohamed_CV.pdf"; // PDF pending — download button disabled for now

// Icon imports (from lucide-react — replaces heavy react-icons)
import {
  Code2,
  FileCode,
  FileJson,
  Atom,
  Globe,
  Server,
  Database,
  Palette,
  GitBranch,
  PenTool,
  Container,
  Terminal,
  Code,
  Image,
  Layers,
  Pen,
  Droplet,
  Zap,
  Share2,
  Github,
  Linkedin,
  MessageCircle,
  Instagram,
  Route,
  FileType,
} from "lucide-react";

// Icon mapping (lucide-react equivalents)
export const iconComponents = {
  Code2,
  FileCode,
  FileJson,
  Atom,
  Globe,
  Server,
  Database,
  Palette,
  GitBranch,
  PenTool,
  Container,
  Terminal,
  Code,
  default: Code,
  Image,
  Layers,
  Pen,
  Droplet,
  Zap,
  Route,
  FileType,
  Share2,
};

// personalInfo
export const personalInfo = {
  name: "Elshafei Mohamed",
  title: "Full Stack Developer",
  tagline: "Building seamless digital experiences with modern technologies",
  bio: "I'm a passionate Full Stack Developer with expertise in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
  image: myImage,
  resume: "", // PDF pending
};

// Skills
export const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: FileCode },
  { name: "JavaScript", icon: FileJson },
  { name: "Bootstrap", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Sass", icon: Droplet },
  { name: "React", icon: Atom },
  { name: "Vite", icon: Zap },
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "TypeScript", icon: FileCode },
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
    featured: true,
    unCompleted: true,
    upgradable: true,
  },
  {
    id: 2,
    title: "Prayer Time",
    description:
      "A tool to generate beautiful portfolio websites with customizable themes.",
    image: Prayer_Time,
    technologies: ["React", "Vite", "Tailwind", "API", "Framer Motion"],
    featured: true,
    unCompleted: true,
    upgradable: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with forecasts, maps, and location-based alerts.",
    image: Weather_Dashboard,
    technologies: ["HTML", "CSS", "JS", "OpenWeather API"],
    featured: true,
    unCompleted: true,
    upgradable: true,
  },
  {
    id: 4,
    title: "Company Dashboard",
    description:
      "Analytics dashboard for social media management with insights and scheduling.",
    image: Company_Dashboard,
    technologies: ["React", "Node.js", "Redis", "D3.js"],
    featured: true,
    unCompleted: true,
    upgradable: true,
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
    upgradable: true,
  },
  {
    id: 6,
    title: "Website Builder",
    description:
      "A tool to generate beautiful portfolio websites with customizable themes.",
    image: Website_Bilder,
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "Framer Motion"],
    demo: "https://website-builder-pro-ten.vercel.app/",
    featured: true,
    unCompleted: true,
    upgradable: false,
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
    upgradable: false,
  },

  {
    id: 9,
    title: "Paw Store",
    description:
      "Premium pet supplies and toys to keep your furry friends happy.",
    image: pawstore,
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/Elshafei-Mohamed/Pawstore",
    demo: "https://pawstore-coral.vercel.app/",
    featured: false,
    unCompleted: false,
    upgradable: false,
  },

  {
    id: 10,
    title: "My Old Portfolio V1",
    description:
      "An early-stage portfolio capturing my first steps into digital creation.",
    image: Old_Portfolio_v1,
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "JQuery"],
    github: "https://github.com/Elshafei-Mohamed/My-Portfolio",
    demo: "https://elshafeimohamedportfolio.vercel.app/",
    featured: true,
    unCompleted: false,
    upgradable: true,
  },
  {
    id: 11,
    title: "My Old Portfolio V2",
    description:
      "My second portfolio version reflecting growth, experiments, and design exploration",
    image: Old_Portfolio_v2,
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    demo: "https://mynewportfolio-sepia.vercel.app/",
    featured: true,
    unCompleted: false,
    upgradable: true,
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
    upgradable: true,
  },
  {
    id: 13,
    title: "Hyundai Coupe Guide V1",
    description:
      "A complete car guide explaining features, performance, pricing, and smart buying tips.",
    image: Tuscani,
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/Elshafei-Mohamed/Tuccani_2",
    demo: "https://tuccani-2.vercel.app/",
    featured: false,
    unCompleted: false,
    upgradable: false,
  },
  {
    id: 14,
    title: "Hyundai Coupe Guide V2",
    description:
      "A complete car guide explaining features, performance, pricing, and smart buying tips.",
    image: Hyundai_Coupe,
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    github: "https://github.com/Elshafei-Mohamed/Hyundai-Coupe",
    demo: "https://hyundai-coupe.vercel.app/",
    featured: true,
    unCompleted: false,
    upgradable: true,
  },
  {
    id: 15,
    title: "Skill Mirror App",
    description:
      "A simple tool that analyzes frontend code to find performance issues, bad practices, and AI-generated patterns.",
    image: Skill_Mirror_App,
    technologies: ["React", "Vite", "Tailwind", "Framer Motion", "Typescript"],
    github: "https://github.com/Elshafei-Mohamed/skill-mirror-app",
    demo: "https://skill-mirror-app.vercel.app",
    featured: true,
    unCompleted: true,
    upgradable: false,
  },
  {
    id: 16,
    title: "EduScan",
    description:
      "A smart platform that converts PDF exams (text-based or scanned) into interactive electronic tests with automatic grading and AI-powered explanations.It supports both Arabic and English and gives users full control to review extracted content before starting the exam, ensuring accuracy and trust.",
    image: EduScan,
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "Framer Motion",
      "API",
      "OpenRouter",
      "Typescript",
    ],
    demo: "https://eduscan.netlify.app",
    featured: true,
    unCompleted: false,
    upgradable: true,
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
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/Elshafei-Mohamed",
      icon: Linkedin,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/qr/GOFC26QFS4QJH1",
      icon: MessageCircle,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/el_shafei_mohamed/#",
      icon: Instagram,
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
