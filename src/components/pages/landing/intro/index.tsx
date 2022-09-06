import React from 'react';
import AnimatedTitle from '../../../library/animations/animatedTitle';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

type IntroSectionProps = {};

const IntroSection: React.FC<IntroSectionProps> = (
  props: IntroSectionProps
) => {
  const arrowAnimation = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const customTitleAnimation = {
    hidden: {
      opacity: 0,
      y: '0.25em',
    },
    visible: {
      opacity: 1,
      y: '0em',
      transition: {
        duration: 1,
        y: { type: 'spring', stiffness: 100 },
      },
    },
  };

  return (
    <>
      <div className="flex h-[90vh] items-center justify-center" id="about">
        <div className="mb-12 flex flex-col items-start justify-center">
          <AnimatedTitle
            text="Hello, my name is"
            customClassName="mb-5 mr-2 font-light text-white text-xl md:mb-6 md:text-2xl lg:mb-7 lg:text-3xl"
            initialDelay={2}
            wordDelay={0.1}
            duration={0.5}
          />
          <AnimatedTitle
            text="Austin Gericke."
            customClassName="text-4xl font-extrabold mr-5 text-primaryDark dark:text-primary sm:text-6xl md:text-7xl lg:text-8xl"
            initialDelay={8}
            wordDelay={0.1}
            customAnimation={customTitleAnimation}
          />
        </div>
      </div>
      <motion.div
        variants={arrowAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-350px' }}
        className="flex items-center justify-center"
      >
        <FaChevronDown
          size="40"
          className={`animate-bounce text-primaryDark transition-opacity
                      duration-300 ease-out dark:text-primary`}
        />
      </motion.div>
    </>
  );
};

export default IntroSection;
