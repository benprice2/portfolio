import styles from "./Projects.module.css";
import projects from "../../data/projects.json";

import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
          <div key={id} className={styles.projectContainer}>
            <img
                src={getImageUrl(project.imageSrc)}
                alt={`Image of ${project.title}`}
                className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.projectSkills}>
                {project.skills.map((skill, id) => {
                return (
                    <li key={id} className={styles.projectSkill}>
                        {skill}
                    </li>
                );
                })}
            </ul>
            <div className={styles.projectLinks}>
                <a href={project.demo} className={styles.projectLink}>
                Demo
                </a>
                <a href={project.source} className={styles.projectLink}>
                Source
                </a>
            </div>
        </div>
          );
        })};
      </div>
    </section>
  );
};