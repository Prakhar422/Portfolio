import { FiArrowUp, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contact } from "../constants/site";

export const Footer = () => (
  <footer className="relative z-10 border-t border-white/8 px-5 py-8 sm:px-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
      <p className="text-sm text-slate-400">
        Crafted for Prakhar Garg. Frontend only.
      </p>
      <div className="flex items-center gap-3">
        <a className="footer-icon" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a className="footer-icon" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a className="footer-icon" href={`mailto:${contact.email}`} aria-label="Email">
          <FiMail />
        </a>
        <a className="footer-icon" href="#home" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </div>
    </div>
  </footer>
);
