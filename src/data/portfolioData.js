import myImage from "../assets/My-Image/myphoto3.webp";
import Apexa from "../assets/projects/Apexa.webp";
import Grill_House from "../assets/projects/Grill_House.webp";
import Hyundai_Coupe from "../assets/projects/Hyundai_Coupe.webp";
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

export const personalInfo = {
  name: "Elshafei Mohamed",
  title: "Full Stack Developer",
  location: "Al-Dakahlia, Egypt",
  tagline: "I build web products end to end. Designed, built, shipped.",
  bio: "I started out building interfaces and went deep on React and modern frontend work. Along the way I kept hitting the same wall: a polished UI alone does not make a product. So I moved toward building complete applications, including features, APIs, data, and AI integrations. That shift produced EduScan, an AI-powered exam platform, and Skill Mirror, a code-review tool. What drives me is taking an idea from rough concept to something people can actually open and use.",
  principles: [
    {
      title: "Ship, then polish",
      text: "Working software this week beats perfect software someday.",
    },
    {
      title: "Honest scope",
      text: "You will always know what is done, what is not, and what it costs.",
    },
    {
      title: "Products, not projects",
      text: "Success is measured by whether anyone uses it, not by screenshots.",
    },
  ],
  image: {
    src: myImage,
    alt: "Portrait of Elshafei Mohamed",
    width: 800,
    height: 1000,
  },
};

