import React from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { LaptopListContainer } from "./LaptopListStyled";

const LaptopList = ({ laptops }) => {
  return (
    <LaptopListContainer>
      {laptops.map((laptop) => (
        <LaptopListItem laptop={laptop} key={laptop.id} />
      ))}
    </LaptopListContainer>
  );
};

export default LaptopList;
