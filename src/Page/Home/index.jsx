import React from "react";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import styles from "./styles.module.scss";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div>
      <main>
        <About />
        <Skills />
        <Project />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
