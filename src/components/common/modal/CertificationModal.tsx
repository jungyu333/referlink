import { Handler, Modal } from 'referlink-ui';

type Props = {
  isOpen: boolean;
  onClose: Handler;
  onConfirm: Handler;
  confirmLabel: string;
  cancelLabel: string;
};

export const CertificationModal = ({
  isOpen,
  onClose,
  onConfirm,
  confirmLabel,
  cancelLabel,
}: Props) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <>modal</>
    </Modal>
  );
};
