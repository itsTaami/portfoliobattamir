import React, { Component } from "react";
import styles from "./style.module.css";

export default class Project extends Component {
  render() {
    return (
      <div id="about" className={styles.Container}>
        <h1 style={{ color: "aqua" }}>
          About <span style={{ color: "red" }}>Me</span>{" "}
        </h1>
      </div>
    );
  }
}
