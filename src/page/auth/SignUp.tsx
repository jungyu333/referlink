import { styled } from 'styled-components';
import { ReactComponent as UnCheckSVG } from '@styles/images/svg/uncheck.svg';
import { useForm } from 'react-hook-form';
import { ISignUpFormData } from '_types/auth';
import { EmailInput, PasswordInput } from '@components/common';
import { emailRegex, passwordRegex } from '@constant/regex';
import { Button } from '@components/common/button';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUpFormData>();

  const onValid = (formData: ISignUpFormData) => {
    console.log(formData);
  };

  return (
    <Wrapper>
      <SignUpContainer>
        <h1>회원가입</h1>
        <SignUpForm>
          <InputContainer>
            <Inner>
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
                isLabel={false}
                label="비밀번호"
                placeholder="비밀번호 재확인"
                error={
                  errors.password?.message || errors.passwordCheck?.message
                }
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
            </Inner>

            <TermsContainer>
              <AllTerms>
                <UnCheckSVG />
                모든 약관에 동의합니다.
              </AllTerms>
              <Line />
              <Terms>
                <TermItem>
                  <TermContent>
                    <UnCheckSVG />
                    <h2>
                      <b>(필수) </b>
                      서비스 이용약관
                    </h2>
                  </TermContent>
                  <View>보기</View>
                </TermItem>

                <TermItem>
                  <TermContent>
                    <UnCheckSVG />
                    <h2>
                      <b>(필수) </b>
                      개인정보 수집 및 이용
                    </h2>
                  </TermContent>
                  <View>보기</View>
                </TermItem>

                <TermItem>
                  <TermContent>
                    <UnCheckSVG />
                    <h2>
                      <b>(필수) </b>제 3자 정보제공 동의
                    </h2>
                  </TermContent>
                  <View>보기</View>
                </TermItem>

                <TermItem>
                  <TermContent>
                    <UnCheckSVG />
                    <h2>
                      <b>(선택) </b>
                      광고성 정보 수신
                    </h2>
                  </TermContent>
                  <View>보기</View>
                </TermItem>
              </Terms>
            </TermsContainer>
          </InputContainer>

          <Button buttonText="가입하기" onClick={handleSubmit(onValid)} />
        </SignUpForm>
      </SignUpContainer>

      <BottomText>
        이미 계정이 있으신가요?
        <b>로그인</b>
      </BottomText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 130px;
  margin-bottom: 91px;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  & h1 {
    color: ${({ theme }) => theme.colors.black};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const TermsContainer = styled.div`
  width: 400px;
  height: 248px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  position: relative;
`;

const AllTerms = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 20px;
  left: 16px;
  color: ${({ theme }) => theme.colors.gray3};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;

const Line = styled.div`
  width: 399px;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
  position: absolute;
  top: 64px;
`;

const Terms = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  top: 84px;
  left: 16px;
`;

const TermItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 368px;
`;

const TermContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & h2 {
    color: ${({ theme }) => theme.colors.gray3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

const View = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
`;

const BottomText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  color: ${({ theme }) => theme.colors.gray3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;

  & b {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.body};
    font-weight: 700;
    letter-spacing: -0.32px;
    cursor: pointer;
  }
`;
