import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 80px;
  align-items: center;
  padding: 103px 162px 82px 162px;
  background-color: ${({ theme }) => theme.colors.grey5};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`;

export const HeadLine = styled.section`
  display: flex;
  align-items: center;

  & section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;

    & div {
      display: flex;
      align-items: center;
      gap: 8px;

      & h2 {
        color: ${({ theme }) => theme.colors.grey2};
        font: ${({ theme }) => theme.fonts.subtitle1};
        letter-spacing: -0.4px;
      }
    }

    & h1 {
      color: ${({ theme }) => theme.colors.grey3};
      font: ${({ theme }) => theme.fonts.headline1};
      letter-spacing: -0.68px;

      & b {
        color: ${({ theme }) => theme.colors.primary1};
      }
    }
  }
`;

export const Warning = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;

  & p {
    color: ${({ theme }) => theme.colors.error};
    text-align: center;
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  & section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    & h1 {
      color: ${({ theme }) => theme.colors.grey3};
      font: ${({ theme }) => theme.fonts.subtitle1};
      letter-spacing: -0.4px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
  flex: 1 0 0;
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
`;
