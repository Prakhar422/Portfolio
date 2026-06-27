import { GlassCard } from "../components/GlassCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { stats } from "../data/portfolio";

export const About = () => (
  <section id="about" className="section-shell">
    <SectionHeading
  eyebrow="About Me"
  title="Building modern web experiences."
  text="Passionate MERN Stack Developer focused on creating responsive, user-friendly applications and continuously learning new technologies."
/>
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <GlassCard className="h-full p-7 sm:p-9">
          <p className="text-lg leading-9 text-slate-200">
  Hi, I'm Prakhar Garg, a B.Tech IT graduate from Jabalpur Engineering College 
  and a MERN Stack Developer passionate about building modern, user-centric 
  web applications.
  </p>
          <p className="mt-6 text-base leading-8 text-slate-400">
  My expertise lies in React, Node.js, Express, and MongoDB, along with
  modern frontend technologies like Tailwind CSS. I love transforming ideas
  into production-ready applications and continuously improving my skills
  through hands-on projects and new challenges.
</p>
        </GlassCard>
      </Reveal>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <GlassCard className="p-5 sm:p-6">
              <p className="text-3xl font-semibold text-white sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.label}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
