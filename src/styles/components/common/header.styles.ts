import { styled } from 'styled-components';

export const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
  width: 1440px;
  height: 80px;

  box-shadow: 0px 5px 100px 0px rgba(96, 95, 95, 0.05);
  overflow: hidden;
  margin: 0 auto;
  padding: 0 162px;
  display: flex;
  gap: 42px;
  align-items: center;
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const NavTabs = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const ButtonText = styled.div`
  color: ${({ theme }) => theme.colors.grey3};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;
  text-align: left;
  position: relative;
  cursor: pointer;
`;
