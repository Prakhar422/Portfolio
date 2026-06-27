import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, text }) => (
  <Reveal className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {text && <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>}
  </Reveal>
);
