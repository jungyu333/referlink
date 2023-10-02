import { ReactNode } from 'react';
import { ToastOptions, toast } from 'react-toastify';
import { ReactComponent as TickCircleSVG } from '@styles/images/svg/tickCircle.svg';
import 'react-toastify/dist/ReactToastify.css';
import * as S from '@styles/components/common/Toast.styles';

const defaultToastOption: ToastOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

export const showToast = {
  info: (message: ReactNode, options: ToastOptions = {}) => {
    toast.info(message, {
      ...defaultToastOption,
      icon: <TickCircleSVG />,
      ...options,
    });
  },
  success: (message: ReactNode, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      ...options,
    });
  },
  error: (message: ReactNode, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      ...options,
    });
  },
};

export const Toast = () => {
  return <S.Container />;
};
