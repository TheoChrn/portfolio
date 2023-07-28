import React from "react";
import styles from "./styles.module.scss";
import { Link, NavLink } from "react-router-dom";
import { logos } from "../../../../API/MockedData/data";
import Github from "../Logos/SocialMedia/Github";

const Project = () => {
  const projects = logos[0].projects;

  return (
    <section className={styles.projects}>
      <div className={styles.bg}></div>
      <h2>PROJETS</h2>
      <div className={styles.cardContainer}>
        {projects ? (
          projects.map((project, index) => (
            <article className={styles.card} key={index}>
              <figure className={styles.cardFigure}>
                <img src={project.src} alt={project.alt} />
              </figure>
              <div className={styles.cardInfos}>
                <h3>{`${project.title}`}</h3>
                <ul>
                  {project.logos &&
                    project.logos.map((logo, index) => (
                      <li key={index}>{logo}</li>
                    ))}
                </ul>
                <div className={styles.buttonsContainer}>
                  {project.link && (
                    <Link
                      to={project.link}
                      aria-label={`Lien vers ${project.title}`}
                    >
                      <button>Démo</button>
                    </Link>
                  )}

                  {project.git && (
                    <Link
                      to={project.git}
                      aria-label={`Lien vers ${project.title}`}
                    >
                      <button>Github</button>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))
        ) : (
          <p>Aucuns projet à afficher</p>
        )}
      </div>
    </section>
  );
};

export default Project;
