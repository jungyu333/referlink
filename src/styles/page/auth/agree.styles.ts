import styled from 'styled-components';

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
  margin-top: 175px;
  margin-bottom: 223px;

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const Header = styled.header`
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
