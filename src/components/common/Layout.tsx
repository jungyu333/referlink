import { Header, Footer } from '@components/common';
import { Outlet } from 'react-router-dom';
import * as S from '@styles/components/common/layout.styles';

type Props = {
  isFooter?: boolean;
  isHeaderMenu?: boolean;
};

export const Layout = ({ isFooter = true, isHeaderMenu = true }: Props) => {
  return (
    <S.Wrapper>
      <Header isHeaderMenu={isHeaderMenu} />

      <S.Content>
        <Outlet />
      </S.Content>

      {isFooter && <Footer />}
    </S.Wrapper>
  );
};
