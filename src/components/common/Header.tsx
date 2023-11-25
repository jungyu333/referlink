import { ReactComponent as MyPageSVG } from '@styles/images/svg/mypage.svg';
import * as S from '@styles/components/common/header.styles';
import { svgLogo } from 'referlink-ui';
import { useDetailNavigation } from '@hooks/useDetailNavigation';
import { useGetToken } from '@hooks/useGetToken';

type Props = {
  isHeaderMenu?: boolean;
};

export const Header = ({ isHeaderMenu = true }: Props) => {
  const { pathNavigation } = useDetailNavigation();
  const { detailNavigation } = useDetailNavigation();
  const userId = useGetToken();
  const onClickMypage = () => {
    if (userId) detailNavigation('/mypage', userId);
  };

  return (
    <S.Wrapper>
      <S.Logo onClick={() => pathNavigation('/')}>{svgLogo}</S.Logo>

      {isHeaderMenu && (
        <>
          <S.AcceptReputation>
            <S.ButtonText>내가 받은 평판</S.ButtonText>
          </S.AcceptReputation>
          <S.PassReputation>
            <S.ButtonText>내가 작성한 평판</S.ButtonText>
          </S.PassReputation>

          <S.MyPageButton onClick={onClickMypage}>
            <MyPageSVG />
            <S.ButtonText>마이페이지</S.ButtonText>
          </S.MyPageButton>
        </>
      )}
    </S.Wrapper>
  );
};
