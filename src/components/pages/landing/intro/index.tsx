import React, { useState, useEffect } from 'react';
import AnimatedTitle from '../../../library/animations/animatedTitle';
import { debounce } from '../../../../utils/helpers';
import { FaChevronDown } from 'react-icons/fa';

type IntroProps = {};

const Intro: React.FC<IntroProps> = (props: IntroProps) => {
  const [showArrowPrompt, setShowArrowPrompt] = useState(true);

  // Hide arrow prompt after minScrollDistance
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const minScrollDistance = 50;

      setShowArrowPrompt(currentScrollPos <= minScrollDistance);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showArrowPrompt]);

  return (
    <>
      <div className="flex h-[90vh] items-center justify-center">
        <div className="mb-12 flex flex-col items-start justify-start">
          <AnimatedTitle
            text="Hello, my name is"
            customClassName="mb-5 mr-2 font-light text-white md:mb-6 md:text-2xl lg:mb-7 lg:text-3xl"
          />
          <AnimatedTitle
            text="Austin Gericke."
            customClassName="text-4xl font-extrabold mr-5 text-primaryDark dark:text-primary sm:text-6xl md:text-7xl lg:text-8xl"
            initialDelay={7}
            customAnimation={{
              hidden: {
                opacity: 0,
                y: '0.8em',
              },
              visible: {
                opacity: 1,
                y: '0em',
                transition: {
                  duration: 2,
                  ease: [0.2, 0.65, 0.3, 0.9],
                },
              },
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <FaChevronDown
          size="40"
          className={`animate-bounce text-primaryDark transition-opacity
                      duration-300 ease-out dark:text-primary  ${
                        showArrowPrompt ? 'opacity-100' : 'opacity-0'
                      }`}
        />
      </div>
    </>
  );
};

export default Intro;
