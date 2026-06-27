import { motion } from "framer-motion";
import { CursorGlow } from "./components/CursorGlow";
import { Header } from "./components/Header";
import { Particles } from "./components/Particles";
import { useLenis } from "./hooks/useLenis";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

const App = () => {
  useLenis();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="relative min-h-screen overflow-x-hidden bg-[#02030a] text-white"
    >
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_14%,rgba(37,99,235,0.28),transparent_28%),radial-gradient(circle_at_82%_4%,rgba(168,85,247,0.22),transparent_26%),linear-gradient(135deg,#02030a_0%,#041027_45%,#03040c_100%)]" />
      <div className="aurora-field fixed inset-0 z-0 opacity-70" />
      <Particles />
      <CursorGlow />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default App;
