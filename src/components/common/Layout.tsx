import { Header, Footer } from '@components/common';
import { Outlet } from 'react-router-dom';
import * as S from '@styles/components/common/layout.styles';

type Props = {
  isFooter?: boolean;
};

export const Layout = ({ isFooter = true }: Props) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>

      {isFooter && <Footer />}
    </S.Wrapper>
  );
};
