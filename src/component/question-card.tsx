import React from "react";
import { BinaryQuestionDto } from "../services/WrapperService";

export interface QuestionCardProps {
  question: BinaryQuestionDto;
  userAnswer: (answer: string) => void;
}

export const QuestionCard: React.FunctionComponent<QuestionCardProps> = ({question, userAnswer}) => {


  return <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{question.desc}</h2>
      <div className="flex justify-space-between">
        <button className="btn btn-outline" onClick={() => userAnswer(question.choice_1)}>
          {question.choice_1}
        </button>
        <button className="btn btn-outline" onClick={() => userAnswer(question.choice_2)}>{question.choice_2}</button>
      </div>
    </div>
  </div>;
};
