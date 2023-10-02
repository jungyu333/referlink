import { ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from '@styles/components/common/toast/alertToast.styles';

const defaultToastOption: ToastOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

export const showAlertToast = {
  info: (message: string, options: ToastOptions = {}) => {
    toast.info(message, {
      ...defaultToastOption,
      ...options,
    });
  },
  success: (message: string, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      ...options,
    });
  },
  error: (message: string, options: ToastOptions = {}) => {
    toast.error(message, {
      ...defaultToastOption,
      ...options,
    });
  },
};

export type TShowAlertToast = typeof showAlertToast;

export const AlertToast = () => {
  return <S.Container />;
};
