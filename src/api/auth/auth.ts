import {
  CheckMemberResponse,
  EmailFormData,
  RegisterByEmailApiResponse,
  SignInByEmailApiResponse,
  SignInFormData,
  SignUpFormData,
} from '_types/auth';
import Api from 'api/core/Api';
import { AxiosResponse } from 'axios';
import { authService } from 'firebase-config';
import Cookies from 'js-cookie';

export const registerByEmail = async (params: SignUpFormData) => {
  try {
    const { email, password, name } = params;

    const json = {
      email: email,
      password: password,
      name: name,
    };

    const response = await Api.post<
      SignUpFormData,
      AxiosResponse<RegisterByEmailApiResponse>
    >(`/api/user/register`, json);

    return response;
  } catch (error) {
    throw error;
  }
};

export const signInByEmail = async (params: SignInFormData) => {
  try {
    const { email, password } = params;

    const json = {
      email: email,
      password: password,
    };
    const response = await Api.post<
      SignInFormData,
      AxiosResponse<SignInByEmailApiResponse>
    >(`/api/user/login`, json);

    const accessToken = response.data.data.access_token;

    if (accessToken) {
      Cookies.set('accessToken', accessToken);
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const logOut = async () => {
  try {
    //logout api call

    Cookies.remove('accessToken');
  } catch (error) {
    throw error;
  }
};

export const checkMember = async (params: EmailFormData) => {
  try {
    const { email } = params;

    const response = await Api.get<
      EmailFormData,
      AxiosResponse<CheckMemberResponse>
    >(`/api/user/check/${email}`);

    return response;
  } catch (error) {
    throw error;
  }
};
