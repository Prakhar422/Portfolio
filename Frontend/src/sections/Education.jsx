import { FaGraduationCap } from "react-icons/fa";
import { GlassCard } from "../components/GlassCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

export const Education = () => (
  <section id="education" className="section-shell">
    <SectionHeading
      eyebrow="Education"
      title="The foundation that shaped my engineering journey."
    />
    <Reveal>
      <GlassCard className="mx-auto grid max-w-4xl items-center gap-8 p-7 sm:grid-cols-[0.7fr_1.3fr] sm:p-9">
        <div className="relative mx-auto grid h-52 w-52 place-items-center rounded-full border border-cyan-200/20 bg-cyan-200/8">
          <div className="absolute inset-8 rounded-full bg-violet-400/20 blur-2xl" />
          <FaGraduationCap className="relative text-8xl text-cyan-200 drop-shadow-[0_0_24px_rgba(34,211,238,0.45)]" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-cyan-200">
            B.Tech
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white">
            Information Technology
          </h3>
          <p className="mt-4 text-lg text-slate-300">
            Jabalpur Engineering College
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
  <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white">
    CGPA: 7.2
  </span>

  <span className="inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/8 px-4 py-2 text-sm text-cyan-100">
    Graduated 2026
  </span>
</div>
        </div>
      </GlassCard>
    </Reveal>
  </section>
);
