import React from 'react';
import ProjectCard from '../../../library/projectCard';
type ProjectProps = {};

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex w-2/3 justify-center lg:w-1/2">
          <p className="mb-5 text-justify font-light text-white md:mb-6 md:text-2xl lg:mb-7 lg:text-3xl">
            Here are some of the projects i&apos;ve been working on recently.
          </p>
        </div>
      </div>

      <ProjectCard />
    </>
  );
};

export default Project;
