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
  const mock: BehaviorSubject<QuestionDto[]> = new BehaviorSubject<
    QuestionDto[]
  >([
      {
        question: 'What are some potential applications of NanoScribe?',
        options: [
          'A) Creating customized medical devices',
          'B) Designing new materials with unprecedented properties',
          'C) Revolutionizing production processes',
          'D) All of the above',
        ],
        correct_answer_id: 3,
        explanation:
          'NanoScribe has limitless applications in medicine, materials science, and manufacturing, making option D the correct answer.',
        topic: 'Applications of NanoScribe',
      },
      {
        question: 'How does NanoScribe work?',
        options: [
          'A) By manipulating individual atoms and molecules',
          'B) By using miniature 3D printers',
          'C) By arranging atoms and molecules with incredible precision',
          'D) All of the above',
        ],
        correct_answer_id: 3,
        explanation:
          'NanoScribe works by manipulating individual atoms and molecules using miniature 3D printers to arrange them with incredible precision, making option D the correct answer.',
        topic: 'How NanoScribe works',
      },
      {
        question: 'What is the potential impact of NanoScribe?',
        options: [
          'A) Transforming various industries',
          'B) Sparking new innovations',
          'C) Creating devices and structures that were previously deemed impossible',
          'D) All of the above',
        ],
        correct_answer_id: 3,
        explanation:
          'NanoScribe has the potential to transform various industries, spark new innovations, and create devices and structures that were previously deemed impossible, making option D the correct answer.',
        topic: 'Potential impact of NanoScribe',
      },
    ]);
  return mock.asObservable();
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
