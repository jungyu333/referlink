import { useForm } from 'react-hook-form';
import { SignInFormData } from '_types/auth';
import { emailRegex, passwordRegex } from '@constant/regex';
import * as S from '@styles/page/auth/signIn.styles';
import { useApi } from '@hooks/useApi';
import { ToastBody } from '@components/common/toast';
import {
  Button,
  EmailInput,
  GoogleButton,
  LineText,
  PasswordInput,
  svgLogo,
} from 'referlink-ui';
import { useCustomToast } from '@hooks/useCustomToast';
import { useApiNavigation } from '@hooks/useApiNavigation';
import { getErrorResponse } from '@utils/error';
import { signInByEmail } from '@api/auth';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const { execute } = useApi(signInByEmail);
  const { info } = useCustomToast();
  const apiNavigation = useApiNavigation();

  const onValid = async (formData: SignInFormData) => {
    const { email, password } = formData;

    const responseResult = await execute({
      email,
      password,
    });

    if (responseResult instanceof Error) {
      const error = getErrorResponse(responseResult);
      if (error.statusCode === 409) info(<ToastBody subText={error.message} />);
    } else {
      apiNavigation('/', responseResult.message, responseResult, info);
    }
  };

  return (
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
  );
};
