import { IApiResponse } from '_types/common';

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface ISignUpFormData extends ISignInFormData {
  passwordCheck: string;
}

//회원 가입 api response
export interface IRegisterByEmailApiResponse extends IApiResponse {}
