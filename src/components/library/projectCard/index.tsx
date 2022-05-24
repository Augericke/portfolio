import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import PlaceHolderimage from '../../../assets/images/placeHolder.jpg';
type ProjectCardProps = {};

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  return (
    <div className="mt-14 flex justify-center">
      <div>
        <div className="flex justify-center">
          <div className="block h-[450px] w-3/4 rounded-[20px] bg-primaryDark dark:bg-primary">
            <div className="ml-6 flex h-full w-7/12 flex-col justify-evenly">
              <div>
                <p className="text-4xl font-bold text-white">
                  NYC Bike Crash Report
                </p>
                <p className=" mt-6 text-lg font-light text-white">
                  I worked on this thing for these people using these tools. You
                  can use this thing I used to do this other thing by going to
                  this page.
                </p>
              </div>
              <div className="mt-3 flex flex-col gap-4">
                <div className="flex justify-end gap-8">
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
                <div className="m-0 flex items-center justify-end gap-8 text-white">
                  <FaGithub size={25} />
                  <FaExternalLinkAlt size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative -top-[500px] left-1/2 m-0 block overflow-hidden
                      rounded-[20px] shadow-lg lg:h-96 lg:w-96"
        >
          <Image
            src={PlaceHolderimage}
            alt="place holder image"
            layout="fill"
            placeholder="blur"
          />
          <div
            className="absolute h-full w-full bg-primary opacity-30
                      transition-opacity duration-500 ease-in-out hover:opacity-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
