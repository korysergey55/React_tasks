import React from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { PhoneListContainer } from "./PhoneListStyled";

const PhoneList = ({ phones }) => {
  return (
    <PhoneListContainer>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} />
      ))}
    </PhoneListContainer>
  );
};

export default PhoneList;
