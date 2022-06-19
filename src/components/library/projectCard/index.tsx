import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import PlaceHolderimage from '../../../assets/images/project/placeHolder.jpg';
import AnimatedTitle from '../animations/animatedTitle';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  projectTitle: string;
  projectAbout: string;
  projectSkills: string[];
  projectImage?: StaticImageData;
  githubUrl?: string;
  projectUrl?: string;
  direction?: 'left' | 'right';
};

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  const {
    projectTitle,
    projectAbout,
    projectSkills = [],
    projectImage = PlaceHolderimage,
    githubUrl,
    projectUrl,
    direction = 'left',
  } = props;

  const bodyTextAnimation = {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: [10, 0],
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      className={`mt-12 flex flex-col-reverse items-center md:justify-center
                     ${
                       direction === 'left'
                         ? 'md:flex-row '
                         : 'md:flex-row-reverse'
                     }`}
    >
      <div
        className={`relative z-10 -mt-56 flex w-3/4 overflow-hidden rounded-[20px]
                   bg-primaryDark shadow-lg dark:bg-primary md:z-0 md:mt-0
                   md:min-h-[20rem] md:w-2/3 lg:min-h-[24rem] xl:w-[850px]
                   ${direction === 'left' ? '' : 'flex justify-end'}
                   `}
      >
        <div className="rounded-20px flex w-full justify-center md:w-7/12 lg:h-96">
          <div className="flex w-10/12 flex-col justify-evenly">
            <span className="mt-8 mb-5">
              <AnimatedTitle
                text={projectTitle}
                customClassName="lg leading-[0px] mr-3  text-2xl font-bold text-white lg:text-4xl"
                customHeaderClass={`${
                  direction === 'left' ? '' : 'md:text-right'
                } text-center`}
                initialDelay={2}
                customAnimation={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 2,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    },
                  },
                }}
              />
            </span>
            <motion.span
              className={`text-base text-white lg:text-lg
                          ${direction === 'left' ? '' : 'md:text-right'}`}
              variants={bodyTextAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1 }}
            >
              {projectAbout}
            </motion.span>
            <div className="flex flex-col md:w-full md:items-start">
              <div
                className={`mt-8 flex w-full flex-wrap
                          justify-center gap-4 gap-y-2 text-base font-light
                          md:gap-x-8
                          ${
                            direction === 'left'
                              ? 'md:justify-start'
                              : 'md:justify-end'
                          }`}
              >
                {projectSkills.map((skill, key) => {
                  return (
                    <motion.span
                      key={key}
                      className={`text-white
                                 ${
                                   direction === 'left' ? '' : 'md:text-right'
                                 }`}
                      variants={bodyTextAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 1 }}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
              {(githubUrl || projectUrl) && (
                <div
                  className={`mt-4 mb-8 flex w-full items-center  justify-center gap-4 text-white
                                      ${
                                        direction === 'left'
                                          ? 'md:justify-start'
                                          : 'md:justify-end'
                                      } `}
                >
                  {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {projectUrl && (
                    <a href={projectUrl} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative h-80 w-10/12  overflow-hidden rounded-[20px]
                    shadow-lg md:-mt-16  md:h-80 md:w-5/12
                   lg:h-96 lg:w-5/12  xl:h-[400px] xl:w-[500px]
                   ${
                     direction === 'left'
                       ? 'md:-ml-[25vw] xl:-ml-[300px]'
                       : 'md:-mr-[25vw] xl:-mr-[300px]'
                   }`}
      >
        <Image
          src={projectImage ? projectImage : PlaceHolderimage}
          alt="place holder image"
          layout="fill"
          placeholder="blur"
        />
        <div
          className="absolute flex h-full w-full items-center justify-center gap-8
                    text-xs text-white dark:bg-primary/40 md:z-10 md:bg-transparent md:opacity-0 md:transition-all
                    md:duration-500 md:ease-in-out md:hover:bg-primaryDark/50 md:hover:text-4xl
                    md:hover:opacity-100 md:hover:dark:bg-primary/50 lg:hover:text-6xl"
        >
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <FaGithub className="hidden md:flex" />
            </a>
          )}
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt className="hidden md:flex" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
