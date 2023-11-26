import {
  CheckMemberResponse,
  EmailFormData,
  RegisterByEmailApiResponse,
  ISignInByEmailApiResponse,
  SignInFormData,
  SignUpFormData,
} from '_types/auth';
import { apiConfig } from 'api/config';
import Api from 'api/core/Api';
import { AxiosResponse } from 'axios';
import { authService } from 'firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Cookies from 'js-cookie';

export const registerByEmail = async (params: SignUpFormData) => {
  try {
    const { email, password } = params;

    const response = await Api.post<
      SignUpFormData,
      AxiosResponse<RegisterByEmailApiResponse>
    >(`/api/user/register`, {
      email,
      password,
      name: 'jungyu',
      phone: '010-1234-5678',
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signInByEmail = async (params: SignInFormData) => {
  try {
    const { email, password }: SignInFormData = params;

    const userCredential = await signInWithEmailAndPassword(
      authService,
      email,
      password,
    );

    const user = userCredential.user;

    if (user) {
      const userId = user.uid;

      const endPoint = `?uid=${userId}&email=${email}`;

      const response = await Api.get<
        SignInFormData,
        AxiosResponse<ISignInByEmailApiResponse>
      >(endPoint, { prefix: apiConfig.SignIn.prefix });

      if (response.data.result) {
        Cookies.set('accessToken', response.data.data.m_id, {
          expires: 1 / 12,
        });
      }

      return response.data;
    } else {
      throw new Error('Failed to singin user with Firebase  Auth.');
    }
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    const currentUser = authService.currentUser;
    if (currentUser) {
      await authService.signOut();
      Cookies.remove('accessToken');
    } else {
      return;
    }
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

    return response.data;
  } catch (error) {
    throw error;
  }
};
