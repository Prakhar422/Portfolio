import { motion } from "framer-motion";

export const GlassCard = ({ children, className = "", hover = true }) => (
  <motion.div
    whileHover={hover ? { y: -8, scale: 1.01 } : undefined}
    transition={{ type: "spring", stiffness: 220, damping: 22 }}
    className={`glass-card ${className}`}
  >
    {children}
  </motion.div>
);
