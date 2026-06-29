import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import portrait from "../assets/prakhar_updated.png";
import { contact } from "../constants/site";
import { GlowButton } from "../components/ui/GlowButton";

const socialLinks = [
  { label: "GitHub", href: contact.github, icon: FaGithub },
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${contact.email}`, icon: FiMail },
];

export const Hero = () => (
  <section
    id="home"
    className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24"
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10"
    >
      <p className="mb-5 inline-flex rounded-full border border-cyan-200/25 bg-cyan-200/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
        MERN STACK DEVELOPER
      </p>
      <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
        Prakhar Garg
      </h1>
      <div className="mt-5 h-14 overflow-hidden text-2xl font-semibold text-cyan-100 sm:text-4xl">
        <span className="typing-gradient inline-block">MERN Stack Developer</span>
      </div>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        I build fast, responsive, and user-focused web applications using React,
        Node.js, Express, and MongoDB, turning ideas into seamless digital
        experiences.
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <GlowButton href="#projects">Explore Projects</GlowButton>
        <GlowButton href={contact.resume} variant="secondary" download>
          <FiDownload className="mr-2" />
          Download Resume
        </GlowButton>
      </div>
      <div className="mt-9 flex gap-4">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={item.label}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/12 bg-white/8 text-xl text-white transition hover:border-cyan-200 hover:bg-cyan-200 hover:text-slate-950 hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="relative z-10 mx-auto aspect-square w-full max-w-[430px]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,transparent,#22d3ee,#8b5cf6,#2563eb,transparent)] p-[2px]"
      >
        <div className="h-full w-full rounded-full bg-slate-950" />
      </motion.div>
      <div className="absolute inset-6 rounded-full bg-cyan-300/20 blur-3xl" />
      <img
        src={portrait}
        alt="Futuristic developer portrait"
        className="absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] rounded-full border border-white/15 object-cover shadow-[0_0_70px_rgba(59,130,246,0.32)]"
      />
      <div className="absolute -bottom-5 left-1/2 w-[82%] -translate-x-1/2 rounded-full border border-white/12 bg-white/10 px-5 py-3 text-center text-sm text-cyan-5 backdrop-blur-xl">
        Open to MERN developer roles
      </div>
    </motion.div>
  </section>
);
