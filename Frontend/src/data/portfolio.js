import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

export const stats = [
  { value: "12+", label: "Projects Completed" },
  { value: "10+", label: "Technologies Learned" },
  { value: "1 mo", label: "Internship Experience" },
  { value: "7.2", label: "Current CGPA" },
];

export const skills = [
  { name: "React", icon: FaReact, color: "from-cyan-300 to-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "from-emerald-300 to-green-500" },
  { name: "Express.js", icon: SiExpress, color: "from-zinc-200 to-zinc-500" },
  { name: "MongoDB", icon: SiMongodb, color: "from-green-300 to-emerald-600" },
  { name: "JavaScript", icon: SiJavascript, color: "from-yellow-200 to-amber-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-sky-300 to-cyan-500" },
  { name: "HTML", icon: FaHtml5, color: "from-orange-300 to-red-500" },
  { name: "CSS", icon: FaCss3Alt, color: "from-blue-300 to-indigo-500" },
  { name: "Git", icon: SiGit, color: "from-red-300 to-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "from-white to-slate-400" },
];

export const projects = [
  {
    title: "CareerConnect",
    description:
      "A MERN job and career platform experience focused on profile discovery, opportunity tracking, and clean candidate workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/prakhargarg/careerconnect",
    live: "#",
    accent: "from-cyan-400 via-blue-500 to-violet-500",
    panels: ["Jobs", "Profiles", "Applications"],
  },
  {
    title: "Trip Management System",
    description:
      "A responsive travel operations dashboard for planning trips, organizing itineraries, and managing bookings from one interface.",
    stack: ["React", "JavaScript", "CSS", "MongoDB"],
    github: "https://github.com/prakhargarg/trip-management-system",
    live: "#",
    accent: "from-blue-300 via-fuchsia-500 to-purple-500",
    panels: ["Routes", "Hotels", "Budget"],
  },
  {
    title: "AI Chatbot",
    description:
      "A polished conversational interface with prompt-first UX, chat history presentation, and quick response patterns for users.",
    stack: ["React", "Node.js", "Express", "JavaScript"],
    github: "https://github.com/prakhargarg/ai-chatbot",
    live: "#",
    accent: "from-violet-300 via-cyan-400 to-blue-600",
    panels: ["Prompt", "Memory", "Response"],
  },
  {
    title: "Library Management System",
    description:
      "A library workflow app for catalog management, student records, issue tracking, and simple administrative visibility.",
    stack: ["HTML", "CSS", "JavaScript", "MongoDB"],
    github: "https://github.com/prakhargarg/library-management-system",
    live: "#",
    accent: "from-indigo-300 via-blue-500 to-cyan-400",
    panels: ["Catalog", "Members", "Issued"],
  },
];
