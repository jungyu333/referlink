import { ConfirmModal } from '@components/common';
import { Button } from '@components/common/button';
import { useSwitch } from '@hooks/useSwitch';
import * as S from '@styles/page/landing.styles';

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
          onClick={onOpen}
          buttonText="평판 작성 요청하기"
          py="24px"
          width="225px"
          height="68px"
          px="36px"
        />

        <ConfirmModal
          isOpen={isOpen}
          onClose={onClose}
          onConfirm={onClose}
          confirmLabel="완료"
          cancleLabel="취소"
          mainText="작성 완료하신 평판은 수정/삭제 할 수 없습니다."
          secondLineText="작성을 완료하시겠습니까?"
          subText="작성된 평판의 권한은 지원자에게 귀속됩니다."
        />
      </main>
    </S.Wrapper>
  );
};
