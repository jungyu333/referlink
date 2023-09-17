import { Header, Footer, Menu } from '@components/common';
import { Outlet } from 'react-router-dom';
import * as S from '@styles/components/common/layout.styles';

type Props = {
  isFooter?: boolean;
  isMenu?: boolean;
  mainText?: string;
  subText?: string;
};

export const Layout = ({
  isFooter = true,
  isMenu = false,
  mainText,
  subText,
}: Props) => {
  return (
    <S.Wrapper>
      <Header />
      {isMenu && mainText && (
        <Menu mainText={mainText} subText={subText && subText} />
      )}
      <S.Content>
        <Outlet />
      </S.Content>

      {isFooter && <Footer />}
    </S.Wrapper>
  );
};
