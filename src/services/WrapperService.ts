import { UserQuery } from '../component/user-form';
import {DefaultService, OpenAPI} from '../gen/openapi'
import {Observable, from, map} from 'rxjs';

const {createQuestionsWithPdfCreateQuestionsWithPdfPost, createQuestionsWithTopicCreateQuestionsWithTopicPost} = DefaultService;

export type Question = {
    question: string;
    answers: string[];
  };

OpenAPI.BASE = 'http://localhost:8000';

export const createQuestion = (pdf: File | null, userQuery: UserQuery): Observable<Question[]> => {
    if (pdf) {
        return from(createQuestionsWithPdfCreateQuestionsWithPdfPost(userQuery.profile, userQuery.intent, {pdf_file: pdf})).pipe(
            map((questionsList) => questionsList.data.map(questionMapper)),
        );
    } else {
        return from(createQuestionsWithTopicCreateQuestionsWithTopicPost(userQuery.profile, userQuery.intent, userQuery.topic)).pipe(
            map((questionsList) => questionsList.data.map(questionMapper)),
        );
    }
}

const questionMapper = (question: Record<string, any>): Question => {
    return {
      question: question.question,
      answers: [""],
    };
  };
