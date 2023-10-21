import { ReactComponent as GoogleSVG } from '@styles/images/svg/google.svg';
import { useForm } from 'react-hook-form';
import { ISignInFormData } from '_types/auth';
import { emailRegex, passwordRegex } from '@constant/regex';
import { EmailInput, PasswordInput } from '@components/common/input';
import { Button } from '@components/common/button';
import * as S from '@styles/page/auth/signIn.styles';
import useDetailNavigation from '@hooks/useDetailNavigation';
import { useApi } from '@hooks/useApi';
import { signInByEmail } from 'api';
import useApiNavigation from '@hooks/useApiNavigation';
import { showAlertToast } from '@components/common/toast';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormData>();

  const { pathNavigation } = useDetailNavigation('signup');

  const { execute } = useApi(signInByEmail);

  const apiNavigation = useApiNavigation();

  const onValid = async (formData: ISignInFormData) => {
    const { email, password } = formData;
    const responseOrError = await execute({
      email,
      password,
    });

    // if (responseOrError instanceof Error) {
    //   showAlertToast.info('로그인에 실패하였습니다.');
    // } else {
    //   apiNavigation(
    //     '/',
    //     '로그인에 성공하였습니다.',
    //     responseOrError,
    //     showAlertToast,
    //   );
    // }
  };

  return (
    <S.Wrapper>
      <S.SignInForm>
        <h1>로그인</h1>

        <S.AuthForm>
          <S.InputContainer>
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
          </S.InputContainer>

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
            <S.HelpText>비밀번호를 잊으셨나요?</S.HelpText>
          </S.InputContainer>

          <S.ButtonContainer>
            <Button buttonText="로그인" onClick={handleSubmit(onValid)} />

            <S.LineText>
              <div />
              SNS 간편 로그인
              <div />
            </S.LineText>

            <S.OnGoogle>
              <GoogleSVG />
              <div>Google로 계속하기</div>
            </S.OnGoogle>
          </S.ButtonContainer>
        </S.AuthForm>
      </S.SignInForm>

      <h2>
        계정이 없으신가요? <b onClick={pathNavigation}>가입하기</b>
      </h2>
    </S.Wrapper>
  );
};
