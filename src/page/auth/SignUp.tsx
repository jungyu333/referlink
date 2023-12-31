import { useForm } from 'react-hook-form';
import { EmailFormData, SignUpFormData } from '_types/auth';
import { emailRegex, passwordRegex } from '@constant/regex';
import * as S from '@styles/page/auth/signUp.styles';
import { ToastBody } from '@components/common/toast';
import {
  Button,
  EmailInput,
  Fonts,
  LoadingSpinner,
  PasswordInput,
  TextInput,
  svgLogo,
} from 'referlink-ui';
import { useGetLocationState } from '@hooks/useGetLocationState';
import { useCustomToast } from '@hooks/useCustomToast';
import { useApiNavigation } from '@hooks/useApiNavigation';
import { Navigate } from 'react-router-dom';
import { getErrorResponse } from '@utils/error';
import { useDetailNavigation } from '@hooks/useDetailNavigation';
import { registerByEmail } from '@api/auth';
import { useCustomMutation } from '@hooks/useCustomMutation';
import { useSwitch } from '@hooks/useSwitch';

export const SignUp = () => {
  const locationState = useGetLocationState<EmailFormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: locationState?.email,
      password: '',
      passwordCheck: '',
      name: '',
    },
  });
  const [isLoading, onLoading, offLoading] = useSwitch();
  const regisgerMutation = useCustomMutation(registerByEmail, {
    onSuccess: (response) => {
      offLoading();
      const responseData = response.data;
      apiNavigation('/signin', responseData.message, responseData, info);
    },
    onError: (error) => {
      const responseError = getErrorResponse(error);
      if (responseError.statusCode === 409) {
        info(<ToastBody subText={responseError.message} />);
      }
      offLoading();
    },
  });

  const { info } = useCustomToast();

  const apiNavigation = useApiNavigation();
  const { pathNavigation } = useDetailNavigation();

  const onValid = async (formData: SignUpFormData) => {
    const { email, password, passwordCheck, name } = formData;

    onLoading();
    regisgerMutation.mutate({ email, password, passwordCheck, name });
  };

  if (!locationState?.email) {
    return <Navigate to="/" replace />;
  }

  return (
    <LoadingSpinner isLoading={isLoading}>
      <S.Wrapper>
        <S.Main>
          <S.Container>
            <S.Header>
              {svgLogo}
              <h1>회원가입</h1>
            </S.Header>
            <S.SignUpContainer>
              <S.SignUpForm>
                <TextInput
                  placeholder="이름을 입력해주세요."
                  label="이름"
                  error={errors.name?.message}
                  register={register('name', {
                    required: '이름을 입력해주세요.',
                  })}
                />

                <EmailInput
                  placeholder="이메일을 입력해주세요."
                  label="이메일 주소"
                  error={errors.email?.message}
                  register={register('email', {
                    pattern: {
                      value: emailRegex,
                      message: '형식에 맞지 않는 이메일입니다.',
                    },
                    required: '이메일을 입력해주세요.',
                  })}
                />

                <PasswordInput
                  label="비밀번호"
                  placeholder="8글자 작성"
                  error={errors.password?.message}
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

                <PasswordInput
                  label="비밀번호 재확인"
                  placeholder="비밀번호 재확인"
                  error={errors.passwordCheck?.message}
                  register={register('passwordCheck', {
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return (
                          password === value || '비밀번호가 일치하지 않습니다.'
                        );
                      },
                    },
                    minLength: {
                      value: 8,
                      message:
                        '8 자리 이상의 영문 , 숫자 조합의 비밀번호를 입력해주세요.',
                    },
                    required: '비밀번호를 다시 한번 입력해주세요.',
                  })}
                />
              </S.SignUpForm>
              <Button
                buttonText="가입하기"
                px="36px"
                py="24px"
                fontStyle={Fonts.subtitle2}
                onClick={handleSubmit(onValid)}
              />
            </S.SignUpContainer>
          </S.Container>
          <S.BottomText>
            이미 계정이 있으신가요?
            <b onClick={() => pathNavigation('/signin')}>로그인</b>
          </S.BottomText>
        </S.Main>
      </S.Wrapper>
    </LoadingSpinner>
  );
};
