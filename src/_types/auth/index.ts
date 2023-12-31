import { ApiBaseResponse, IApiResponse } from '_types/common';

export interface EmailFormData {
  email: string;
}

export interface SignInFormData extends EmailFormData {
  password: string;
}

export interface SignUpFormData extends SignInFormData {
  passwordCheck: string;
  name: string;
}

//회원 가입 api response
export interface RegisterByEmailApiResponse extends ApiBaseResponse {
  data: {
    email: string;
    name: string;
    uid: string;
  };
}

//로그인 api response
export interface SignInByEmailApiResponse extends ApiBaseResponse {
  data: {
    email: string;
    name: string;
    uid: string;
    access_token: string;
  };
}

//회원 체크 api response
export interface CheckMemberResponse extends ApiBaseResponse {
  data: {
    isExist: boolean;
  };
}
