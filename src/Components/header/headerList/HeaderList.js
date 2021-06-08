import React from "react";
import { flexible, listItem, anchor } from "./HeaderList.module.css";

const HeaderList = ({ data }) => {
  return (
    <nav>
      <ul className={`list ${flexible}`}>
        {data.map((headerItem) => (
          <li key={headerItem} className={listItem}>
            <a href={`${headerItem}`} className={anchor}>
              {headerItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderList;
