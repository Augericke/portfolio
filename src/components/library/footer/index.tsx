import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <div className="flex h-44 w-full items-center justify-center ">
      <div className="flex items-center justify-center gap-5 border-t-2 border-t-primaryDark px-6 dark:border-t-primary">
        <a
          href="https://github.com/Augericke"
          className="mt-8 text-2xl text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/austingericke/"
          className="mt-8 text-2xl text-white"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Footer;
