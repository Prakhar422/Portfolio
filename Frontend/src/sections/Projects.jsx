import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Autoplay, EffectCoverflow, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProjectMockup } from "../components/ProjectMockup";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/portfolio";

export const Projects = () => (
  <section id="projects" className="section-shell project-stage">
    <SectionHeading
      eyebrow="Featured Projects"
      title="An Apple-style carousel for the work that matters."
      text="One project stays centered and enlarged while neighboring cards peek in, inviting exploration with arrows, dots, autoplay, and wheel gestures."
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
        autoplay={{ delay: 3800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: ".project-prev", nextEl: ".project-next" }}
        className="portfolio-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title} className="project-slide">
            <article className="rounded-[1.6rem] border border-white/12 bg-white/[0.065] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-6">
              <ProjectMockup project={project} />
              <div className="px-1 pt-6">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-200/20 bg-cyan-200/8 px-3 py-1 text-xs text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-cyan-200 hover:bg-cyan-200 hover:text-slate-950"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);
