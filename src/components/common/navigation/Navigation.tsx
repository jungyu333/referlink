import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  to: string;
  activePath: string;
  label: string;
  width?: string;
  height?: string;
};

export const Navigation = ({
  label,
  to,
  activePath,
  width = '114px',
  height = '42px',
}: Props) => {
  const location = useLocation();

  const isActive = location.pathname.startsWith(activePath);

  return (
    <CustomNavLink
      $width={width}
      $height={height}
      to={to}
      className={isActive ? 'active' : ''}
    >
      {label}
    </CustomNavLink>
  );
};

const CustomNavLink = styled(NavLink)<{ $width: string; $height: string }>`
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
