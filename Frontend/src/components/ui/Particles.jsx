import { motion } from "framer-motion";

const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: 2 + (index % 4),
  delay: (index % 9) * 0.45,
  duration: 5 + (index % 7),
}));

export const Particles = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {particles.map((particle) => (
      <motion.span
        key={particle.id}
        className="absolute rounded-full bg-cyan-200/60 shadow-[0_0_18px_rgba(34,211,238,0.7)]"
        style={{
          left: particle.left,
          top: particle.top,
          width: particle.size,
          height: particle.size,
        }}
        animate={{
          y: [0, -28, 0],
          opacity: [0.16, 0.85, 0.16],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: particle.duration,
          delay: particle.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);
