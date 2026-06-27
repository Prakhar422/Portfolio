import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-52 w-52 rounded-full bg-cyan-300/15 blur-3xl md:block"
      animate={{ x: position.x - 104, y: position.y - 104 }}
      transition={{ type: "spring", damping: 35, stiffness: 220, mass: 0.45 }}
    />
  );
};
