import { useLocation } from 'react-router-dom';
import * as S from '@styles/components/common/navigation/navigation.styles';

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
    <S.CustomNavLink
      $width={width}
      $height={height}
      to={to}
      className={isActive ? 'active' : ''}
    >
      {label}
    </S.CustomNavLink>
  );
};
