import ReactModal from 'react-modal';
import * as S from '@styles/components/common/modal/emailConfirmModal.styles';
import { ReactComponent as EmailSVG } from '@styles/images/svg/ic_round-mail.svg';
import { Button } from '@components/common/button';
import { fonts } from '@styles/theme';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const EmailConfirmModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <ReactModal
      style={{
        content: {
          display: 'inline-flex',
          padding: '32px 60px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '35px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          overflow: 'auto',
          borderRadius: '16px',
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
          <EmailSVG />

          <S.TextContainer>
            <h1>
              가입 이메일로 <b>인증을 요청하였습니다.</b>
            </h1>
            <p>인증확인 버튼을 통해 회원가입을 완료해주세요</p>
          </S.TextContainer>
        </section>
        <Button
          onClick={onClose}
          buttonText="확인"
          width="80px"
          height="40px"
          px="16px"
          py="10px"
          fontStyle={fonts.body}
        />
      </S.Content>
    </ReactModal>
  );
};
