import { motion } from "framer-motion";
import { SectionHeading } from "../components/common/SectionHeading";
import { skills } from "../data/portfolio";

export const Skills = () => (
  <section id="skills" className="section-shell">
    <SectionHeading
      eyebrow="Skills"
      title="A toolkit built for full-stack velocity."
      text="Animated technology cards reveal as they enter the viewport, keeping the section lively without getting in the way."
    />
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {skills.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 34, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            whileHover={{ y: -10, rotateX: 8, rotateY: -8 }}
            className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-center backdrop-blur-xl transition hover:border-cyan-200/60 hover:bg-white/[0.09]"
          >
            <div
              className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${skill.color} text-3xl text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.18)]`}
            >
              <Icon />
            </div>
            <p className="mt-4 text-sm font-semibold text-white">{skill.name}</p>
          </motion.div>
        );
      })}
    </div>
  </section>
);
