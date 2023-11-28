import { ApiBaseResponse } from '_types/common';

export interface MyPageEditFormData {
  comment: string;
  email: string;
  job: string;
  name: string;
}

export interface GetUserInfoApiResponse extends ApiBaseResponse {
  data: UserInfo;
}

export type UserInfo = {
  email: string;
  exp: number;
  iat: number;
  name: string;
  uid: string;
};
