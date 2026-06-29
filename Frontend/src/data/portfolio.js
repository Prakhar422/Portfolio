import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiRender,
  SiTailwindcss,
  SiVercel,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import prepSphere from "../assets/Project/prepSphere.png";
import careerConnect from "../assets/Project/careerConnect.png";
import tripManagement from "../assets/Project/tripManagement.png";
import aiChatbot from "../assets/Project/aiChatbot.png";
import libraryManagement from "../assets/Project/libraryManagement.png";
import currencyConverter from "../assets/Project/currencyConvertor.png";

export const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "10+", label: "Technologies Learned" },
  { value: "1 mo", label: "Internship Experience" },
  { value: "7.2", label: "Current CGPA" },
];

export const skills = [
  { name: "C", icon: SiC, color: "from-blue-300 to-blue-600" },
  { name: "C++", icon: SiCplusplus, color: "from-indigo-300 to-blue-700" },
  { name: "JavaScript", icon: SiJavascript, color: "from-yellow-200 to-amber-500" },
  { name: "HTML", icon: FaHtml5, color: "from-orange-300 to-red-500" },
  { name: "CSS", icon: FaCss3Alt, color: "from-blue-300 to-indigo-500" },
  { name: "React", icon: FaReact, color: "from-cyan-300 to-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-sky-300 to-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "from-emerald-300 to-green-500" },
  { name: "Express.js", icon: SiExpress, color: "from-zinc-200 to-zinc-500" },
  { name: "REST API", icon: TbApi, color: "from-cyan-200 to-blue-600" },
  { name: "MongoDB", icon: SiMongodb, color: "from-green-300 to-emerald-600" },
  { name: "Git", icon: SiGit, color: "from-red-300 to-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "from-white to-slate-400" },
  { name: "Postman", icon: SiPostman, color: "from-orange-300 to-orange-600" },
  { name: "Vercel", icon: SiVercel, color: "from-white to-slate-500" },
  
];

export const projects = [
  {
    image: prepSphere,
    title: "PrepSphere AI",
    description:
      "An AI-powered placement preparation platform that offers coding practice, aptitude practice, mock interviews, and resume analysis to help students prepare for their dream careers.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Groq API", "Gemini API"],
    github: "https://github.com/Prakhar422/PrepSphere-AI",
    live: "https://prep-sphere-ai.vercel.app/",
    accent: "from-cyan-400 via-blue-500 to-violet-500",
    panels: ["Coding", "Aptitude", "Interviews"],
  },
  {
  image: careerConnect,
  title: "CareerConnect",
  description:
    "A full-stack job and internship portal that enables students to discover opportunities, apply for jobs, and allows recruiters to manage postings and applications through a dedicated dashboard.",
  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "Clerk",
    "Cloudinary"
  ],
  github: "https://github.com/Prakhar422/CareerConnect",
  live: "https://career-connect-client-rho.vercel.app/",
  accent: "from-blue-400 via-cyan-500 to-violet-500",
  panels: ["Jobs", "Recruiters", "Applications"],
},
  {
    image: tripManagement,
    title: "Trip Management System",
    description:
  "A responsive travel management system that allows users to create, view, update, and delete trip details such as destinations, itineraries, durations, and budgets through a dashboard.",
      stack: ["React", "JavaScript", "Tailwind"],
    github: "https://github.com/Prakhar422/React-Trip-Management-SEP-2025-166",
    live: "https://trip-management-red.vercel.app/",
    accent: "from-blue-300 via-fuchsia-500 to-purple-500",
    panels: ["Trip", "Budget", "Planning"],
  },
  {
  image: aiChatbot,
  title: "AI Chatbot",
  description:
    "An AI-powered chatbot that generates intelligent responses using the Gemini API, featuring a clean conversational interface and responsive design built with HTML, CSS, and JavaScript.",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Gemini API"
  ],
  github: "https://github.com/Prakhar422/ai-chatbot",
  live: null,
  accent: "from-violet-300 via-cyan-400 to-blue-600",
  panels: ["Chat", "Prompts", "Responses"],
},
{
  image: currencyConverter,
  title: "Currency Converter",
  description:
    "A responsive currency converter application built with React that enables users to convert between multiple currencies in real time through a clean and intuitive interface.",
  stack: [
    "React",
    "JavaScript",
    "Tailwind",
    "Exchange Rate API"
  ],
  github: "https://github.com/Prakhar422/Currency_Convertor",
  live: "https://your-currency-converter-link.vercel.app/",
  accent: "from-emerald-300 via-cyan-400 to-blue-500",
  panels: ["Currencies", "Exchange Rates", "Conversion"],
},
  {
  image: libraryManagement,
  title: "Library Management System",
  description:
    "A frontend-only library management system developed for Jabalpur Engineering College, featuring user authentication, book renewal requests and profile management through a responsive interface.",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "GitHub Pages"
  ],
  github: "https://github.com/Prakhar422/Library-Management-System",
  live: "https://prakhar422.github.io/Library-Management-System/",
  accent: "from-indigo-300 via-blue-500 to-cyan-400",
  panels: ["Login", "Book Renewal", "Fine Payment"],
},
];
