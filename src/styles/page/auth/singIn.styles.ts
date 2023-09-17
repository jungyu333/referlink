import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  margin-top: 130px;
  margin-bottom: 235px;
  background-color: ${({ theme }) => theme.colors.white};

  & h1 {
    color: ${({ theme }) => theme.colors.gray4};
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

export const ButtonInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const LineText = styled.div`
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

export const OnGoogle = styled.button`
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
