import React, { ReactNode } from 'react';
import ProjectCard from '../../../library/projectCard';
import { motion } from 'framer-motion';
import BikeCrashImage from '../../../../assets/images/project/BikeCrashProject.png';

type ProjectSectionProps = {};

const ProjectSection: React.FC<ProjectSectionProps> = (
  props: ProjectSectionProps
) => {
  const cardList = [
    {
      projectTitle: 'NYC Bike Crash Report',
      projectAbout:
        'A dashboard cyclists can use to inform their commute, provide an overview of cycling in the city, or allow for a detailed look at the risks present in one’s own neighborhood.',
      projectSkills: ['R', 'Shiny'],
      githubUrl: 'https://github.com/Augericke/NYC-Bike-Crash-Report',
      projectUrl: 'https://agericke.shinyapps.io/NYC-Bike-Crash-Report-v2/',
      projectImage: BikeCrashImage,
    },
    {
      projectTitle: 'Place Holder Project',
      projectAbout:
        'I worked on this thing for these people using these tools. You can use this thing I used to do this other thing by going to this page.',
      projectSkills: ['React', 'Typescript', 'NextJs', 'MongoDb'],
      githubUrl: 'https://github.com/Augericke',
      projectUrl: '#',
    },
    {
      projectTitle: 'Place Holder Project',
      projectAbout:
        'I worked on this thing for these people using these tools. You can use this thing I used to do this other thing by going to this page.',
      projectSkills: ['React', 'Typescript', 'NextJs', 'MongoDb'],
      githubUrl: 'https://github.com/Augericke',
      projectUrl: '#',
    },
  ];

  return (
    <>
      <div
        className="mt-96 flex w-full flex-col items-center justify-center gap-32"
        id="work"
      >
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [30, 0], opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="flex w-2/3 justify-center lg:w-1/2"
        >
          <p className="mb-5 w-full text-justify text-2xl font-light text-white md:mb-6 lg:mb-7 lg:w-2/3 lg:text-3xl">
            Here are some of the projects i&apos;ve been working on recently.
          </p>
        </motion.div>
        {cardList.map((card, key) => {
          const displayRight = (key + 1) % 2 === 0;
          return renderCard(
            <ProjectCard
              projectTitle={card.projectTitle}
              projectAbout={card.projectAbout}
              projectSkills={card.projectSkills}
              projectImage={card.projectImage}
              githubUrl={card.githubUrl}
              projectUrl={card.projectUrl}
              direction={displayRight ? 'right' : 'left'}
            />,
            key
          );
        })}
      </div>
    </>
  );
};

export default ProjectSection;

function renderCard(projectCard: ReactNode, key?: any) {
  return (
    <motion.div
      key={key}
      className="w-full"
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [50, 0], opacity: 1 }}
      viewport={{ once: true, margin: '-150px' }}
      transition={{ duration: 1 }}
    >
      {projectCard}
    </motion.div>
  );
}
