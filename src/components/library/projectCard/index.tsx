import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectCardProps = {};

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex h-[350px] w-3/5 flex-col items-start rounded-[20px]
                      bg-primaryDark dark:bg-primary"
      >
        <div className="flex h-full w-3/5 justify-center ">
          <div className="flex w-10/12 flex-col justify-evenly">
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
    </div>
  );
};

export default ProjectCard;
