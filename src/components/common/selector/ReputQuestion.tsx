import * as S from '@styles/components/common/selector/reputQuestion.styles';

export const ReputQuestion = () => {
  return (
    <S.QuestionContainer>
      <h2>
        <b>2-1. </b>지원자님의 일하는 성향은?
      </h2>

      <S.SelectContainer>
        <S.Select $isPrimary={true}>📝 과정이 중요</S.Select>
        <S.Select>매우 그러함</S.Select>
        <S.Select>다소 그러함</S.Select>
        <S.Select>매우 그러함</S.Select>
        <S.Select $isPrimary={true}>🥇 결과가 중요</S.Select>
      </S.SelectContainer>
    </S.QuestionContainer>
  );
};
