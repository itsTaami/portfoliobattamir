import React from "react";
import styles from "./style.module.css";

const About = () => {
  return (
    <div id="about" className={styles.Container}>
      <h1 style={{ color: "aqua" }}>
        About <span style={{ color: "red" }}>Me</span>{" "}
      </h1>
    </div>
  );
};

export default About;
