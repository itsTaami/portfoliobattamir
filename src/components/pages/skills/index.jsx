import React from "react";
import Carditem from "./card";

import styles from "./style.module.css";

const Skills = () => {
  return (
    <div id="about" bg="dark" className={styles.Container}>
      <div>
        <h1 style={{ color: "#10e956", marginTop: "40px" }}>Skills</h1>
      </div>
      <div className={styles.Carditem}>
        <Carditem />
      </div>
    </div>
  );
};

export default Skills;
