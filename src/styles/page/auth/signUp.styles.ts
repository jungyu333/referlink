import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 130px;
  margin-bottom: 181px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SignUpContainer = styled.div`
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

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const TermsContainer = styled.div`
  width: 400px;
  height: 248px;
  border-radius: 8px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  position: relative;
`;

export const AllTerms = styled.div`
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

export const Line = styled.div`
  width: 399px;
  height: 1px;
  background: rgba(96, 95, 95, 0.35);
  position: absolute;
  top: 64px;
`;

export const Terms = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  top: 84px;
  left: 16px;
`;

export const TermItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 368px;
`;

export const TermContent = styled.div`
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

export const View = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  cursor: pointer;
`;

export const BottomText = styled.div`
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
