import * as S from '@styles/page/landing.styles';

export const Landing = () => {
  return (
    <S.Wrapper>
      <S.MainText>
        누구나 평판 관리를 할 수 있게
        <br />
        평판조회의 시작, 레퍼링크
      </S.MainText>

      <S.Button>
        <div>평판 작성하기</div>
      </S.Button>
    </S.Wrapper>
  );
};
