import React from "react";
import HeaderList from "./headerList/HeaderList";
import { headerContainer } from "./Header.module.css";

const Header = ({ data }) => {
  return (
    <header className={headerContainer}>
      <HeaderList data={data} />
    </header>
  );
};

export default Header;
