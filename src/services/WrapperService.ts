import {DefaultService, OpenAPI} from '../gen/openapi'
import {Observable, from, map, tap} from 'rxjs';

const {getBinQuestionGetBinQuestionGet} = DefaultService;

export type BinaryQuestionDto = {
    difficulty: number;
    desc: string;
    choice_1: string;
    choice_2: string;
};

OpenAPI.BASE = 'http://localhost:8000';

export const getBinQuestionGetBinQuestionGetWrapper = (id: number): Observable<BinaryQuestionDto> => {
  const cancelable = getBinQuestionGetBinQuestionGet(id);
  return from(cancelable).pipe(
    tap(
      {
        error: (err) => {
          cancelable.cancel();
          console.error(err);
        }
      }
    ),
    map((res) => res as BinaryQuestionDto)
  );
}
