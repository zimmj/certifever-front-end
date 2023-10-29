/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_create_questions_with_pdf_create_questions_with_pdf_post } from '../models/Body_create_questions_with_pdf_create_questions_with_pdf_post';
import type { Body_reinforce_auto_reinforce_auto_post } from '../models/Body_reinforce_auto_reinforce_auto_post';
import type { QuestionsList } from '../models/QuestionsList';

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
     * Create Questions With Topic
     * @param profile 
     * @param intent 
     * @param topic 
     * @returns QuestionsList Successful Response
     * @throws ApiError
     */
    public static createQuestionsWithTopicCreateQuestionsWithTopicPost(
profile: string,
intent: string,
topic: string,
): CancelablePromise<QuestionsList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/create_questions_with_topic',
            query: {
                'profile': profile,
                'intent': intent,
                'topic': topic,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Questions With Pdf
     * @param profile 
     * @param intent 
     * @param formData 
     * @returns QuestionsList Successful Response
     * @throws ApiError
     */
    public static createQuestionsWithPdfCreateQuestionsWithPdfPost(
profile: string,
intent: string,
formData: Body_create_questions_with_pdf_create_questions_with_pdf_post,
): CancelablePromise<QuestionsList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/create_questions_with_pdf',
            query: {
                'profile': profile,
                'intent': intent,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Reinforce On Topics
     * @param requestBody 
     * @returns QuestionsList Successful Response
     * @throws ApiError
     */
    public static reinforceOnTopicsReinforceOnTopicsPost(
requestBody: Array<string>,
): CancelablePromise<QuestionsList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/reinforce_on_topics',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Reinforce Auto
     * @param requestBody 
     * @returns QuestionsList Successful Response
     * @throws ApiError
     */
    public static reinforceAutoReinforceAutoPost(
requestBody: Body_reinforce_auto_reinforce_auto_post,
): CancelablePromise<QuestionsList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/reinforce_auto',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Adjust Difficulty
     * @param topic 
     * @param difficultyAdjustment 
     * @returns QuestionsList Successful Response
     * @throws ApiError
     */
    public static adjustDifficultyAdjustDifficultyPost(
topic: string,
difficultyAdjustment: number,
): CancelablePromise<QuestionsList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/adjust_difficulty',
            query: {
                'topic': topic,
                'difficulty_adjustment': difficultyAdjustment,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
