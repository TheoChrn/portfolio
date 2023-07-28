import React from "react";
import styles from "./styles.module.scss";
import ProfilePic from "../../../../../assets/profile-picture/WY_Hp8D6.jpg";
import { Link } from "react-router-dom";
import { logos } from "../../../../../API/MockedData/data";

const ProfileCard = () => {
  const socialMedia = logos[0].socialMedia;
  return (
    <div className={styles.card}>
      <figure>
        <img
          src={ProfilePic}
          alt="Photo de profil"
          className={styles.cardProfilePic}
        />
      </figure>
      <div className={styles.cardAnimated}>
        <div className={styles.cardInfos}>
          <h1>Théo</h1>
          <h2>Développeur Web Front-end junior</h2>
          <ul className={styles.socialMedia}>
            {socialMedia.map((media, index) => (
              <li key={index}>
                {media.link ? (
                  <Link
                    to={media.link}
                    aria-label={`Lien vers ${media.link}`}
                    target="blank"
                  >
                    {media.logo}
                  </Link>
                ) : (
                  <Link
                    to={`mailto:${media.mail}`}
                    aria-label={`Envoyez un mail à ${media.mail}`}
                  >
                    {media.logo}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
