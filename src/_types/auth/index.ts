export interface ISignInFormData {
  email: string;
  password: string;
}

export interface ISignUpFormData extends ISignInFormData {
  passwordCheck: string;
}
