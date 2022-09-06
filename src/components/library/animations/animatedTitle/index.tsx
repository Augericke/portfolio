import React from 'react';
import { motion } from 'framer-motion';

type AnimatedTitleProps = {
  text: string;
  customClassName?: string;
  customHeaderClass?: string;
  customAnimation?: any;
  initialDelay?: number;
  wordDelay?: number;
  stagger?: number;
  buffer?: string;
  duration?: number;
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  customClassName,
  customHeaderClass,
  customAnimation,
  initialDelay = 0,
  wordDelay = 0.25,
  stagger = 0.05,
  buffer = '0px',
  duration = 2,
}) => {
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: '0.25em',
    },
    visible: {
      opacity: 1,
      y: '0em',
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <h2 aria-label={text} role="heading" className={`${customHeaderClass} `}>
      {/* Word */}
      {text.split(' ').map((word, index) => {
        const childrenDelay = initialDelay
          ? (initialDelay + index) * wordDelay
          : index * wordDelay;

        return (
          <motion.span
            key={index}
            className={`${customClassName} inline-block whitespace-nowrap`}
            aria-hidden="true"
            variants={wordAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: buffer }}
            transition={{
              delayChildren: childrenDelay,
              staggerChildren: stagger,
            }}
          >
            {/* Character */}
            {word.split('').map((character, index) => {
              return (
                <motion.span
                  key={index}
                  className={'inline-block'}
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

export default AnimatedTitle;
