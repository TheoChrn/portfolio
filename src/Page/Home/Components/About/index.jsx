import React from "react";
import styles from "./styles.module.scss";
import AboutCard from "./Card";
const About = () => {
  return (
    <section className={styles.about}>
      <AboutCard />
    </section>
  );
};

export default About;
