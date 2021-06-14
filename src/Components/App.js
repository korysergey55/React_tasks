import React from "react";
import data from "../data";
import Header from "./header/Header";
import Main from "./main/Main";
// import Modal from "./modal/Modal";

const App = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const hideModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
      <Header data={data.header} />
      <Main />
    </>
  );
};

export default App;
