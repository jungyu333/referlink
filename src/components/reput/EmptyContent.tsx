import { RequestReputModal } from '@components/common';
import { useSwitch } from '@hooks/useSwitch';
import * as S from '@styles/components/reput/emptyContent.styles';
import { Button, Fonts, svgShareWithCircle } from 'referlink-ui';

export const EmptyContent = () => {
  const [isOpenRequest, onOpenRequest, onCloseRequest] = useSwitch();
  return (
    <S.Wrapper>
      {svgShareWithCircle}

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
          fontStyle={Fonts.subtitle1}
          onClick={onOpenRequest}
        />

        {isOpenRequest && (
          <RequestReputModal
            isOpen={isOpenRequest}
            onClose={onCloseRequest}
            onConfirm={onCloseRequest}
          />
        )}
      </main>
    </S.Wrapper>
  );
};
