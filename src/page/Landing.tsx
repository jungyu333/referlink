import { ModifyConfirmModal } from '@components/common';
import * as S from '@styles/page/landing.styles';
import { useState } from 'react';

export const Landing = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleConfirm = () => {
    console.log('확인');
    setModalIsOpen(false);
  };
  return (
    <S.Wrapper>
      <S.MainText>
        누구나 평판 관리를 할 수 있게
        <br />
        평판조회의 시작, 레퍼링크
      </S.MainText>

      <S.Button onClick={() => setModalIsOpen(true)}>
        <div>평판 작성하기</div>
      </S.Button>

      <ModifyConfirmModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        onConfirm={handleConfirm}
      />
    </S.Wrapper>
  );
};
