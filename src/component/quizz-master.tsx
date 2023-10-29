import React from "react";
import { QuestionDto, createQuestion } from "../services/WrapperService";
import { UserForm, UserQuery } from "./user-form";

interface QuizzMasterState {
  questions: QuestionDto[];
  userAnswers: string[];
  score: number;
  questionNumber: number;
  gameOver: boolean;
}

export const QuizzMaster: React.FC = () => {

  const [state, setState] = React.useState<QuizzMasterState>({
    questions: [],
    userAnswers: [],
    score: 0,
    questionNumber: 0,
    gameOver: true
  });

  const onUserSubmit = (formData: File | null, userQuery: UserQuery) => {
    console.log(formData, userQuery);
    createQuestion(formData, userQuery).subscribe((questions) => {
      setState({...state, questions, gameOver: false});
  });
};

  return (
    <div>
      <h2>Quizz Master</h2>
      { (state.gameOver || state.questionNumber >= state.questions.length) ?
      // eslint-disable-next-line @typescript-eslint/no-empty-function
        (<UserForm onFormSubmit={onUserSubmit}></UserForm>)
      : (<div> Quize</div>)
      }
    </div>
  );
};
