import { Header, Footer } from '@components/common';
import { Outlet } from 'react-router-dom';
import * as S from '@styles/components/common/layout.styles';

type Props = {
  isFooter?: boolean;
  isHeaderMenu?: boolean;
  children?: React.ReactNode;
};

export const Layout = ({
  isFooter = true,
  isHeaderMenu = true,
  children,
}: Props) => {
  return (
    <S.Wrapper>
      <Header isHeaderMenu={isHeaderMenu} />

      <S.Content>{children ? children : <Outlet />}</S.Content>

      {isFooter && <Footer />}
    </S.Wrapper>
  );
};
