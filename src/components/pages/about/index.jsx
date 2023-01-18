import React from "react";
import Curved from "../ReactText";
import styles from "./style.module.css";

const About = () => {
  return (
    <div id="about" className={styles.Container}>
      <h1 style={{ color: "aqua" }}>
        About <span style={{ color: "red" }}>Me</span>{" "}
      </h1>
      <Curved />
    </div>
  );
};

export default About;
