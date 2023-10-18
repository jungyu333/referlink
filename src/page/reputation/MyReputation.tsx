import { ReputButton } from '@components/common/button';
import { ReputCard } from '@components/reput';

import styled from 'styled-components';

const Content = () => {
  return (
    <Wrapper>
      <Header>
        <h1>내가 받은 평판</h1>
        <div>
          <ReputButton text="평판 작성 요청" />
          <ReputButton text="평판 공유하기" isShare />
        </div>
      </Header>

      <Main>
        {[1, 2, 3].map((item) => (
          <ReputCard key={item} />
        ))}
      </Main>
    </Wrapper>
  );
};

export const MyReputation = () => {
  return <Content />;
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
  width: 1116px;
  align-items: center;
  gap: 355px;

  & h1 {
    display: flex;
    width: 390px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary1};
    font: ${({ theme }) => theme.fonts.headline1};
    letter-spacing: -0.68px;
  }

  & > div {
    display: flex;
    width: 371px;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 24px;
`;
