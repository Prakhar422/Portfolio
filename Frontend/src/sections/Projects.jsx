import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Autoplay, EffectCoverflow, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/portfolio";

export const Projects = () => (
  <section id="projects" className="section-shell project-stage">
    <SectionHeading
      eyebrow="Featured Projects"
      title="Projects that reflect my journey as a developer."
      text="A collection of applications built to solve real-world problems, improve user experiences, and strengthen my skills across the MERN stack."
    />
    <div className="relative">
      <button
        className="project-prev absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-xl transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950 lg:grid"
        aria-label="Previous project"
      >
        <FiArrowLeft />
      </button>
      <button
        className="project-next absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-xl transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950 lg:grid"
        aria-label="Next project"
      >
        <FiArrowRight />
      </button>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Mousewheel, Autoplay]}
        effect="coverflow"
        centeredSlides
        loop
        grabCursor
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,
          modifier: 1.8,
          slideShadows: false,
        }}
        mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: ".project-prev", nextEl: ".project-next" }}
        className="portfolio-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title} className="project-slide">
            <article className="flex h-[590px] min-h-[590px] flex-col rounded-[1.35rem] border border-white/12 bg-white/[0.065] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_100px_rgba(34,211,238,0.16)] sm:h-[620px] sm:min-h-[620px] sm:p-4">
              <div className="overflow-hidden rounded-[1.1rem] border border-white/12 bg-slate-950/70">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-64 w-full rounded-[1.1rem] object-cover object-top sm:h-72"
                />
              </div>
              <div className="flex flex-1 flex-col px-1 pt-4">
                <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="project-description mt-2 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex max-h-[58px] flex-wrap gap-1.5 overflow-hidden">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-200/20 bg-cyan-200/8 px-2.5 py-1 text-[11px] font-medium leading-none text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2.5 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white transition hover:border-cyan-200 hover:bg-cyan-200 hover:text-slate-950 sm:text-sm"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-9 items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur-md transition hover:bg-cyan-300 hover:text-slate-950 sm:text-sm"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);
