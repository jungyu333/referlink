import { GetUserInfoApiResponse } from '_types/my';
import AuthApi from 'api/core/AuthApi';
import { AxiosResponse } from 'axios';

export const getUserInfo = async () => {
  try {
    const response = await AuthApi.post<
      void,
      AxiosResponse<GetUserInfoApiResponse>
    >(`/api/user/info`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
