import AuthApi from '@api/core/AuthApi';
import { WriteReviewRequestFormData } from '_types/reput';
import { GetSurveyListApiResponse } from '_types/review';
import { AxiosResponse } from 'axios';

export const getSurveyList = async () => {
  try {
    const response = await AuthApi.get<
      void,
      AxiosResponse<GetSurveyListApiResponse>
    >('/api/survey');

    return response;
  } catch (error) {
    throw error;
  }
};

export const createReview = async (param: WriteReviewRequestFormData) => {
  try {
    const response = await AuthApi.post<WriteReviewRequestFormData, any>(
      `/api/review/create`,
    );

    return response;
  } catch (error) {
    throw error;
  }
};
