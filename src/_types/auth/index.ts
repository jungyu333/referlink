import { ApiBaseResponse, IApiResponse } from '_types/common';

export interface EmailFormData {
  email: string;
}

export interface ISignInFormData extends EmailFormData {
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

//회원 체크 api response
export interface CheckMemberResponse extends ApiBaseResponse {
  data: {
    isExist: boolean;
  };
}
