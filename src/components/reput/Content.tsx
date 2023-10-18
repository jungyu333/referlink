import { ReputButton } from '@components/common/button';
import { ReputCard } from '@components/reput/ReputCard';
import * as S from '@styles/components/reput/content.styles';

export const Content = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <h1>내가 받은 평판</h1>
        <div>
          <ReputButton text="평판 작성 요청" />
          <ReputButton text="평판 공유하기" isShare />
        </div>
      </S.Header>

      <S.Main>
        {[1, 2, 3].map((item) => (
          <ReputCard key={item} />
        ))}
      </S.Main>
    </S.Wrapper>
  );
};
