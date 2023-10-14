import * as S from '@styles/components/reput/reputCard.styles';
import { ReactComponent as CheckSVG } from '@styles/images/svg/check.svg';
import { ReactComponent as DateSVG } from '@styles/images/svg/date.svg';

export const ReputCard = () => {
  return (
    <S.Wrapper>
      <S.Main>
        <div>
          <h1>준영/회사글자가늘어나면 글씨째로늘어나요/직무</h1>
          <div>
            <CheckSVG />
            <h2>평판 비공개</h2>
          </div>
        </div>

        <p>
          지원자님은 평소 행실이 바르고 기획적인 역량이나 디자인적인 역량이나
          개발적인 역량 모두를 갖춘 이시대의 진정한 풀스텍 IT 인재입니다.
        </p>
      </S.Main>

      <section />

      <S.DateContainer>
        <DateSVG />

        <h1>2023.08.24</h1>
      </S.DateContainer>
    </S.Wrapper>
  );
};
