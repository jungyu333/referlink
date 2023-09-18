import { ReactComponent as LogoSVG } from '@styles/images/svg/logo.svg';
import { ReactComponent as MyPageSVG } from '@styles/images/svg/mypage.svg';
import * as S from '@styles/components/common/header.styles';
import useDetailNavigation from '@hooks/useDetailNavigation';

type Props = {
  isHeaderMenu?: boolean;
};

export const Header = ({ isHeaderMenu = true }: Props) => {
  const { pathNavigation } = useDetailNavigation('');

  return (
    <S.Wrapper>
      <S.Logo onClick={pathNavigation}>
        <LogoSVG />
      </S.Logo>

      {isHeaderMenu && (
        <>
          <S.AcceptReputation>
            <S.ButtonText>내가 받은 평판</S.ButtonText>
          </S.AcceptReputation>
          <S.PassReputation>
            <S.ButtonText>내가 작성한 평판</S.ButtonText>
          </S.PassReputation>

          <S.MyPageButton>
            <MyPageSVG />
            <S.ButtonText>마이페이지</S.ButtonText>
          </S.MyPageButton>
        </>
      )}
    </S.Wrapper>
  );
};
