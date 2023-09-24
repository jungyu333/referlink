import {
  IRegisterByEmailApiResponse,
  ISignInFormData,
  ISignUpFormData,
} from '_types/auth';
import SignUpApi from 'api/core/SignUpApi';
import { AxiosResponse } from 'axios';
import { authService } from 'firebase-config';
import { createUserWithEmailAndPassword, getIdToken } from 'firebase/auth';

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
      const token = await getIdToken(user);

      const url = `?firebase_token=${token}&email=${email}`;

      const response = await SignUpApi.post<
        ISignInFormData,
        AxiosResponse<IRegisterByEmailApiResponse>
      >(url);

      return response.data;
    } else {
      throw new Error('Failed to create user with Firebase Auth.');
    }
  } catch (error) {
    console.error('Error during sign-up:', error);
    throw error;
  }
};
