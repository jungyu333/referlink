import { IApiResponse } from '_types/common';

export interface IEmailFormData {
  email: string;
}

export interface ISignInFormData extends IEmailFormData {
  password: string;
}

export interface ISignUpFormData extends ISignInFormData {
  passwordCheck: string;
}

//회원 가입 api response
export interface IRegisterByEmailApiResponse extends IApiResponse {}

//로그인 api response
export interface ISignInByEmailApiResponse extends IApiResponse {
  data: {
    m_id: string;
  };
}
