import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <Link to="/">
        <img src="src\assets\imgs\favicon.png" alt="" />
      </Link>
      <h1>I'm working on it!</h1>
    </div>
  );
};

export default About;
