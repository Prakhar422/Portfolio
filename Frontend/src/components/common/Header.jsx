import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "../../constants/site";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const targetId = href === "/" ? "home" : href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
      setActiveSection(href);
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      setActiveSection("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
        if (window.location.pathname !== "/") {
          window.history.replaceState(null, "", "/");
        }
        return;
      }

      const sections = [
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];

      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          const path = `/${id}`;
          setActiveSection(path);
          if (window.location.pathname !== path) {
            window.history.replaceState(null, "", path);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-white/8 bg-black/35 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="text-sm font-bold uppercase tracking-[0.32em] text-white"
        >
          {"<PG>"}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm transition-colors duration-300
                after:absolute after:-bottom-2 after:left-0
                after:h-[2px] after:bg-cyan-300 after:rounded-full
                after:transition-all after:duration-300
                ${
                  activeSection === item.href
                    ? "text-cyan-200 after:w-full"
                    : "text-slate-300 hover:text-cyan-200 after:w-0 hover:after:w-full"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          onClick={(e) => handleNavClick(e, "/contact")}
          className="rounded-full border border-cyan-200/30 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.16)] transition hover:bg-cyan-200 hover:text-slate-950"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
};
