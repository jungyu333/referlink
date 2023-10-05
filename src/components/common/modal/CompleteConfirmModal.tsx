import { Button } from '@components/common/button';
import { fonts } from '@styles/theme';
import ReactModal from 'react-modal';
import * as S from '@styles/components/common/modal/completeConfirmModal.styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const CompleteConfirmModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <ReactModal
      style={{
        content: {
          display: 'inline-flex',
          padding: '48px 60px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '35px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          overflow: 'auto',
          borderRadius: '8px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Custom Modal"
    >
      <S.Content>
        <section>
          <h1>평판 작성이 완료되었습니다.</h1>
          <p>더 나은 커리어 관리를 위한 평판작성을 요청해보시겠습니까?</p>
        </section>

        <S.ButtonContainer>
          <Button
            onClick={onConfirm}
            buttonText="평판 작성 요청"
            width="126px"
            height="40px"
            px="16px"
            py="10px"
            fontStyle={fonts.body}
          />
          <Button
            onClick={onClose}
            buttonText="취소"
            isPrimary={false}
            width="80px"
            height="40px"
            px="16px"
            py="10px"
            fontStyle={fonts.body}
          />
        </S.ButtonContainer>
      </S.Content>
    </ReactModal>
  );
};
