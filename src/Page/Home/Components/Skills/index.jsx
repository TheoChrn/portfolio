import React from "react";
import styles from "./styles.module.scss";
import { logos } from "../../../../API/MockedData/data";

const Skills = () => {
  const skillLogos = logos[0].skills;
  console.log(skillLogos);
  const types = new Set(skillLogos.map((logo) => logo.type));
  console.log(types);

  return (
    <section className={styles.skills}>
      <h2>COMPÉTENCES</h2>
      <div className={styles.skillsContainer}>
        <ul className={styles.skillTypes}>
          {Array.from(types).map((type, index) => (
            <div className={styles.skillType} key={index}>
              <h3>{type}</h3>
              <ul className={styles.skillNames}>
                {skillLogos
                  .filter((skill) => skill.type === type)
                  .map((skill, subIndex) => (
                    <li key={subIndex}>
                      {skill.logo} {skill.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          {/*skillLogos.map((skill, index) => (
            <li key={index}>{skill.logo}</li>
          ))*/}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
