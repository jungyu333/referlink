import * as S from '@styles/page/landing.styles';
import { Button } from 'referlink-ui';
import { useSwitch } from '../hooks/useSwitch';
import {
  ConfirmModal,
  EmailConfirmModal,
  RequestReputModal,
} from '../components';

export const Landing = () => {
  const [isOpen, onOpen, onClose] = useSwitch();
  return (
    <S.Wrapper>
      <main>
        <S.MainText>
          누구나 평판 관리를 할 수 있게
          <br />
          평판조회의 시작, 레퍼링크
        </S.MainText>

        <Button
          buttonText="평판 작성 요청하기"
          py="24px"
          width="225px"
          height="68px"
          px="36px"
          onClick={onOpen}
        />

        <RequestReputModal
          isOpen={isOpen}
          onClose={onClose}
          //confirmLabel="dd"
          //cancelLable="dd"
          onConfirm={onClose}
          //mainText="dd"
          //subText="dd"
        />
      </main>
    </S.Wrapper>
  );
};
