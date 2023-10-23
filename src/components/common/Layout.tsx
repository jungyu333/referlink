import { Header, Footer } from '@components/common';
import * as S from '@styles/components/common/layout.styles';

export type LayoutProps = {
  isFooter?: boolean;
  isHeaderMenu?: boolean;
  children: React.ReactElement;
};

export const Layout = ({
  isFooter = true,
  isHeaderMenu = true,
  children,
}: LayoutProps) => {
  return (
    <S.Wrapper>
      <Header isHeaderMenu={isHeaderMenu} />

      <S.Content>{children}</S.Content>

      {isFooter && <Footer />}
    </S.Wrapper>
  );
};
