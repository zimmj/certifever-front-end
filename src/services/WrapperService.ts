import { UserQuery } from '../component/user-form';
import {DefaultService, OpenAPI, Question} from '../gen/openapi'
import {BehaviorSubject, Observable, from, map} from 'rxjs';

const {createQuestionsWithPdfCreateQuestionsWithPdfPost, createQuestionsWithTopicCreateQuestionsWithTopicPost} = DefaultService;

export type QuestionDto = {
  question: string;
  options: string[];
  correct_answer_id: number;
  explanation: string;
  topic: string;
};

OpenAPI.BASE = 'http://localhost:8080';

export const createQuestion = (pdf: File | null, userQuery: UserQuery): Observable<QuestionDto[]> => {

  if (pdf) {
        return from(createQuestionsWithPdfCreateQuestionsWithPdfPost(userQuery.profile, userQuery.intent, {pdf_file: pdf as Blob})).pipe(
            map((questionsList) => questionsList.data.map(questionMapper)),
        );
    } else {
        return from(createQuestionsWithTopicCreateQuestionsWithTopicPost(userQuery.profile, userQuery.intent, userQuery.topic)).pipe(
            map((questionsList) => questionsList.data.map(questionMapper)),
        );
    }
}

const questionMapper = (question: Question): QuestionDto => {
    return question as QuestionDto;
  };
