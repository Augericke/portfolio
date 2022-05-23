import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectCardProps = {};

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  return (
    <div className="m-auto mt-[50px] w-3/4">
      <div className="block h-[350px] w-3/4 rounded-[20px] bg-primaryDark dark:bg-primary">
        <div className="ml-6 flex h-full w-7/12 flex-col justify-evenly">
          <div>
            <p className="text-4xl font-bold text-white">
              NYC Bike Crash Report
            </p>
            <p className=" mt-6 text-lg font-light text-white">
              I worked on this thing for these people using these tools. You can
              use this thing I used to do this other thing by going to this
              page.
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
      <div className="relative -top-[400px] left-2/4 block h-[350px] w-1/2 rounded-[20px] bg-pink-300 shadow-lg"></div>
    </div>
  );
};

export default ProjectCard;
