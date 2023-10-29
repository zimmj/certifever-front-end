import React from "react";
import { QuestionDto } from "../services/WrapperService";

export interface QuestionCardProps {
  question: QuestionDto;
  userAnswer: (answer: string) => void;
}

export const QuestionCard: React.FunctionComponent<QuestionCardProps> = ({question, userAnswer}) => {

  return <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{question.question}</h2>
      <div className="grid">
       {question.options.map((option, index) => (
          <button className="btn btn-outline btn-primary" key={index} onClick={() => userAnswer(option)}>{option}</button>
        ))
       }
      </div>
    </div>
  </div>;
};
