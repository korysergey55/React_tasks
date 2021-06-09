import React from "react";
import data from "../../data";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";
import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <Section title='Мобильные телефоны' isMobiles={true}>
        <PhoneList phones={data.phones} />
      </Section>
      <Section title='Ноутбуки'>
        <LaptopList laptops={data.laptops} />
      </Section>
    </MainContainer>
  );
};

export default Main;
