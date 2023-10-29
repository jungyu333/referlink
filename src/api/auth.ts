import {
  IRegisterByEmailApiResponse,
  ISignInByEmailApiResponse,
  ISignInFormData,
  ISignUpFormData,
} from '_types/auth';
import { apiConfig } from 'api/config';
import Api from 'api/core/Api';
import SignInApi from 'api/core/SignInApi';
import SignUpApi from 'api/core/SignUpApi';
import { AxiosResponse } from 'axios';
import { authService } from 'firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Cookies from 'js-cookie';

export const registerByEmail = async (params: ISignUpFormData) => {
  try {
    const { email, password } = params;

    const userCredential = await createUserWithEmailAndPassword(
      authService,
      email,
      password,
    );
    const user = userCredential.user;

    if (user) {
      const userId = user.uid;

      const url = `?uid=${userId}&email=${email}`;

      const response = await SignUpApi.post<
        ISignUpFormData,
        AxiosResponse<IRegisterByEmailApiResponse>
      >(url);

      return response.data;
    } else {
      throw new Error('Failed to create user with Firebase Auth.');
    }
  } catch (error) {
    throw error;
  }
};

export const signInByEmail = async (params: ISignInFormData) => {
  try {
    const { email, password }: ISignInFormData = params;

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
        ISignInFormData,
        AxiosResponse<ISignInByEmailApiResponse>
      >(endPoint, { prefix: apiConfig.SignIn.prefix });

      if (response.data.result) {
        Cookies.set('accessToken', response.data.data.m_id, {
          expires: 1 / 12,
        });
      }

      return response.data;
    } else {
      throw new Error('Failed to singin user with Firebase Auth.');
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
