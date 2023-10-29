import React from "react";
import { QuestionDto, createQuestion } from "../services/WrapperService";
import { UserForm, UserQuery } from "./user-form";
import { QuestionCard } from "./question-card";

interface QuizzMasterState {
  currentQuestionIndex: number;
  lastQuestion: boolean;
  questions: QuestionDto[];
  userAnswers: string[];
  score: number;
  questionNumber: number;
  gameOver: boolean;
}

export const QuizzMaster: React.FC = () => {

  const [state, setState] = React.useState<QuizzMasterState>({
    currentQuestionIndex: 0,
    lastQuestion: false,
    questions: [],
    userAnswers: [],
    score: 0,
    questionNumber: 0,
    gameOver: true
  });

  const onUserSubmit = (formData: File | null, userQuery: UserQuery) => {
    createQuestion(formData, userQuery).subscribe((questions) => {
      setState({...state, questions, gameOver: false});
    });
  };
  const handleNext = () => {
      setState({...state, currentQuestionIndex: state.currentQuestionIndex + 1, lastQuestion: state.questions.length === state.currentQuestionIndex + 2});
  }

  return (
    <div>
      { (state.gameOver || state.questionNumber >= state.questions.length) ?
      // eslint-disable-next-line @typescript-eslint/no-empty-function
        (<UserForm onFormSubmit={onUserSubmit}></UserForm>)
      : (<QuestionCard lastQuestion={state.lastQuestion} handleNext={handleNext} question={state.questions[state.currentQuestionIndex]}></QuestionCard>)
      }
    </div>
  );
};
