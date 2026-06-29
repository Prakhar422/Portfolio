export const GlowButton = ({ href, children, variant = "primary", download, onClick }) => {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      download={download}
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 ${
        isPrimary
          ? "bg-cyan-300 text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.45)] hover:bg-white"
          : "border border-white/15 bg-white/8 text-white hover:border-cyan-200 hover:bg-cyan-200/10"
      }`}
    >
      {children}
    </a>
  );
};
