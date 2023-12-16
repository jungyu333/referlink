import AuthApi from '@api/core/AuthApi';
import { GetMyReviewListApiResponse } from '_types/reput';
import { AxiosResponse } from 'axios';

export const getMyReviewList = async () => {
  try {
    const response = await AuthApi.get<
      void,
      AxiosResponse<GetMyReviewListApiResponse>
    >(`/api/review/list`);

    return response;
  } catch (error) {
    throw error;
  }
};
