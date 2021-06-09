import React from "react";
import HeaderList from "./headerList/HeaderList";
import { headerContainer, icon } from "./Header.module.css";
import sprite from "../../icons/header/symbol-defs.svg";

const Header = ({ data }) => {
  return (
    <header className={headerContainer}>
      <svg className={icon}>
        <use href={sprite + "#icon-home"} />
      </svg>
      <HeaderList data={data} />
    </header>
  );
};

export default Header;
