import React from "react";
import styles from "./styles.module.scss";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h2 className={styles.fluidH2}>Qui suis-je ?</h2>
      <p className={styles.fluidParagraph}>
        Je m'appelle Théo, j'ai commencé à apprendre le développement front-end
        sur le site Openclassrooms. Le côté création m'a beaucoup attiré et ai
        donc ensuite suivi une formation diplomante.
        <br />
        <br />
        J'ai pu apprendre beaucoup de notions telles que la méthode agile, la
        rédaction de tests, l'intégration d'API et bien plus encore.
        <br />
        <br />
        Prenez le temps d'explorer le savoir-faire que j'ai acquis à travers mes
        différents projets.
        <br />
        <br />
      </p>
    </div>
  );
};

export default Introduction;
