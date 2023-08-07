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
                <Link
                  to={media.link || `mailto:${media.mail}`}
                  aria-label={`${
                    media.link
                      ? `Lien vers ${media.link}`
                      : `Envoyez un mail à ${media.mail}`
                  }`}
                  target="_blank"
                >
                  {media.logo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
