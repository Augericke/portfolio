import React from 'react';
import ProjectCard from '../../../library/projectCard';
type ProjectProps = {};

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start justify-start">
          <p className="mb-7 text-3xl font-light text-white">
            Here are some of the projects i&apos;ve been working on recently.
          </p>
        </div>
      </div>
      <ProjectCard />
    </>
  );
};

export default Project;
