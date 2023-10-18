import { Button, ReputButton } from '@components/common/button';
import { ReputCard } from '@components/reput';
import { ReactComponent as IllustSVG } from '@styles/images/svg/Group 3028.svg';
import * as S from '@styles/page/reput/myReputation.styles';
import { fonts } from '@styles/theme';
import styled from 'styled-components';

const EmptyContent = () => {
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
    </Wrapper>
  );
};

export const MyReputation = () => {
  return <Content />;
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey5};
  width: 100%;
  height: 100%;
  display: flex;
  gap: 101px;
  flex-direction: column;
  padding: 0 162px;
  padding-top: 103px;
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
