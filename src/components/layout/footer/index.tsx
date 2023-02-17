import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const styles = require("./footer.module.scss");

type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconsContainer}>
        <a
          href="https://www.linkedin.com/in/austingericke/"
          className={styles.icon}
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Augericke" className={styles.icon}>
          <FaGithub />
        </a>
        <a href="https://twitter.com/augericke" className={styles.icon}>
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
