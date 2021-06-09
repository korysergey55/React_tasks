import React from "react";
import styles from "./Section.module.css";

const Section = ({ children, title: myTitle, isMobiles }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{myTitle.toUpperCase()}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.defaultProps = {
  isMobiles: false,
};
