import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import PlaceHolderimage from '../../../assets/images/placeHolder.jpg';
type ProjectCardProps = {};

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  return (
    <div className="mt-12 flex flex-col-reverse items-center md:flex-row md:justify-center">
      <div
        className="relative z-10 -mt-44 w-2/3 overflow-hidden rounded-[20px] bg-primaryDark
                 dark:bg-primary md:z-0 md:mt-0 md:min-h-[20rem] md:w-2/3
                   lg:min-h-[24rem] xl:w-[850px] "
      >
        <div className="rounded-20px flex h-full w-full justify-center md:w-7/12">
          <div className="flex w-10/12 flex-col justify-evenly">
            <p className="lg mt-8 mb-5 text-lg font-bold text-white md:text-xl lg:text-4xl">
              NYC Bike Crash Report{' '}
            </p>
            <p className="text-sm text-white md:text-base lg:text-lg">
              I worked on this thing for these people using these tools. You can
              use this thing I used to do this other thing by going to this
              page.
            </p>
            <div className="flex flex-col items-center justify-center md:w-full md:items-start">
              <div
                className="mt-8 flex flex-wrap justify-center gap-4
                          gap-y-2 text-xs font-light md:justify-start
                          md:gap-x-8 md:text-xs lg:text-base"
              >
                {['React', 'Typescript', 'NextJs', 'MongoDb'].map(
                  (skill, key) => {
                    return (
                      <p className="text-white" key={key}>
                        {skill}
                      </p>
                    );
                  }
                )}
              </div>
              <div className="mt-4 mb-8 flex items-center justify-center gap-4 text-white md:justify-start">
                <FaGithub size={20} />
                <FaExternalLinkAlt size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative h-96 w-10/12  overflow-hidden rounded-[20px] shadow-lg md:-mt-16 md:-ml-[25vw] md:h-80 md:w-5/12
                   lg:h-96 lg:w-5/12 xl:-ml-[300px] xl:h-[400px] xl:w-[500px]"
      >
        <Image
          src={PlaceHolderimage}
          alt="place holder image"
          layout="fill"
          placeholder="blur"
        />
        <div
          className="absolute flex h-full w-full items-center justify-center gap-8 bg-primaryDark/70
                   text-white dark:bg-primary/60 hover:dark:bg-primary/50 md:z-10 md:bg-transparent
                    md:opacity-0 md:transition-all md:duration-500 md:ease-in-out
                    md:hover:bg-primaryDark/50 md:hover:opacity-100"
        >
          <FaGithub size={45} className="hidden md:grid" />
          <FaExternalLinkAlt size={45} className="hidden md:grid" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
