import React, { useState, useEffect } from 'react';
import { debounce } from '../../../../utils/helpers';
import { FaChevronDown } from 'react-icons/fa';

type IntroProps = {};

const Intro: React.FC<IntroProps> = (props: IntroProps) => {
  const [showArrowPrompt, setShowArrowPrompt] = useState(true);

  // Hide arrow prompt after minScrollDistance
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      const minScrollDistance = 20;

      setShowArrowPrompt(currentScrollPos <= minScrollDistance);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showArrowPrompt]);

  return (
    <>
      <div className="flex h-[90vh] items-center justify-center">
        <div className="mb-12 flex flex-col items-start justify-start">
          <p className="mb-7 text-3xl font-light text-white">
            Hello, my name is
          </p>
          <p className="text-8xl font-extrabold text-primaryDark dark:text-primary">
            Austin Gericke.
          </p>
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
