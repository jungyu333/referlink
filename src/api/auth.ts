import {
  IRegisterByEmailApiResponse,
  ISignInByEmailApiResponse,
  ISignInFormData,
  ISignUpFormData,
} from '_types/auth';
import SignInApi from 'api/core/SignInApi';
import SignUpApi from 'api/core/SignUpApi';
import { AxiosResponse } from 'axios';
import { authService } from 'firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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

      const url = `?firebase_token=${userId}&email=${email}`;

      const response = await SignInApi.get<
        ISignInFormData,
        AxiosResponse<ISignInByEmailApiResponse>
      >(url);

      return response.data;
    } else {
      throw new Error('Failed to singin user with Firebase Auth.');
    }
  } catch (error) {
    throw error;
  }
};
