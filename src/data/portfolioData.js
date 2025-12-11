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


// personalInfo
export const personalInfo = {
  name: "Elshafei Mohamed",
  title: "Full Stack Developer",
  tagline: "Building seamless digital experiences with modern technologies",
  bio: "I'm a passionate Full Stack Developer with expertise in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.",
  image: myImage,
  resume: "/resume.pdf",
};

// Skills
export const skills = [
  { name: "HTML", icon: "ImHtmlFive2" },
  { name: "CSS", icon: "Palette" },
  { name: "JavaScript", icon: "FileCode" },
  { name: "Bootstrap", icon: "Layout" },
  { name: "Tailwind CSS", icon: "Paintbrush" },
  { name: "Sass", icon: "Droplet" },
  { name: "React", icon: "Atom" },
  { name: "Vite", icon: "Zap" },
  { name: "Node.js", icon: "Server" },
  { name: "Express", icon: "Route" },
  { name: "MongoDB", icon: "Database" },
  { name: "Git", icon: "GitBranch" },
  { name: "TypeScript", icon: "FileType" },
  // { name: "Docker", icon: "Container" },
  // { name: "REST API", icon: "Globe" },
  // { name: "GraphQL", icon: "Network" },
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
    // github: "https://github.com/yourusername/project1",
    // demo: "https://demo-project1.com",
    featured: true,
    unCompleted: true,
  },
  {
    id: 2,
    title: "Prayer Time",
    description:
      "A tool to generate beautiful portfolio websites with customizable themes.",
    image: Prayer_Time,
    technologies: ["React", "Vite", "Tailwind", "API", "Framer Motion"],
    // github: "https://github.com/yourusername/project6",
    // demo: "https://demo-project6.com",
    featured: true,
    unCompleted: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with forecasts, maps, and location-based alerts.",
    image: Weather_Dashboard,
    technologies: ["HTML", "CSS", "JS", "OpenWeather API"],
    // github: "https://github.com/yourusername/project3",
    // demo: "https://demo-project3.com",
    featured: true,
    unCompleted: true,
  },
  {
    id: 4,
    title: "Company Dashboard",
    description:
      "Analytics dashboard for social media management with insights and scheduling.",
    image: Company_Dashboard,
    technologies: ["React", "Node.js", "Redis", "D3.js"],
    // github: "https://github.com/yourusername/project5",
    // demo: "https://demo-project5.com",
    featured: true,
    unCompleted: true,
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support, comments, and SEO optimization.",
    image: Apexa,
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "My SQL"],
    // github: "https://github.com/yourusername/project4",
    // demo: "https://demo-project4.com",
    featured: false,
    unCompleted: true,
  },
  {
    id: 6,
    title: "Website Builder",
    description:
      "A tool to generate beautiful portfolio websites with customizable themes.",
    image: Website_Bilder,
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "Framer Motion"],
    // github: "https://github.com/yourusername/project6",
    // demo: "https://demo-project6.com",
    featured: false,
    unCompleted: true,
  },
  {
    id: 7,
    title: "Grill House Bakery",
    description:
      "A smart platform connecting bakeries with customers for fresh, daily delights.",
    image: Grill_House,
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/project6",
    demo: "https://demo-project6.com",
    featured: false,
    unCompleted: true,
  },

  {
    id: 8,
    title: "Muscle Factory",
    description:
      "A smart gym platform helping users track progress and achieve fitness goals.",
    image: Muscle_Factory,
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    // github: "https://github.com/yourusername/project6",
    // demo: "https://demo-project6.com",
    featured: false,
    unCompleted: true,
  },

  {
    id: 9,
    title: "Paw Store",
    description:
      "Premium pet supplies and toys to keep your furry freinds happy.",
    image: pawstore,
    technologies: ["HTML", "CSS", "JS"],
    // github: "https://github.com/yourusername/project6",
    // demo: "https://demo-project6.com",
    featured: false,
    unCompleted: true,
  },

  {
    id: 10,
    title: "My Old Portfolio V1",
    description:
      "An early-stage portfolio capturing my frist steps into digital creation.",
    image: Old_Portfolio_v1,
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "JQuery"],
    // github: "https://github.com/yourusername/project6",
    // demo: "https://demo-project6.com",
    featured: false,
    unCompleted: true,
  },
  {
    id: 11,
    title: "My Old Portfolio V2",
    description:
      "My seconf portfolio version reflecting groeth, exepriments, and design exploration",
    image: Old_Portfolio_v2,
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    // github: "https://github.com/yourusername/project6",
    // demo: "https://demo-project6.com",
    featured: true,
    unCompleted: true,
  },
  {
    id: 12,
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team collaboration features.",
    image: To_Do_List,
    technologies: ["HTML", "CSS", "JS"],
    // github: "https://github.com/yourusername/project2",
    // demo: "https://demo-project2.com",
    featured: false,
    unCompleted: true,
  },
  {
    id: 13,
    title: "Hyundai Coupe Guide V1",
    description:
      "The 2Th Vertion of complete car guide expalning features,performance, pricing, and smart buying tips.",
    image: Tuscani,
    technologies: ["HTML", "CSS", "JS"],
    // github: "https://github.com/yourusername/project6",
    // demo: "https://demo-project6.com",
    featured: false,
    unCompleted: true,
  },
  {
    id: 14,
    title: "Hyundai Coupe Guide V2",
    description:
      "The 2Th Vertion of complete car guide expalning features,performance, pricing, and smart buying tips.",
    image: Hyundai_Coupe,
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    // github: "https://github.com/yourusername/project6",
    // demo: "https://demo-project6.com",
    featured: true,
    unCompleted: true,
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
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/Elshafei-Mohamed",
      icon: "Linkedin",
    },
    {
      name: "Whatsapp",
      url: "https://twitter.com/yourusername",
      icon: "Whatsapp",
    },
    // {
    //   name: "Email",
    //   url: "mailto:elshafeibusniss2005.com",
    //   icon: "Mail",
    // },
  ],
};

// sections
export const cubeFaces = [
  { name: "About", color: "#0ea5e9", section: "about" },
  { name: "Projects", color: "#8b5cf6", section: "projects" },
  { name: "Skills", color: "#00d9ff", section: "skills" },
  { name: "Contact", color: "#a78bfa", section: "contact" },
];
