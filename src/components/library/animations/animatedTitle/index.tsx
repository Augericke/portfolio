import React from 'react';
import { motion } from 'framer-motion';

type AnimatedTitleProps = {
  text: string;
  customClassName?: string;
  customAnimation?: any;
  delay?: number;
  stagger?: number;
  buffer?: string;
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  customClassName,
  customAnimation,
  delay = 0.25,
  stagger = 0.05,
  buffer = '0px',
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
        duration: 2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <h2
      aria-label={text}
      role="heading"
      className={customClassName ?? 'text-xl font-bold text-white'}
    >
      {/* Word */}
      {text.split(' ').map((word, index) => {
        return (
          <motion.span
            key={index}
            className={'mr-2 inline-block whitespace-nowrap'}
            aria-hidden="true"
            variants={wordAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: buffer }}
            transition={{
              delayChildren: index * delay,
              staggerChildren: stagger,
            }}
          >
            {/* Character */}
            {word.split('').map((character, index) => {
              return (
                <motion.span
                  key={index}
                  className={'-mr-[0.05em] inline-block'}
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
