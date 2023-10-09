import { Layout } from '@components/common';
import { Button } from '@components/common/button';
import { ReactComponent as IllustSVG } from '@styles/images/svg/38.svg';
import * as S from '@styles/page/reput/myReputation.styles';

export const MyReputation = () => {
  return (
    <Layout isFooter={false}>
      <S.Wrapper $isFooter={false}>
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
          />
        </main>
      </S.Wrapper>
    </Layout>
  );
};
