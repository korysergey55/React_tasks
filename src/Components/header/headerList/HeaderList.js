import React from "react";
import data from "../../../data";

const HeaderList = () => {
  return (
    <ul>
      {data.header.map((headerItem) => (
        <li>{headerItem}</li>
      ))}
    </ul>
  );
};

export default HeaderList;
