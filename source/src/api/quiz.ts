import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./config";

import { QuestionData, FormattedAnswer } from "../types/quiz";

type QuizResultResponse = {
  score: number;
};

const TEMP_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjUyOTA1M2IzMjIzODJiM2VhMDEwNWYxIiwiZW1haWwiOiJjb250b2hAZ21haWwuY29tIiwidXNlcm5hbWUiOiJuaXNhIiwiaWF0IjoxNjk4MTU4NjI3LCJleHAiOjE2OTgxNjIyMjd9.cB6o-Fg0nWm_zVPgvRr5EmWa60kR6Lol6zqafrgDMbU";

export const getQuizByLevel = async (
  level: number,
): Promise<QuestionData[]> => {
  const { data } = await axios.get<QuestionData[]>(
    `${BASE_URL}users/questions`,
    {
      params: {
        level: level,
      },
      headers: {
        Authorization: TEMP_TOKEN,
      },
    },
  );

  return data;
};

export const sentUserAnswer = async (
  userAnswer: FormattedAnswer,
): Promise<number> => {
  const { data } = await axios.post<
    FormattedAnswer,
    AxiosResponse<QuizResultResponse>
  >(`${BASE_URL}/users/answers`, userAnswer, {
    headers: {
      Authorization: TEMP_TOKEN,
    },
  });

  const { score } = data;

  return score;
};