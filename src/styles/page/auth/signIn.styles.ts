import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 130px;
  margin-bottom: 138px;

  & h2 {
    color: ${({ theme }) => theme.colors.grey2};
    font: ${({ theme }) => theme.fonts.caption};
    letter-spacing: -0.32px;
    font-size: 16px;

    & b {
      color: ${({ theme }) => theme.colors.primary1};
      font: ${({ theme }) => theme.fonts.body2};
      line-height: 150%;
      letter-spacing: -0.32px;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
`;

export const SignInForm = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 64px;

  background-color: ${({ theme }) => theme.colors.white};

  & h1 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const HelpText = styled.div`
  color: ${({ theme }) => theme.colors.primary2};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  height: 42px;
  width: 155px;
  cursor: pointer;
`;

export const LineText = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  & div {
    width: 113px;
    height: 1px;
    background: rgba(96, 95, 95, 0.35);
  }
`;

export const OnGoogle = styled.button`
  display: flex;
  padding: 13px 118px 13px 24px;
  align-items: center;
  gap: 94px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey1};
  width: 400px;
  color: ${({ theme }) => theme.colors.grey3};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.subtitle2};
  letter-spacing: -0.36px;
`;
