
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { GlassCard } from "../components/ui/GlassCard";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/common/SectionHeading";

export const Experience = () => (
  <section id="experience" className="section-shell">
    <SectionHeading
      eyebrow="Experience"
      title="Hands-on experience in professional development."
      text="A glimpse into my professional journey, including internship and freelance experience, where I've applied my development skills to real-world projects."
    />

    <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">

      {/* Internship Experience */}
      <Reveal>
        <div className="relative h-full">
          <div className="absolute -left-3 top-8 z-10 grid h-8 w-8 place-items-center rounded-full border border-cyan-200/50 bg-slate-950 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)]">
            <FiBriefcase />
          </div>

          <GlassCard className="h-full p-6 pl-8 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">
              Internship
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              React Developer Intern
            </h3>

            <p className="mt-2 text-slate-300">
              Badkul Technologies Pvt. Ltd.
            </p>

            <p className="mt-1 text-sm text-slate-500">
              September 2025 · 1 Month
            </p>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
    • Developed responsive React interfaces and reusable UI components.
  </li>
  <li>
    • Contributed to development of the Trip Management System.
  </li>
  <li>
    • Integrated REST APIs and worked on application workflows.
  </li>
  <li>
    • Earned Grade A for quality and timely project completion.
  </li>
            </ul>

            <a
              href="/certificates/Prakhar-Garg-Completion-Letter.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-200 hover:text-slate-950"
            >
              📄 View Certificate
            </a>
          </GlassCard>
        </div>
      </Reveal>

      {/* Freelance Experience */}
      <Reveal>
        <div className="relative h-full">
          <div className="absolute -left-3 top-8 z-10 grid h-8 w-8 place-items-center rounded-full border border-violet-200/50 bg-slate-950 text-violet-200 shadow-[0_0_24px_rgba(167,139,250,0.35)]">
            <FiBriefcase />
          </div>

          <GlassCard className="h-full p-6 pl-8 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-violet-200">
              Freelance
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Web Developer
            </h3>

            <p className="mt-2 text-slate-300">
              Independent / Self-Employed
            </p>

            <p className="mt-1 text-sm text-slate-500">
              August 2026 – October 2026
            </p>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
    • Contributed to the development of the ViaAstro web application.
  </li>
  <li>
    • Worked on website interfaces and backend components.
  </li>
  <li>
    • Assisted with frontend and backend updates based on requirements.
  </li>
  <li>
    • Improved application usability through code refinements.
  </li>
            </ul>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-200/30 bg-violet-200/10 px-5 py-2 text-sm font-medium text-violet-100">
              <FiBriefcase />
              Independent Work
            </div>
          </GlassCard>
        </div>
      </Reveal>

    </div>
  </section>
);
