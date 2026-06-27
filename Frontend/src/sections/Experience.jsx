import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { GlassCard } from "../components/GlassCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export const Experience = () => (
  <section id="experience" className="section-shell">
    <SectionHeading
      eyebrow="Experience"
      title="Practical frontend work in a real team."
      text="A focused internship timeline with motion that draws attention to the role and learning curve."
    />
    <div className="mx-auto max-w-3xl">
      <div className="relative pl-8">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="absolute left-3 top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent"
        />
        <Reveal>
          <div className="relative">
            <div className="absolute -left-[2.05rem] top-8 grid h-8 w-8 place-items-center rounded-full border border-cyan-200/50 bg-slate-950 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)]">
              <FiBriefcase />
            </div>
            <GlassCard className="p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">
                Internship
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                React Developer Intern
              </h3>
              <p className="mt-2 text-slate-300">Badkul Technology Pvt. Ltd.</p>
              <p className="mt-5 leading-7 text-slate-400">
                Built and refined React interfaces, worked with reusable
                components, improved responsiveness, and gained hands-on
                exposure to professional development workflows.
              </p>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
