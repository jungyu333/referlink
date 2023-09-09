import { styled } from 'styled-components';
import { ReactComponent as EyeSVG } from '@styles/images/svg/eye.svg';
import { ReactComponent as GoogleSVG } from '@styles/images/svg/google.svg';
import { EmailInput } from '@components/common';
import { useForm } from 'react-hook-form';
import { ISignInFormData } from '_types/auth';
import { emailRegex } from '@constant/regex';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormData>();
  return (
    <Wrapper>
      <HeaderText>로그인</HeaderText>

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
          <Input>
            <InnerContainer>
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호를 입력해주세요." />

              <EyeSVG />
            </InnerContainer>

            {/* <Validation>support text</Validation> */}
          </Input>
          <HelpText>비밀번호를 잊으셨나요?</HelpText>
        </InputContainer>

        <ButtonContainer>
          <ButtonInner>
            <PrimaryButton>로그인</PrimaryButton>
            <NormalButton>회원가입</NormalButton>
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
`;

const HeaderText = styled.h1`
  color: ${({ theme }) => theme.colors.gray4};
  font: ${({ theme }) => theme.fonts.headline1};
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

const Input = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  position: relative;
  & label {
    display: flex;
    align-items: center;
    align-self: stretch;

    color: ${({ theme }) => theme.colors.gray4};
    font: ${({ theme }) => theme.fonts.subtitle2};
  }

  & input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    height: 58px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray1};

    display: flex;
    padding: 10px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray1};
      font: ${({ theme }) => theme.fonts.body};
    }
  }

  & svg {
    position: absolute;
    left: 350px;
    top: 53px;
  }
`;

const Validation = styled.span`
  display: flex;
  align-items: center;
  align-self: stretch;

  color: ${({ theme }) => theme.colors.error};
  font: ${({ theme }) => theme.fonts.caption};
  letter-spacing: -0.26px;
`;

const HelpText = styled.div`
  color: ${({ theme }) => theme.colors.primary2};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  height: 42px;
  width: 155px;
`;

const ButtonInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const PrimaryButton = styled.button`
  display: flex;
  width: 400px;
  height: 58px;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary1};
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
  border: none;
  cursor: pointer;
`;

const NormalButton = styled.button`
  display: flex;
  width: 400px;
  height: 58px;
  padding: 24px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary1};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary1};
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
  cursor: pointer;
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
