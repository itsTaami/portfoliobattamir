import React from "react";
import ReactCurvedText from "react-curved-text";
import "./style.scss";
import { FaCss3Alt } from "react-icons/fa";
// import styles from "./style.module.scss";
const Curved = () => {
  return (
    <div className="body">
      <div className="img">
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" /> */}
      </div>

      <div className="Ctext">
        <div className="background"></div>

        <ReactCurvedText
          width={2000}
          height={2000}
          cx="200"
          cy="200"
          rx={180}
          ry={180}
          startOffset={20}
          reversed={true}
          // text="React - JavaScript - BootStrap - CSS - HTML -"
          text="React - JavaScript - BootStrap - CSS - HTML -"
          textProps={{ style: { fontSize: "43" } }}
          tspanProps={{ dy: "20" }}
        />
      </div>
    </div>
  );
};

export default Curved;
