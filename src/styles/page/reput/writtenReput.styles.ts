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
  align-items: center;
  justify-content: space-between;
  & h1 {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 24px;
`;
