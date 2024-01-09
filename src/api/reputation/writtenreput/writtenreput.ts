import AuthApi from '@api/core/AuthApi';
import { GetWrittenReviewListApiResponse } from '_types/reput';
import { AxiosResponse } from 'axios';

export const getWrittenReviewList = async () => {
  try {
    const response = await AuthApi.get<
      void,
      AxiosResponse<GetWrittenReviewListApiResponse>
    >(`/api/review/list/written`);

    return response;
  } catch (error) {
    throw error;
  }
};
