import { AxiosError, AxiosResponse } from 'axios';

export interface IApiResponse {
  result: boolean;
  errCode?: number;
  message?: string;
}

export interface ApiBaseResponse {
  message: string;
  statusCode: number;
}

export interface AxiosErrorResponseData {
  message: string;
  statusCode: number;
  error?: string;
}

export interface CustomAxiosResponse extends AxiosResponse {
  data: AxiosErrorResponseData;
}

export interface ApiBaseError extends AxiosError {
  response: CustomAxiosResponse;
}

// Footer email input form data
export interface IFooterFormData {
  email: string;
}
