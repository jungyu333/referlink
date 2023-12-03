import { GetMyReviewListApiResponse } from '_types/reput';
import AuthApi from 'api/core/AuthApi';
import { AxiosResponse } from 'axios';

export const getMyReviewList = async () => {
  try {
    const response = await AuthApi.get<
      void,
      AxiosResponse<GetMyReviewListApiResponse>
    >(`/api/review/list`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
