import React from "react";
import { container, title } from "./Section.module.css";

const Section = ({ children, title: myTitle, isMobiles }) => {
  return (
    <div className={container}>
      <h2 className={title}>{myTitle.toUpperCase()}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.defaultProps = {
  isMobiles: false,
};
