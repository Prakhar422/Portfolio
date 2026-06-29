import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Autoplay, EffectCoverflow, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SectionHeading } from "../components/common/SectionHeading";
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
        className="project-prev absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-xl transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950 lg:grid"
        aria-label="Previous project"
      >
        <FiArrowLeft />
      </button>
      <button
        className="project-next absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-xl transition hover:border-cyan-200 hover:bg-cyan-300 hover:text-slate-950 lg:grid"
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
          depth: 210,
          modifier: 1.75,
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
            <article className="flex h-auto min-h-0 w-full flex-col rounded-[1.15rem] border border-white/12 bg-white/[0.065] p-0 shadow-[0_20px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_86px_rgba(34,211,238,0.16)] sm:h-[420px] sm:min-h-[420px] overflow-hidden">
              <div className="relative h-[200px] w-full overflow-hidden bg-slate-950/80 sm:h-[220px]">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                <h3 className="text-base font-semibold leading-tight text-white sm:text-lg">
                  {project.title}
                </h3>
                <p className="project-description mt-1.5 text-xs leading-5 text-slate-300 sm:text-[13px] max-w-[90%]">
                  {project.description}
                </p>
                <div className="mt-2 flex max-h-[44px] flex-wrap gap-1.5 overflow-hidden">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-200/20 bg-cyan-200/8 px-2 py-1 text-[10px] font-medium leading-none text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 pt-2.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white transition hover:border-cyan-200 hover:bg-cyan-200 hover:text-slate-950"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur-md transition hover:bg-cyan-300 hover:text-slate-950"
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
