import { Button } from '@components/common/button';
import { ReactComponent as IllustSVG } from '@styles/images/svg/Group 3028.svg';
import * as S from '@styles/page/reput/myReputation.styles';
import { fonts } from '@styles/theme';

export const MyReputation = () => {
  return (
    <S.Wrapper>
      <IllustSVG />

      <main>
        <S.Content>
          <h1>평판 작성을 요청해보세요</h1>
          <p>평판 작성을 요청하고 확인할 수 있어요.</p>
        </S.Content>

        <Button
          buttonText="평판 작성 요청"
          width="189px"
          height="68px"
          px="36px"
          py="24px"
          fontStyle={fonts.subtitle1}
        />
      </main>
    </S.Wrapper>
  );
};
