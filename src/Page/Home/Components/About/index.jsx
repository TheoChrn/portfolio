import React from "react";
import Introduction from "./Introduction";
import styles from "./styles.module.scss";

const AboutIntroduction = () => {
  return (
    <section className={styles.introductionContainer}>
      <Introduction />
    </section>
  );
};

export default AboutIntroduction;
