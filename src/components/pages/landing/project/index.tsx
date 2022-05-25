import React, { ReactNode } from 'react';
import ProjectCard from '../../../library/projectCard';
import { motion } from 'framer-motion';

type ProjectProps = {};

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  const cardList = [
    {
      projectTitle: 'NYC Bike Crash Report',
      projectAbout:
        'I worked on this thing for these people using these tools. You can use this thing I used to do this other thing by going to this page.',
      projectSkills: ['React', 'Typescript', 'NextJs', 'MongoDb'],
      githubUrl: 'https://github.com/Augericke',
      projectUrl: '#',
    },
    {
      projectTitle: 'NYC Bike Crash Report',
      projectAbout:
        'I worked on this thing for these people using these tools. You can use this thing I used to do this other thing by going to this page.',
      projectSkills: ['React', 'Typescript', 'NextJs', 'MongoDb'],
      githubUrl: 'https://github.com/Augericke',
      projectUrl: '#',
    },
    {
      projectTitle: 'NYC Bike Crash Report',
      projectAbout:
        'I worked on this thing for these people using these tools. You can use this thing I used to do this other thing by going to this page.',
      projectSkills: ['React', 'Typescript', 'NextJs', 'MongoDb'],
      githubUrl: 'https://github.com/Augericke',
      projectUrl: '#',
    },
  ];

  return (
    <>
      <div className="mt-96 flex flex-col items-center justify-center gap-32">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [30, 0], opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="flex w-2/3 justify-center lg:w-1/2"
        >
          <p className="mb-5 text-justify font-light text-white md:mb-6 md:text-2xl lg:mb-7 lg:text-3xl">
            Here are some of the projects i&apos;ve been working on recently.
          </p>
        </motion.div>
        {cardList.map((card, key) => {
          const displayLeft = (key + 1) % 2 === 0;
          return renderCard(
            <ProjectCard
              projectTitle={card.projectTitle}
              projectAbout={card.projectAbout}
              projectSkills={card.projectSkills}
              githubUrl={card.githubUrl}
              projectUrl={card.projectUrl}
              direction={displayLeft ? 'left' : 'right'}
            />,
            key
          );
        })}
      </div>
    </>
  );
};

export default Project;

function renderCard(projectCard: ReactNode, key?: any) {
  return (
    <motion.div
      key={key}
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [50, 0], opacity: 1 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{ duration: 1 }}
    >
      {projectCard}
    </motion.div>
  );
}
