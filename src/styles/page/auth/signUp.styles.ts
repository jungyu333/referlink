import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey5};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  display: inline-flex;
  padding: 100px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 40px 0px rgba(0, 0, 0, 0.05);
  margin-top: 114px;
  margin-bottom: 162px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey4};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const BottomText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  color: ${({ theme }) => theme.colors.grey3};
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
