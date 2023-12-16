import { useForm } from 'react-hook-form';
import { EmailFormData, SignInFormData } from '_types/auth';
import { emailRegex, passwordRegex } from '@constant/regex';
import * as S from '@styles/page/auth/signIn.styles';
import { ToastBody } from '@components/common/toast';
import {
  Button,
  EmailInput,
  GoogleButton,
  LineText,
  LoadingSpinner,
  PasswordInput,
  svgLogo,
} from 'referlink-ui';
import { useCustomToast } from '@hooks/useCustomToast';
import { useApiNavigation } from '@hooks/useApiNavigation';
import { getErrorResponse } from '@utils/error';
import { signInByEmail } from '@api/auth';
import { useGetLocationState } from '@hooks/useGetLocationState';
import { Navigate } from 'react-router-dom';
import { useCustomMutation } from '@hooks/useCustomMutation';
import { useSwitch } from '@hooks/useSwitch';

export const SignIn = () => {
  const locationState = useGetLocationState<EmailFormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: locationState?.email,
      password: '',
    },
  });

  const [isLoading, onLoading, offLoading] = useSwitch();

  const { info } = useCustomToast();
  const apiNavigation = useApiNavigation();

  const signinMutation = useCustomMutation(signInByEmail, {
    onSuccess: (response) => {
      offLoading();
      const responseData = response.data;
      apiNavigation('/', responseData.message, responseData, info);
    },
    onError: (error) => {
      const responseError = getErrorResponse(error);
      if (responseError.statusCode === 409) {
        info(<ToastBody subText={responseError.message} />);
      }
      offLoading();
    },
  });

  const onValid = async (formData: SignInFormData) => {
    const { email, password } = formData;
    onLoading();
    signinMutation.mutate({ email, password });
  };

  if (!locationState?.email) {
    return <Navigate to="/" replace />;
  }

  return (
    <LoadingSpinner isLoading={isLoading}>
      <S.Wrapper>
        <S.Main>
          <S.Header>
            {svgLogo}
            <h1>로그인</h1>
          </S.Header>

          <S.SignInForm>
            <EmailInput
              label="이메일"
              placeholder="이메일을 입력해주세요."
              error={errors.email?.message}
              register={register('email', {
                pattern: {
                  value: emailRegex,
                  message: '형식에 맞지 않는 이메일입니다.',
                },
                required: '이메일을 입력해주세요.',
              })}
            />

            <S.InputContainer>
              <PasswordInput
                label="비밀번호"
                error={errors.password?.message}
                placeholder="비밀번호를 입력해주세요."
                register={register('password', {
                  pattern: {
                    value: passwordRegex,
                    message:
                      '8 자리 이상의 영문 , 숫자 조합의 비밀번호를 입력해주세요.',
                  },
                  minLength: {
                    value: 8,
                    message:
                      '8 자리 이상의 영문 , 숫자 조합의 비밀번호를 입력해주세요.',
                  },
                  required: '비밀번호를 입력해주세요.',
                })}
              />
              <S.FindPassword>비밀번호를 잊으셨나요?</S.FindPassword>
            </S.InputContainer>

            <S.ButtonContainer>
              <Button buttonText="로그인" onClick={handleSubmit(onValid)} />

              <LineText label="SNS 간편 로그인" />

              <GoogleButton
                buttonText="Google로 계속하기"
                onClick={() => console.log('google')}
              />
            </S.ButtonContainer>
          </S.SignInForm>
        </S.Main>
      </S.Wrapper>
    </LoadingSpinner>
  );
};
