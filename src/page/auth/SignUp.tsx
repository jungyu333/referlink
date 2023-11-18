import { useForm } from 'react-hook-form';
import { ISignUpFormData } from '_types/auth';
import { emailRegex, passwordRegex } from '@constant/regex';
import * as S from '@styles/page/auth/signUp.styles';
import { Term } from '@components/auth';
import useAgreements from '@hooks/useAgreements';
import { useApi } from '@hooks/useApi';
import { registerByEmail } from 'api';
import useApiNavigation from '@hooks/useApiNavigation';
import { ToastBody } from '@components/common/toast';
import useCustomToast from '@hooks/useCustomToast';
import { Button, EmailInput, PasswordInput } from 'referlink-ui';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUpFormData>();

  const { execute } = useApi(registerByEmail);
  const { info } = useCustomToast();

  const {
    agreements,
    toggleAgreement,
    toggleAll,
    areRequiredChecked,
    allChecked,
  } = useAgreements();

  const apiNavigation = useApiNavigation();

  const onValid = async (formData: ISignUpFormData) => {
    if (areRequiredChecked()) {
      const responseOrError = await execute({
        email: formData.email,
        password: formData.password,
        passwordCheck: formData.passwordCheck,
      });

      if (responseOrError instanceof Error) {
        info(<ToastBody subText="이미 사용중인 이메일입니다." />);
      } else {
        apiNavigation(
          '/signin',
          '회원가입에 성공하였습니다.',
          responseOrError,
          info,
        );
      }
    } else {
      info(<ToastBody subText="약관 동의를 해주세요" />);
    }
  };

  return (
    <S.Wrapper>
      <S.SignUpContainer>
        <h1>회원가입</h1>
        <S.SignUpForm>
          <S.InputContainer>
            <S.Inner>
              <EmailInput
                placeholder="이메일을 입력해주세요."
                label="이메일"
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
            </S.Inner>
            <Term
              allChecked={allChecked}
              toggleAgreement={toggleAgreement}
              toggleAll={toggleAll}
              agreements={agreements}
            />
          </S.InputContainer>

          <Button buttonText="가입하기" onClick={handleSubmit(onValid)} />
        </S.SignUpForm>
      </S.SignUpContainer>

      <S.BottomText>
        이미 계정이 있으신가요?
        <b>로그인</b>
      </S.BottomText>
    </S.Wrapper>
  );
};
