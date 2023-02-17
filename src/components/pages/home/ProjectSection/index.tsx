import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./Projects";

import styles from "./projectSection.module.scss";

const ProjectSection = () => {
  return (
    <section className={styles.projectsContainer} id="projects">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={project.title}
            projectDetails={project}
            rightOriented={index % 2 === 0}
          />
        );
      })}
    </section>
  );
};

export default ProjectSection;
