import { useDetailNavigation } from '@hooks/useDetailNavigation';
import * as S from '@styles/page/landing/landing.styles';
import { Button } from 'referlink-ui';

export const Landing = () => {
  const { pathNavigation } = useDetailNavigation();

  return (
    <S.Wrapper>
      <main>
        <S.MainText>
          누구나 평판 관리를 할 수 있게
          <br />
          평판조회의 시작, <b>레퍼링크</b>
        </S.MainText>

        <Button
          buttonText="레퍼링크 시작하기"
          py="24px"
          width="221px"
          height="68px"
          px="36px"
          onClick={() => pathNavigation('/service-start')}
        />
      </main>
    </S.Wrapper>
  );
};
