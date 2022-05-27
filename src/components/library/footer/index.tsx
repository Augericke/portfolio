import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <div className="mt-28 flex h-44 w-full items-center justify-center ">
      <div className="flex justify-center gap-10">
        <a href="https://github.com/Augericke" className="text-4xl text-white">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/austingericke/"
          className="text-4xl text-white"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Footer;
