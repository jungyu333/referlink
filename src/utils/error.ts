import { ApiBaseError, AxiosErrorResponseData } from '_types/common';

export const getErrorResponse = (errorObj: Error): AxiosErrorResponseData => {
  return (errorObj as ApiBaseError).response.data;
};
