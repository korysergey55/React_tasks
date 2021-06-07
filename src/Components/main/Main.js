import React from "react";
import data from "../../data";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";

const Main = () => {
  return (
    <main>
      <Section title='Мобильные телефоны'>
        <PhoneList phones={data.phones} />
      </Section>
      <Section title='Ноутбуки'>
        <LaptopList laptops={data.laptops} />
      </Section>
    </main>
  );
};

export default Main;
