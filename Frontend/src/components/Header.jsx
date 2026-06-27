import { motion } from "framer-motion";
import { navItems } from "../constants/site";

export const Header = () => (
  <motion.header
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="fixed left-0 right-0 top-0 z-40 border-b border-white/8 bg-black/35 backdrop-blur-2xl"
  >
    <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
      <a href="#home" className="text-sm font-bold uppercase tracking-[0.32em] text-white">
        PG
      </a>
      <div className="hidden items-center gap-7 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-slate-300 transition hover:text-cyan-200"
          >
            {item.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="rounded-full border border-cyan-200/30 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.16)] transition hover:bg-cyan-200 hover:text-slate-950"
      >
        Hire Me
      </a>
    </nav>
  </motion.header>
);
