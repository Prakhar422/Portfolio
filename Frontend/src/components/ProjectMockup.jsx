export const ProjectMockup = ({ project }) => (
  <div className="relative overflow-hidden rounded-[1.4rem] border border-white/12 bg-slate-950/80 p-4 shadow-2xl">
    <div className={`absolute inset-x-10 top-4 h-28 rounded-full bg-gradient-to-r ${project.accent} opacity-35 blur-3xl`} />
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-300" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        <div className="ml-3 h-2 w-32 rounded-full bg-white/12" />
      </div>
      <div className="grid min-h-[250px] gap-4 p-4 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
          <div className={`mb-6 h-20 rounded-2xl bg-gradient-to-br ${project.accent} opacity-90`} />
          <div className="space-y-3">
            <div className="h-3 rounded-full bg-white/30" />
            <div className="h-3 w-4/5 rounded-full bg-white/15" />
            <div className="h-3 w-3/5 rounded-full bg-white/12" />
          </div>
        </div>
        <div className="grid gap-3">
          {project.panels.map((panel) => (
            <div
              key={panel}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/7 px-4 py-4"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">
                  {panel}
                </p>
                <div className="mt-3 h-2 w-28 rounded-full bg-white/18" />
              </div>
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${project.accent}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
