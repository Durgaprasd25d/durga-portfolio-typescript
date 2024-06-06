import React from "react";
import profilePic from "../../assets/profilePic.png";
import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
const Zoom = require("react-reveal/Zoom");

const welcomeText = `I Am, ${AboutData.firstName}`;

const Home = () => {
  return (
    <div className={styles.home}>
      <Zoom cascade>
        <img src={profilePic} alt="Profile" className={styles.image} />
        <h2 className={styles.title}>{welcomeText}</h2>
      </Zoom>
      <Zoom cascade>
        <h3 className={styles.about}>{AboutData.about1}</h3>
        <div className={styles.links}>
          {LinksData.map((item) =>
            item.handleDownload ? (
              <a
                key={item.title}
                onClick={item.handleDownload}
                className={styles.link}
                style={{ cursor: "pointer" }}
              >
                {item.icon}
              </a>
            ) : (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {item.icon}
              </a>
            )
          )}
        </div>
      </Zoom>
    </div>
  );
};

export default Home;
