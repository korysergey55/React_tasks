import React from "react";
import Section from "../Components/section/Section";
import AdvForm from "../Components/admin/AdvForm";

const AdminPage = ({ addNewAdv }) => {
  return (
    <>
      <Section title='Добавление нового объявления'>
        <AdvForm addNewAdv={addNewAdv} />
      </Section>
    </>
  );
};

export default AdminPage;
