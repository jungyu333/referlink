import { Layout } from '@components/common';
import { Button } from '@components/common/button';
import { ReactComponent as IllustSVG } from '@styles/images/svg/38.svg';
import styled from 'styled-components';

export const MyReputation = () => {
  return (
    <Layout isFooter={false}>
      <Wrapper $isFooter={false}>
        <IllustSVG />

        <main>
          <Content>
            <h1>평판 작성을 요청해보세요</h1>
            <p>평판 작성을 요청하고 확인할 수 있어요.</p>
          </Content>

          <Button
            buttonText="평판 작성 요청"
            width="189px"
            height="68px"
            px="36px"
            py="24px"
          />
        </main>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div<{ $isFooter: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  flex-shrink: 1;
  margin-top: 286px;
  margin-bottom: ${({ $isFooter }) => ($isFooter ? '217px' : '')};
  justify-content: center;
  & svg {
    width: 475px;
    height: 213.706px;
    flex-shrink: 0;
  }

  & main {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 56px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & h1 {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.headline2};
    letter-spacing: -0.48px;
  }

  & p {
    color: ${({ theme }) => theme.colors.grey3};
    font: ${({ theme }) => theme.fonts.body};
    letter-spacing: -0.32px;
  }
`;
