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

      <ProjectCard
        projectTitle="NYC Bike Crash Report"
        projectAbout="I worked on this thing for these people using these tools. You can
                      use this thing I used to do this other thing by going to this page."
        projectSkills={['React', 'Typescript', 'NextJs', 'MongoDb']}
        githubUrl="https://github.com/Augericke"
        projectUrl="#"
      />
    </>
  );
};

export default Project;
