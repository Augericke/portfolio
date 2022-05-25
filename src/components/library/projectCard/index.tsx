import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import PlaceHolderimage from '../../../assets/images/placeHolder.jpg';
type ProjectCardProps = {};

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  return (
    <div className="mt-12 flex justify-center">
      <div
        className="overflow-hidden rounded-[20px] bg-primaryDark dark:bg-primary md:min-h-[20rem] md:w-2/3 lg:min-h-[24rem]
                      xl:w-[850px]"
      >
        <div className="rounded-20px flex h-full w-7/12 justify-center">
          <div className="flex w-10/12 flex-col justify-evenly">
            <p className="lg mt-8 mb-5 font-bold text-white md:text-xl lg:text-4xl">
              NYC Bike Crash Report{' '}
            </p>
            <p className="text-white md:text-base lg:text-lg">
              I worked on this thing for these people using these tools. You can
              use this thing I used to do this other thing by going to this
              page.
            </p>
            <div>
              <div className="mt-8 flex justify-start gap-8 font-light md:text-xs lg:text-base">
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
              <div className="mt-4 mb-8 flex items-center justify-start gap-4 text-white">
                <FaGithub size={20} />
                <FaExternalLinkAlt size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative -mt-10 overflow-hidden rounded-[20px] shadow-lg md:-ml-[25vw] md:h-80 md:w-5/12
                   lg:h-96 lg:w-5/12 xl:-ml-[300px] xl:h-[400px] xl:w-[500px]"
      >
        <Image
          src={PlaceHolderimage}
          alt="place holder image"
          layout="fill"
          placeholder="blur"
        />
        <div
          className="absolute z-10 flex h-full w-full items-center justify-center gap-8 text-white opacity-0
                    transition-all duration-500 ease-in-out hover:bg-primaryDark/50 hover:opacity-100 hover:dark:bg-primary/50"
        >
          <FaGithub size={45} />
          <FaExternalLinkAlt size={45} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
