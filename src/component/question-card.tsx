import React from "react";
import { QuestionDto } from "../services/WrapperService";

export interface QuestionCardProps {
  question: QuestionDto;
  lastQuestion: boolean;
  handleNext: () => void;
}

export const QuestionCard: React.FunctionComponent<QuestionCardProps> = ({question, handleNext, lastQuestion}) => {

  const [answered, setAnswered] = React.useState<boolean>(false);
  const [wasCorrect, setWasCorrect] = React.useState<boolean>(false);

  console.log(lastQuestion)

  const userAnswered = (id: number) => {
    setAnswered(true);
    setWasCorrect(id === question.correct_answer_id);
  }

  const onNext = () => {
    setAnswered(false);
    setWasCorrect(false);
    handleNext();
  }


  return (<><div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{question.question}</h2>
      <div className="grid">
       {question.options.map((option, index) => (
          <button className="btn btn-outline btn-primary" key={index} onClick={() => userAnswered(index)}>{option}</button>
        ))
       }
      </div>
    </div>
  </div>
  <div>
    {answered && wasCorrect && <div className="alert alert-success m-6">Correct</div>}
    {answered && !wasCorrect && <div className="alert alert-error m-6">{question.explanation}</div>}
    {answered && !lastQuestion && <button className="btn btn-primary m-6" onClick={onNext}>Next</button>}
  </div>
  </>
  );
};
