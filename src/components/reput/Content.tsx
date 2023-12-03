import * as S from '@styles/components/reput/content.styles';
import {
  Button,
  ButtonTypes,
  ReputCard,
  svgNote,
  svgShare,
} from 'referlink-ui';

export const Content = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <h1>내가 받은 평판</h1>
        <div>
          <Button
            svgIcon={svgNote}
            width="177px"
            height="52px"
            px="20px"
            py="10px"
            buttonText="평판 작성 요청"
            isIcon
          />
          <Button
            buttonText="평판 공유하기"
            width="174px"
            height="52px"
            px="20px"
            py="10px"
            buttonType={ButtonTypes.outlined}
            svgIcon={svgShare}
            isIcon
          />
        </div>
      </S.Header>

      <S.Main>
        {[1, 2, 3].map((item) => (
          <ReputCard
            mainContent="temp"
            headContent="temp"
            date="temp"
            key={item}
            onClick={() => console.log(item)}
          />
        ))}
      </S.Main>
    </S.Wrapper>
  );
};
