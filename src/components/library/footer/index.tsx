import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const socialIconClass = 'mt-8 text-2xl text-white';

  return (
    <div className="flex h-44 w-full items-center justify-center ">
      <div className="flex items-center justify-center gap-5 border-t-2 border-t-primaryDark px-6 dark:border-t-primary">
        <a
          href="https://www.linkedin.com/in/austingericke/"
          className={socialIconClass}
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Augericke" className={socialIconClass}>
          <FaGithub />
        </a>
        <a href="https://twitter.com/augericke" className={socialIconClass}>
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
