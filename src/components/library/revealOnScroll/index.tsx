import React from "react";
import { motion } from "framer-motion";
import styles from "./revealOnScroll.module.scss";

type RevealOnScrollProps = {
  children: React.ReactElement;
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
  customClass?: string;
};

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  duration = 0.75,
  delay = 0,
  distance = 30,
  once = true,
  customClass,
}) => {
  const containerClass = customClass
    ? `${customClass} ${styles.container}`
    : styles.container;

  return (
    <motion.div
      className={containerClass}
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [distance, 0], opacity: 1 }}
      viewport={{ once }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
