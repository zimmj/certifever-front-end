import {DefaultService, OpenAPI} from '../gen/openapi'
import {from} from 'rxjs';

const {getBinQuestionGetBinQuestionGet} = DefaultService;

OpenAPI.BASE = 'http://localhost:8000';

export const getBinQuestionGetBinQuestionGetWrapper = (id: number) => {
  return from(getBinQuestionGetBinQuestionGet(id));
}
