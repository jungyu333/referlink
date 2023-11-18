import ReactModal from 'react-modal';
import { ReactComponent as DangerCircleSVG } from '@styles/images/svg/solar_danger-circle-bold.svg';
import * as S from '@styles/components/common/modal/confirmModal.styles';
import { Button, ButtonTypes, Fonts } from 'referlink-ui';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmLabel: string;
  cancleLabel: string;
  mainText: string;
  subText: string;
  secondLineText?: string;
};

export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  confirmLabel,
  cancleLabel,
  mainText,
  subText,
  secondLineText,
}: Props) => {
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
    >
      <S.Wrapper>
        <DangerCircleSVG />
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
              buttonText={cancleLabel}
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
    </ReactModal>
  );
};
