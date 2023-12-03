import * as S from '@styles/components/common/layout/header.styles';
import { Button, ButtonTypes, Fonts, svgLogo, svgMy } from 'referlink-ui';
import { useDetailNavigation } from '@hooks/useDetailNavigation';
import { useGetToken } from '@hooks/useGetToken';
import { Navigation } from '@components/common/navigation';

type Props = {
  isHeaderMenu?: boolean;
};

export const Header = ({ isHeaderMenu = true }: Props) => {
  const { pathNavigation } = useDetailNavigation();

  const accessToken = useGetToken();

  return (
    <S.Wrapper>
      <S.Logo onClick={() => pathNavigation('/')}>{svgLogo}</S.Logo>

      {isHeaderMenu && accessToken && (
        <S.HeaderMenu>
          <S.NavTabs>
            <Navigation
              to="/myreput"
              activePath="/myreput"
              label="내가 받은 평판"
              width="114px"
            />

            <Navigation
              to="/writtenreput"
              activePath="/writtenreput"
              label="내가 작성한 평판"
              width="128px"
            />
          </S.NavTabs>

          {accessToken && (
            <>
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
            </>
          )}
        </S.HeaderMenu>
      )}
    </S.Wrapper>
  );
};
