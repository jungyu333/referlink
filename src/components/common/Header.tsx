import * as S from '@styles/components/common/header.styles';
import { Button, ButtonTypes, Fonts, svgLogo, svgMy } from 'referlink-ui';
import { useDetailNavigation } from '@hooks/useDetailNavigation';
import { useGetToken } from '@hooks/useGetToken';

type Props = {
  isHeaderMenu?: boolean;
};

export const Header = ({ isHeaderMenu = true }: Props) => {
  const { pathNavigation } = useDetailNavigation();

  const accessToken = useGetToken();

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

          {accessToken && (
            <S.MyPageButton>
              <Button
                onClick={() => pathNavigation('/my')}
                buttonText="마이페이지"
                isIcon
                svgIcon={svgMy}
                px="16px"
                py="10px"
                buttonType={ButtonTypes.outlined}
                width="133px"
                height="44px"
                fontStyle={Fonts.body}
              />
            </S.MyPageButton>
          )}
        </>
      )}
    </S.Wrapper>
  );
};