export const projects = [
  /* ── Featured ─────────────────────────────────────────────── */
  {
    id: "eduscan",
    showInHero: true,
    title: "EduScan",
    summary: "AI-powered exam platform",
    description:
      "Turns PDF exams, text-based or scanned, into interactive electronic tests with automatic grading and AI-generated explanations. Supports Arabic and English, and lets users review extracted content before starting so nothing is graded blindly.",
    image: {
      src: EduScan,
      alt: "EduScan interface converting a PDF exam into an interactive test",
      width: 1280,
      height: 720,
    },
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "OpenRouter API",
    ],
    demo: "https://eduscan.netlify.app",
    tier: "featured",
  },
  {
    id: "skill-mirror",
    showInHero: true,
    title: "Skill Mirror",
    summary: "Code-quality analyzer",
    description:
      "A review tool that analyzes frontend code for performance issues, bad practices, and AI-generated patterns. Built for developers who want honest feedback on their own work.",
    image: {
      src: Skill_Mirror_App,
      alt: "Skill Mirror app analyzing frontend code quality",
      width: 1280,
      height: 720,
    },
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    demo: "https://skill-mirror-app.vercel.app",
    tier: "featured",
  },
  {
    id: "website-builder",
    showInHero: false,
    title: "Website Builder",
    summary: "Portfolio generator",
    description:
      "A tool that generates portfolio websites with customizable themes, so anyone can publish a clean personal site without writing code.",
    image: {
      src: Website_Bilder,
      alt: "Website Builder theme customization interface",
      width: 1280,
      height: 720,
    },
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    demo: "https://website-builder-pro-ten.vercel.app/",
    tier: "featured",
  },
  {
    id: "apexa",
    showInHero: false,
    title: "Apexa",
    summary: "Blogging platform",
    description:
      "A blogging platform with markdown support, comments, and SEO-friendly page structure.",
    image: {
      src: Apexa,
      alt: "Apexa blog platform homepage",
      width: 1280,
      height: 720,
    },
    technologies: ["JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/Elshafei-Mohamed/Apexa",
    demo: "https://apexa-beta.vercel.app/",
    tier: "featured",
  },

  /* ── Future ─────────────────────────────────────────────────
     Reserved for upcoming .NET / Flutter / full-stack builds:

     {
       id: "dotnet-product",
       title: "My .NET Product",
       summary: "Full-stack SaaS",
       description: "...",
       image: { src: shot, alt: "...", width: 1280, height: 720 },
       technologies: ["React", "ASP.NET Core", "SQL Server"],
       demo: "https://...",
       tier: "future",
     },
  ----------------------------------------------------------- */

  /* ── Earlier ──────────────────────────────────────────────── */
  {
    id: "grill-house",
    showInHero: false,
    title: "Grill House Bakery",
    summary: "Bakery storefront",
    description:
      "A bakery platform with product browsing and a responsive storefront.",
    image: {
      src: Grill_House,
      alt: "Grill House Bakery storefront",
      width: 640,
      height: 360,
    },
    technologies: ["React", "Vite", "Tailwind CSS"],
    tier: "earlier",
  },
  {
    id: "e-commerce",
    showInHero: false,
    title: "E-Commerce Platform",
    summary: "In progress",
    description:
      "An online shopping concept exploring cart, checkout, and product UI.",
    image: {
      src: E_Commerce,
      alt: "E-commerce platform product page",
      width: 640,
      height: 360,
    },
    technologies: ["React", "Vite", "Tailwind CSS"],
    tier: "earlier",
  },
  {
    id: "company-dashboard",
    showInHero: false,
    title: "Company Dashboard",
    summary: "Analytics UI concept",
    description: "An analytics dashboard concept for social media management.",
    image: {
      src: Company_Dashboard,
      alt: "Company dashboard analytics view",
      width: 640,
      height: 360,
    },
    technologies: ["React", "Node.js"],
    tier: "earlier",
  },
  {
    id: "prayer-time",
    showInHero: true,
    title: "Prayer Time",
    summary: "Prayer-times app",
    description:
      "A prayer-times app with a clean interface, powered by live API data.",
    image: {
      src: Prayer_Time,
      alt: "Prayer Time app interface",
      width: 640,
      height: 360,
    },
    technologies: ["React", "Vite", "API"],
    tier: "earlier",
  },
  {
    id: "weather-dashboard",
    showInHero: true,
    title: "Weather Dashboard",
    summary: "Forecast app",
    description:
      "Current conditions, forecasts, and location search using the OpenWeather API.",
    image: {
      src: Weather_Dashboard,
      alt: "Weather dashboard forecast view",
      width: 640,
      height: 360,
    },
    technologies: ["JavaScript", "OpenWeather API"],
    tier: "earlier",
  },
  {
    id: "muscle-factory",
    showInHero: false,
    title: "Muscle Factory",
    summary: "Gym platform",
    description:
      "A gym platform helping users browse programs and track fitness goals.",
    image: {
      src: Muscle_Factory,
      alt: "Muscle Factory gym platform",
      width: 640,
      height: 360,
    },
    technologies: ["JavaScript", "Bootstrap"],
    github: "https://github.com/Elshafei-Mohamed/Muscle-Factory",
    demo: "https://muscle-factory-sand.vercel.app/",
    tier: "earlier",
  },
  {
    id: "paw-store",
    showInHero: false,
    title: "Paw Store",
    summary: "Pet supplies storefront",
    description: "An e-commerce style storefront for pet supplies and toys.",
    image: {
      src: pawstore,
      alt: "Paw Store pet supplies storefront",
      width: 640,
      height: 360,
    },
    technologies: ["JavaScript"],
    github: "https://github.com/Elshafei-Mohamed/Pawstore",
    demo: "https://pawstore-coral.vercel.app/",
    tier: "earlier",
  },
  {
    id: "task-manager",
    showInHero: false,
    title: "Task Management App",
    summary: "Productivity tool",
    description:
      "A task manager for organizing daily work with local persistence.",
    image: {
      src: To_Do_List,
      alt: "Task management app interface",
      width: 640,
      height: 360,
    },
    technologies: ["JavaScript"],
    github: "https://github.com/Elshafei-Mohamed/To-Do-List",
    demo: "https://to-do-list-orcin-zeta.vercel.app/",
    tier: "earlier",
  },
  {
    id: "hyundai-coupe",
    showInHero: false,
    title: "Hyundai Coupe Guide",
    summary: "Car guide site",
    description:
      "Features, performance, and specs of the Hyundai Coupe in an easy-to-browse format.",
    image: {
      src: Hyundai_Coupe,
      alt: "Hyundai Coupe guide website",
      width: 640,
      height: 360,
    },
    technologies: ["JavaScript", "Bootstrap"],
    github: "https://github.com/Elshafei-Mohamed/Hyundai-Coupe",
    demo: "https://hyundai-coupe.vercel.app/",
    tier: "earlier",
  },
  {
    id: "portfolio-v2",
    showInHero: true,
    title: "Portfolio V2",
    summary: "Previous portfolio",
    description:
      "The second iteration of my portfolio, exploring React and motion design.",
    image: {
      src: Old_Portfolio_v2,
      alt: "Second portfolio version",
      width: 640,
      height: 360,
    },
    technologies: ["React", "Tailwind CSS"],
    demo: "https://mynewportfolio-sepia.vercel.app/",
    // tier: "earlier",
  },
  {
    id: "portfolio-v1",
    showInHero: false,
    title: "Portfolio V1",
    summary: "First portfolio",
    description: "Where the journey into web development started.",
    image: {
      src: Old_Portfolio_v1,
      alt: "First portfolio version",
      width: 640,
      height: 360,
    },
    technologies: ["HTML", "CSS", "jQuery"],
    demo: "https://elshafeimohamedportfolio.vercel.app/",
    tier: "earlier",
  },
];

export const featuredProjects = projects.filter((p) => p.tier === "featured");
export const moreProjects = projects.filter((p) => p.tier === "more");
export const futureProjects = projects.filter((p) => p.tier === "future");
export const earlierProjects = projects.filter((p) => p.tier === "earlier");
export const heroProjects = projects.filter((p) => p.showInHero);

export const skillLayers = [
  {
    label: "Interface",
    note: "What users see and touch",
    items: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    label: "Application",
    note: "Logic, APIs, server behavior",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    label: "Data",
    note: "Storage, queries, modeling",
    items: ["MongoDB", "MySQL"],
  },
  {
    label: "Engineering",
    note: "Build tooling, workflow, shipping",
    items: ["Git", "Vite", "Framer Motion", "Vercel / Netlify"],
  },
];

/* ── Contact ──────────────────────────────────────────────────── */
export const contactInfo = {
  email: "elshafeibusniss2005@gmail.com",
  whatsapp: "https://wa.me/qr/GOFC26QFS4QJH1",
  location: "Al-Dakahlia, Egypt",
  availability: "Available for freelance projects",
};
