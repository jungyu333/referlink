import { Button, Fonts, ReputCard, svgNote } from 'referlink-ui';
import * as S from '@styles/page/reput/writtenReput.styles';

export const WrittenReput = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <h1>내가 작성한 평판</h1>

        <Button
          buttonText="초대하기"
          isIcon
          svgIcon={svgNote}
          width="138px"
          height="52px"
          fontStyle={Fonts.subtitle2}
          px="20px"
          py="10px"
        />
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
