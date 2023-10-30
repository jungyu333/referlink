import { Button } from '@components/common/button';
import { fonts } from '@styles/theme';
import ReactModal from 'react-modal';
import { ReactComponent as DangerCircleSVG } from '@styles/images/svg/solar_danger-circle-bold.svg';
import * as S from '@styles/components/common/modal/modifyConfirmModal.styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const ModifyConfirmModal = ({ isOpen, onClose, onConfirm }: Props) => {
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
      <S.Wrapper>
        <DangerCircleSVG />
        <S.Content>
          <section>
            <h1>
              작성 완료하신 평판은 수정/삭제 할 수 없습니다. <br />
              작성을 완료하시겠습니까?
            </h1>
            <p>작성된 평판의 권한은 지원자에게 귀속됩니다.</p>
          </section>

          <S.ButtonContainer>
            <Button
              onClick={onClose}
              buttonText="취소"
              isPrimary={false}
              width="200px"
              height="44px"
              px="16px"
              py="10px"
              fontStyle={fonts.body}
            />
            <Button
              onClick={onConfirm}
              buttonText="완료"
              width="200px"
              height="44px"
              px="16px"
              py="10px"
              fontStyle={fonts.body}
            />
          </S.ButtonContainer>
        </S.Content>
      </S.Wrapper>
    </ReactModal>
  );
};
