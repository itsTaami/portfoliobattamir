import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.items}>
        <div>
          <h4>© 2023 Taami</h4>
        </div>
        <div className={styles.icons}>
          <SocialIcon
            network="github"
            bgColor="#ffff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            network="discord"
            bgColor="#ffff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            network="facebook"
            bgColor="#ffff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            network="email"
            bgColor="#ffff"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
