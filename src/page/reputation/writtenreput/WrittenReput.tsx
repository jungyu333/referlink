import { Button, Fonts, ReputCard, svgNote } from 'referlink-ui';
import styled from 'styled-components';

export const WrittenReput = () => {
  return (
    <Wrapper>
      <Header>
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
      </Header>

      <Main>
        {[1, 2, 3].map((item) => (
          <ReputCard
            mainContent="temp"
            headContent="temp"
            date="temp"
            key={item}
            onClick={() => console.log(item)}
          />
        ))}
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey5};
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 101px;
  flex-direction: column;
  padding: 0 162px;
  padding-top: 103px;
  padding-bottom: 157px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h1 {
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 24px;
`;
