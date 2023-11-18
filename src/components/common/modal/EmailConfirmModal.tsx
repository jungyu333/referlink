import * as S from '@styles/components/common/modal/emailConfirmModal.styles';
import { Button, Fonts, Modal, svgEmail } from 'referlink-ui';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const EmailConfirmModal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.Content>
        <section>
          {svgEmail}

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
          fontStyle={Fonts.body}
        />
      </S.Content>
    </Modal>
  );
};
