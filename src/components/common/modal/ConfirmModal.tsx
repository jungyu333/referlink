import * as S from '@styles/components/common/modal/confirmModal.styles';
import {
  Button,
  ButtonTypes,
  Fonts,
  Handler,
  Modal,
  svgDangerCircle,
} from 'referlink-ui';

type Props = {
  isOpen: boolean;
  onClose: Handler;
  onConfirm: Handler;
  confirmLabel: string;
  cancelLabel: string;
  mainText: string;
  subText: string;
  secondLineText?: string;
};

export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  confirmLabel,
  cancelLabel,
  mainText,
  subText,
  secondLineText,
}: Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <S.Wrapper>
        {svgDangerCircle}
        <S.Content>
          <section>
            <h1>
              {mainText} <br />
              {secondLineText}
            </h1>
            <p>{subText}</p>
          </section>

          <S.ButtonContainer>
            <Button
              onClick={onClose}
              buttonText={cancelLabel}
              buttonType={ButtonTypes.outlined}
              width="200px"
              height="44px"
              px="16px"
              py="10px"
              fontStyle={Fonts.body}
            />
            <Button
              onClick={onConfirm}
              buttonText={confirmLabel}
              width="200px"
              height="44px"
              px="16px"
              py="10px"
              fontStyle={Fonts.body}
            />
          </S.ButtonContainer>
        </S.Content>
      </S.Wrapper>
    </Modal>
  );
};
