import React from "react";
import data from "../../data";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";

const Main = () => {
  return (
    <>
      <Section title='Мобильные телефоны'>
        <PhoneList phones={data.phones} />
      </Section>
    </>
  );
};

export default Main;
