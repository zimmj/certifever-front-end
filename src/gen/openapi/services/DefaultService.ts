/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BinaryQuestion } from '../models/BinaryQuestion';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Root
     * @returns any Successful Response
     * @throws ApiError
     */
    public static rootGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

    /**
     * Create Binary Question
     * @param difficulty 
     * @param desc 
     * @param choice1 
     * @param choice2 
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createBinaryQuestionCreateBinQuestionPost(
difficulty: number,
desc: string,
choice1: string,
choice2: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/create_bin_question',
            query: {
                'difficulty': difficulty,
                'desc': desc,
                'choice_1': choice1,
                'choice_2': choice2,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Bin Question
     * @param id 
     * @returns BinaryQuestion Successful Response
     * @throws ApiError
     */
    public static getBinQuestionGetBinQuestionGet(
id: number,
): CancelablePromise<BinaryQuestion> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/get_bin_question',
            query: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
