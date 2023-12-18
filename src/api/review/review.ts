import AuthApi from '@api/core/AuthApi';
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
