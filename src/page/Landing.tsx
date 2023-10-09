import { RequestReputModal } from '@components/common';
import * as S from '@styles/page/landing.styles';
import { useState } from 'react';

export const Landing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onConfirm = () => {
    setIsOpen(false);
  };
  return (
    <S.Wrapper>
      <S.MainText>
        누구나 평판 관리를 할 수 있게
        <br />
        평판조회의 시작, 레퍼링크
      </S.MainText>

      <S.Button onClick={() => setIsOpen(true)}>
        <div>평판 작성하기</div>
      </S.Button>

      <RequestReputModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={onConfirm}
      />
    </S.Wrapper>
  );
};
