import React from 'react';

type IntroProps = {};

const Intro: React.FC<IntroProps> = (props: IntroProps) => {
  return (
    <div className="flex h-[90vh] items-center justify-center">
      <div className="mb-12 flex flex-col items-start justify-start">
        <p className="mb-7 text-3xl font-light text-white">Hello, my name is</p>
        <p className="text-8xl font-extrabold text-primaryDark dark:text-primary">
          Austin Gericke.
        </p>
      </div>
    </div>
  );
};

export default Intro;
