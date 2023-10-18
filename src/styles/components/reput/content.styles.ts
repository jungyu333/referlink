import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey5};
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 101px;
  flex-direction: column;
  padding: 0 162px;
  padding-top: 103px;
  padding-bottom: 157px;
`;

export const Header = styled.header`
  display: flex;
  width: 1116px;
  align-items: center;
  gap: 355px;

  & h1 {
    display: flex;
    width: 390px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }

  & > div {
    display: flex;
    width: 371px;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 24px;
`;
