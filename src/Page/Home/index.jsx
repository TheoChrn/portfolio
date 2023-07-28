import React from "react";
import AboutCard from "./Components/Profile";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import styles from "./styles.module.scss";
import AboutIntroduction from "./Components/About";

const Home = () => {
  return (
    <div>
      <main>
        <AboutCard />
        <AboutIntroduction />
        <Skills />
        <Project />
      </main>
    </div>
  );
};

export default Home;
