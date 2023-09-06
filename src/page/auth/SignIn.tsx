import { styled } from 'styled-components';
import { ReactComponent as EyeSVG } from '@styles/images/svg/eye.svg';

export const SignIn = () => {
  return (
    <Wrapper>
      <HeaderText>로그인</HeaderText>

      <AuthForm>
        <InputContainer>
          <Input>
            <InnerContainer>
              <label>이메일</label>
              <input type="email" placeholder="이메일을 입력해주세요." />
            </InnerContainer>

            {/* <Validation>support text</Validation> */}
          </Input>
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

        <ButtonContainer></ButtonContainer>
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
