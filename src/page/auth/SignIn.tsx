import { styled } from 'styled-components';
import { ReactComponent as GoogleSVG } from '@styles/images/svg/google.svg';
import { useForm } from 'react-hook-form';
import { ISignInFormData } from '_types/auth';
import { emailRegex, passwordRegex } from '@constant/regex';
import { EmailInput, PasswordInput } from '@components/common/input';
import { Button } from '@components/common/button';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormData>();

  const onValid = (formData: ISignInFormData) => {
    console.log(formData);
  };
  return (
    <Wrapper>
      <h1>로그인</h1>

      <AuthForm>
        <InputContainer>
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
        </InputContainer>

        <InputContainer>
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
          <HelpText>비밀번호를 잊으셨나요?</HelpText>
        </InputContainer>

        <ButtonContainer>
          <ButtonInner>
            <Button buttonText="로그인" onClick={handleSubmit(onValid)} />
            <Button buttonText="회원가입" isPrimary={false} />
          </ButtonInner>

          <LineText>
            <div />
            SNS 간편 로그인
            <div />
          </LineText>

          <OnGoogle>
            <GoogleSVG />
            Google로 계속하기
          </OnGoogle>
        </ButtonContainer>
      </AuthForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin: 0 auto;
  margin-top: 130px;
  margin-bottom: 219px;
  background-color: ${({ theme }) => theme.colors.white};

  & h1 {
    color: ${({ theme }) => theme.colors.gray4};
    font: ${({ theme }) => theme.fonts.headline1};
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 400px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

const HelpText = styled.div`
  color: ${({ theme }) => theme.colors.primary2};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  height: 42px;
  width: 155px;
  cursor: pointer;
`;

const ButtonInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const LineText = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  & div {
    width: 113px;
    height: 1px;
    background: rgba(96, 95, 95, 0.35);
  }
`;

const OnGoogle = styled.button`
  display: flex;
  height: 58px;
  padding: 19px 128px 19px 24px;
  align-items: flex-start;
  gap: 84px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.gray3};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 400px;
`;
