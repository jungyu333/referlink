import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomNavLink = styled(NavLink)<{
  $width: string;
  $height: string;
}>`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  font: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.32px;

  &.active {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.body2};
  }
`;
