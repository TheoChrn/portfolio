import React from "react";
import styles from "./styles.module.scss";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h2>Qui suis-je ?</h2>
      <p>
        Je m'appelle Théo, j'ai commencé à apprendre le développement front sur
        le site Openclassrooms et ai ensuite suivi une formation diplomante sur
        celui-ci.
        <br />
        J'ai pu apprendre beaucoup de notions telles que la méthode agile, la
        rédaction de tests, l'intégration d'API et bien plus encore.
        <br />
        Le côté orienté autodidacte de cette formation m'a poussé à chercher les
        informations afin de réaliser au mieux mes projets.
        <br />
        
      </p>
    </div>
  );
};

export default Introduction;
