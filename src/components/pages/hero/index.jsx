import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import ParticlesComponent from "../particle";

import styles from "./style.module.scss";

const Hero = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.HeroItem}>
        <div>
          <h1>
            Hello My name is <span style={{ color: "#ffff" }}>Battamir</span>{" "}
          </h1>
          <h1>
            I am{" "}
            <span style={{ color: "#ffff" }}>
              <Typewriter
                words={["Sleeper", "Gamer", "Software Engineer", "Developer"]}
                loop={false}
              />
            </span>
          </h1>
          <div className={styles.Icons}>
            <SocialIcon network="twitter" bgColor="#10e956" />
            <SocialIcon network="google" bgColor="#10e956" />
            <SocialIcon network="instagram" bgColor="#ffff" />
            <SocialIcon network="youtube" bgColor="#10e956" />
            <SocialIcon network="facebook" bgColor="#10e956" />
          </div>
        </div>
      </div>
      <div className={styles.HeroItem}>
        <div className={styles.border}></div>
        <div className={styles.ImgContainer}>
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
