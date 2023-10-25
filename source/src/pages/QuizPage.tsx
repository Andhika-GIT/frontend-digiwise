import React from "react";

import Quiz from "../components/Quiz";
import Modal from "../components/Modal";

// modalstore
import modalStore from "../../store/modalStore";
import LevelOne from "../components/Level/LevelOne";
import LevelTwo from "../components/Level/LevelTwo";
import LevelThree from "../components/Level/LevelThree";
import LevelFour from "../components/Level/LevelFour";
import LevelFive from "../components/Level/LevelFive";
// import SidebarMenu from "../components/Sidebar/SidebarMenu";
// import SidebarProfile from "../components/Sidebar/SidebarProfile";

const QuizPage = () => {
  const { level } = modalStore();

  let modalContent;

  if (level === 1) {
    modalContent = <LevelOne />;
  } else if (level === 2) {
    modalContent = <LevelTwo />;
  } else if (level === 3) {
    modalContent = <LevelThree />;
  } else if (level === 4) {
    modalContent = <LevelFour />;
  } else if (level === 5) {
    modalContent = <LevelFive />;
  }

  return (
    <>
      <div
        data-theme="light"
        className="flex h-full items-center justify-center py-[54px]"
      >
        <Quiz />
      </div>
      <Modal>{modalContent}</Modal>
    </>
  );
};

export default QuizPage;