import React from "react";
import { Variants, motion } from "framer-motion";
import styles from "./waveTitle.module.scss";

type WaveTitleProps = {
  title: string;
  initialDelay?: number;
  wordDelay?: number;
  stagger?: number;
  customClassName?: string;
  customAnimation?: Variants;
};

const WaveTitle: React.FC<WaveTitleProps> = ({
  title,
  initialDelay = 0,
  wordDelay = 0.25,
  stagger = 0.05,
  customClassName,
  customAnimation,
}) => {
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        y: { type: "spring", stiffness: 100 },
      },
    },
  };

  const wordClass = customClassName
    ? `${customClassName} ${styles.wordContainer}`
    : styles.wordContainer;

  return (
    <h2 aria-label={title} role="heading" style={{ margin: 0 }}>
      {/* Word */}
      {title.split(" ").map((word, index) => {
        const childrenDelay = initialDelay
          ? (initialDelay + index) * wordDelay
          : index * wordDelay;

        return (
          <motion.span
            key={index}
            className={wordClass}
            aria-hidden="true"
            variants={wordAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delayChildren: childrenDelay,
              staggerChildren: stagger,
            }}
          >
            {/* Character */}
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  key={index}
                  className={styles.characterContainer}
                  aria-hidden="true"
                  variants={customAnimation ?? characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </h2>
  );
};

export default WaveTitle;
