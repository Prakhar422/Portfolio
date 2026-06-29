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
      text="A glimpse into my internship experience, where I collaborated on real projects and strengthened my frontend development skills."
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
          <div className="relative mb-10 pl-8">
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
              <ul className="mt-5 space-y-3 text-slate-400">
                <li>
                  • Developed responsive React interfaces and reusable
                  components.
                </li>
                <li>
                  • Contributed to a Trip Management System during the
                  internship.
                </li>
                <li>
                  • Gained hands-on experience with real-world development
                  workflows.
                </li>
                <li>
                  • Awarded Grade A for timely and accurate project completion.
                </li>
              </ul>
              <a
                href="/certificates/InternshipCompletionLetter.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-200 hover:text-slate-950"
              >
                📄 View Certificate
              </a>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
