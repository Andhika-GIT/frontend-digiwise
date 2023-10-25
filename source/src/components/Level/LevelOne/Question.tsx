import React, { useState } from "react";
import Option from "./Option";

import quizStore from "../../../../store/quizStore";
import formatOptionResponse from "../../../utils/formatOptionResponse";

export type Question = {
  question: string;
  url_image: string | undefined;
  option_answer: string;
};

const Question: React.FC<Question> = ({
  url_image,
  question,
  option_answer,
}) => {
  const { nextQuestion, quiz, index, setPassedResult, submitQuiz } =
    quizStore();

  let button;

  const onSubmitAnswer = () => {
    // call post request to backend, to submit answer and retrive result

    // setPassedResult(true);
    setPassedResult(false);
    submitQuiz();
  };

  const onClickNext = () => {
    nextQuestion();
  };

  if (index === quiz.length - 1) {
    button = (
      <button
        className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-[#C0EEF2] drop-shadow-xl"
        onClick={onSubmitAnswer}
      >
        <p className="font-inter text-black">Selesai</p>
      </button>
    );
  } else {
    button = (
      <button
        className="flex h-[40px] w-[150px] items-center justify-center rounded-full bg-[#C0EEF2] drop-shadow-xl"
        onClick={onClickNext}
      >
        <p className="font-inter text-black">Selanjutnya</p>
      </button>
    );
  }

  // format answer
  const options = formatOptionResponse(option_answer);

  return (
    <div className="rounded-[20px] bg-[#D9D9D9]">
      <div className="flex justify-center">
        <p className="font-poppins text-[12px] font-bold text-black md:text-[20px]">
          {question}
        </p>
      </div>
      <div className="mt-[15px] md:mt-[20px]">
        <Option url_image={url_image} options={options} />
      </div>
      <div className="mt-[19px] flex items-center justify-end">{button}</div>
    </div>
  );
};

export default Question;